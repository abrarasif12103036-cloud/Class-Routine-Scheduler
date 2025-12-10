import sqlite3 from 'sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DB_PATH = path.join(__dirname, '../../database/routine.db')

// Ensure database directory exists
const dbDir = path.dirname(DB_PATH)
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

export const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('❌ Database connection error:', err)
  } else {
    console.log('✅ Connected to SQLite database')
    initializeDatabase()
  }
})

function initializeDatabase() {
  const tables = [
    `CREATE TABLE IF NOT EXISTS homework (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      class_name TEXT NOT NULL,
      homework_text TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      completed BOOLEAN DEFAULT 0,
      due_date TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS checklist (
      id TEXT PRIMARY KEY,
      task_text TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0,
      created_date TEXT DEFAULT CURRENT_DATE,
      due_date TEXT,
      priority TEXT DEFAULT 'medium'
    )`,
    `CREATE TABLE IF NOT EXISTS materials (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      file_name TEXT NOT NULL,
      file_path TEXT NOT NULL,
      subject TEXT,
      upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      file_type TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS schedule (
      id TEXT PRIMARY KEY,
      date TEXT NOT NULL,
      class_name TEXT NOT NULL,
      time TEXT,
      assignments TEXT,
      tasks TEXT
    )`
  ]
  
  let completed = 0
  tables.forEach(sql => {
    db.run(sql, (err) => {
      if (err) {
        console.error('Error creating table:', err)
      }
      completed++
      if (completed === tables.length) {
        console.log('✅ Database tables initialized')
      }
    })
  })
}
