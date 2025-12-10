import express, { Express } from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { db } from './database/init.js'
import XLSX from 'xlsx'
import fs from 'fs'
import multer from 'multer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app: Express = express()
const PORT = process.env.PORT || 5000

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.mimetype === 'application/vnd.ms-excel') {
      cb(null, true)
    } else {
      cb(new Error('Only Excel files are allowed'))
    }
  }
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', timestamp: new Date() })
})

// Upload custom schedule endpoint
app.post('/api/upload-schedule', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' })
    }

    // Read the Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(sheet)

    if (!data || data.length === 0) {
      return res.status(400).json({ error: 'Excel file is empty' })
    }

    // Extract subjects (first column values) and days (header keys)
    const subjects = data.map((row: any) => {
      const firstKey = Object.keys(row)[0]
      return row[firstKey]
    }).filter((subject: any) => subject && subject.toString().trim() !== '')

    // Extract day columns (all headers except the first column)
    const days = Object.keys(data[0] || {}).slice(0, 7)

    // Process schedule for today and tomorrow
    const today = new Date()
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDayName = dayNames[today.getDay()]
    const tomorrowDate = new Date(today)
    tomorrowDate.setDate(tomorrowDate.getDate() + 1)
    const tomorrowDayName = dayNames[tomorrowDate.getDay()]

    // Build schedule for current day
    const todaySchedule: any[] = []
    const tomorrowSchedule: any[] = []
    const weekSchedule: any = {}

    data.forEach((row: any) => {
      const keys = Object.keys(row)
      const subject = row[keys[0]]
      
      if (!subject || subject.toString().trim() === '') return

      // Check each day
      days.forEach(day => {
        const value = row[day]
        if (value && value.toString().trim() !== '') {
          if (day === currentDayName) {
            todaySchedule.push({
              subject: subject.toString().trim(),
              time: value.toString().trim()
            })
          }
          if (day === tomorrowDayName) {
            tomorrowSchedule.push({
              subject: subject.toString().trim(),
              time: value.toString().trim()
            })
          }
          
          // Build week schedule
          if (!weekSchedule[day]) {
            weekSchedule[day] = []
          }
          weekSchedule[day].push({
            subject: subject.toString().trim(),
            time: value.toString().trim()
          })
        }
      })
    })

    res.json({
      success: true,
      subjects: Array.from(new Set(subjects.filter(s => s).map((s: any) => s.toString().trim()))),
      todaySchedule,
      tomorrowSchedule,
      weekSchedule,
      message: 'Schedule uploaded and parsed successfully'
    })
  } catch (error) {
    console.error('Upload error:', error)
    res.status(400).json({ 
      error: 'Failed to parse Excel file', 
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

// Schedule data endpoint
app.get('/api/schedule-data', (req, res) => {
  try {
    // Try multiple possible locations for the schedule file
    const possiblePaths = [
      path.join(process.cwd(), 'schedule.xlsx'),
      path.join(process.cwd(), '..', 'schedule.xlsx'),
      path.join(process.cwd(), '..', '..', 'schedule.xlsx'),
      'g:\\Routine\\schedule.xlsx'
    ]
    
    let scheduleFile = null
    for (const filePath of possiblePaths) {
      try {
        if (fs.existsSync(filePath)) {
          scheduleFile = filePath
          break
        }
      } catch {
        // Continue to next path
      }
    }
    
    if (!scheduleFile) {
      return res.status(400).json({ error: 'Schedule file not found', tried: possiblePaths })
    }
    
    const workbook = XLSX.readFile(scheduleFile)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(sheet)
    res.json(data)
  } catch (error) {
    res.status(400).json({ error: 'Failed to read schedule file', message: error.message })
  }
})

// Save resources to database
app.post('/api/resources/save', (req, res) => {
  try {
    const { subject, resources } = req.body
    
    if (!subject || !resources || !Array.isArray(resources)) {
      return res.status(400).json({ error: 'Invalid request: subject and resources array required' })
    }

    // Delete existing resources for this subject
    db.run('DELETE FROM materials WHERE subject = ?', [subject], (err) => {
      if (err) {
        console.error('Error deleting old resources:', err)
        return res.status(500).json({ error: 'Failed to delete old resources' })
      }

      // Insert new resources
      let saved = 0
      resources.forEach((resource: any) => {
        const id = `${subject}_${Date.now()}_${Math.random()}`
        db.run(
          'INSERT INTO materials (id, date, file_name, subject, file_type, file_path) VALUES (?, date(\'now\'), ?, ?, ?, ?)',
          [id, resource.name, subject, resource.type, resource.data],
          (err) => {
            if (err) console.error('Error saving resource:', err)
            else saved++
          }
        )
      })

      setTimeout(() => {
        res.json({ success: true, saved })
      }, 500)
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to save resources', message: (error as Error).message })
  }
})

// Get resources from database
app.get('/api/resources/:subject', (req, res) => {
  try {
    const { subject } = req.params
    
    db.all('SELECT * FROM materials WHERE subject = ?', [subject], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch resources' })
      }
      res.json(rows || [])
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resources', message: (error as Error).message })
  }
})

// Get all resources
app.get('/api/resources', (req, res) => {
  try {
    db.all('SELECT * FROM materials ORDER BY subject', (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch resources' })
      }
      res.json(rows || [])
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch resources', message: (error as Error).message })
  }
})

// Delete resource
app.delete('/api/resources/:id', (req, res) => {
  try {
    const { id } = req.params
    db.run('DELETE FROM materials WHERE id = ?', [id], (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete resource' })
      }
      res.json({ success: true })
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete resource', message: (error as Error).message })
  }
})

// Routes will be added here
// app.use('/api/homework', homeworkRoutes)
// app.use('/api/checklist', checklistRoutes)
// app.use('/api/materials', materialsRoutes)
// app.use('/api/schedule', scheduleRoutes)

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Error:', err)
  res.status(500).json({ error: err.message || 'Internal Server Error' })
})

// Serve static React app files
const distPaths = [
  path.join(__dirname, '../dist'),
  path.join(process.cwd(), 'frontend/dist'),
  path.join(process.cwd(), '../../frontend/dist'),
  path.join(process.cwd(), '../frontend/dist'),
  'G:\\Routine\\routine-app\\frontend\\dist'
]

let distPath = null
for (const p of distPaths) {
  try {
    if (fs.existsSync(p)) {
      distPath = p
      console.log(`📁 Serving static files from: ${p}`)
      app.use(express.static(p))
      break
    }
  } catch (e) {
    console.log(`  ✗ Checked ${p} - not found`)
  }
}

if (!distPath) {
  console.warn('⚠️  Could not find dist folder for static files')
  console.warn('  Checked paths:')
  distPaths.forEach(p => console.warn(`    - ${p}`))
} else {
  // SPA fallback - serve index.html for all non-API routes
  app.get('*', (req, res) => {
    // Skip API routes
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'Route not found' })
    }
    
    const indexPath = path.join(distPath, 'index.html')
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath)
    } else {
      res.status(404).send('index.html not found at ' + indexPath)
    }
  })
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Start server on all interfaces (0.0.0.0) for better compatibility
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`)
  console.log(`📁 Serving files from: G:\\Class Routine\\Routine Application\\frontend\\dist or similar`)
})

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down...')
  process.exit(0)
})
