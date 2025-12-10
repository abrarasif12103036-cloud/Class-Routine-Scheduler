const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process')
const path = require('path')
const fs = require('fs')

let mainWindow
let backendProcess

// Check if running in development (check for unpackaged files)
const isDev = !app.isPackaged

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    icon: path.join(__dirname, 'assets/icon.png')
  })

  let startUrl
  if (isDev) {
    // Development: load from Vite dev server
    startUrl = 'http://localhost:3000'
    console.log('Development mode - loading from localhost:3000')
  } else {
    // Production: load from backend server (which serves the React app)
    startUrl = 'http://localhost:5000'
    console.log('Production mode - loading from localhost:5000')
  }

  console.log('Loading URL:', startUrl)
  mainWindow.loadURL(startUrl)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

function startBackend() {
  // In packaged app, the backend isn't available
  // It should be started separately via the backend start script
  // This function is kept for development mode only
  if (isDev) {
    const backendPath = path.join(__dirname, '../../backend')
    
    backendProcess = spawn('npx', ['tsx', 'src/server.ts'], {
      cwd: backendPath,
      stdio: 'pipe'
    })

    backendProcess.stdout?.on('data', (data) => {
      console.log(`Backend: ${data}`)
    })

    backendProcess.stderr?.on('data', (data) => {
      console.error(`Backend Error: ${data}`)
    })
  } else {
    console.log('Production mode: Backend should be running separately')
  }
}

function waitForBackend(maxAttempts = 60) {
  return new Promise((resolve) => {
    let attempts = 0
    
    const checkBackend = setInterval(() => {
      attempts++
      
      const http = require('http')
      const req = http.get('http://localhost:5000/api/health', (res) => {
        clearInterval(checkBackend)
        console.log('✅ Backend is ready')
        resolve()
      })
      
      req.on('error', () => {
        if (attempts >= maxAttempts) {
          clearInterval(checkBackend)
          console.warn('⚠️  Backend not responding after ' + maxAttempts + ' attempts, proceeding anyway')
          resolve()
        }
      })
      
      req.end()
    }, 500)
  })
}

app.on('ready', async () => {
  if (!isDev) {
    // Wait for backend to be ready before showing window
    await waitForBackend()
  }
  
  createWindow()
})

app.on('window-all-closed', () => {
  if (backendProcess) {
    backendProcess.kill()
  }
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
