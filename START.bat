@echo off
REM Class Routine Manager - Portable Application Launcher
REM This script starts both the backend server and desktop application

setlocal enabledelayedexpansion

REM Get the directory where this script is located
set SCRIPT_DIR=%~dp0

REM Change to backend directory
cd /d "%SCRIPT_DIR%backend"

REM Check if node_modules exists
if not exist "node_modules" (
    echo.
    echo ❌ ERROR: Backend dependencies not found!
    echo Please ensure the folder structure is complete.
    echo.
    pause
    exit /b 1
)

REM Start backend in a new window
echo Starting Class Routine Manager...
echo.
echo [1/2] Launching backend service on port 5000...
start "Class Routine Manager Backend" cmd /k "npx tsx src/server.ts"

REM Wait for backend to initialize by checking the health endpoint
echo [2/2] Waiting for backend to initialize...
set BACKEND_READY=0
set ATTEMPTS=0
set MAX_ATTEMPTS=60

:WAIT_FOR_BACKEND
if %ATTEMPTS% geq %MAX_ATTEMPTS% (
    echo ⚠️  Backend not responding, but proceeding anyway...
    goto START_FRONTEND
)

timeout /t 1 /nobreak >nul
set /a ATTEMPTS=%ATTEMPTS%+1

REM Try to ping the backend health endpoint
curl.exe -s "http://localhost:5000/api/health" >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo ✅ Backend is ready!
    set BACKEND_READY=1
    goto START_FRONTEND
) else (
    REM Show progress every 5 attempts
    if %ATTEMPTS% equ 5 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    if %ATTEMPTS% equ 10 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    if %ATTEMPTS% equ 20 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    if %ATTEMPTS% equ 30 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    if %ATTEMPTS% equ 40 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    if %ATTEMPTS% equ 50 echo    Waiting... (attempt %ATTEMPTS%/%MAX_ATTEMPTS%)
    goto WAIT_FOR_BACKEND
)

:START_FRONTEND
REM Check if frontend executable exists
if exist "%SCRIPT_DIR%frontend\Class Routine Manager.exe" (
    echo Launching desktop application...
    echo.
    start "" "%SCRIPT_DIR%frontend\Class Routine Manager.exe"
    echo.
    echo ✅ Setup complete! The app and backend are now running.
    echo.
    echo To use the application:
    echo   - The desktop app window should open automatically
    echo   - If it doesn't appear, check the taskbar
    echo   - Keep the backend terminal window open while using the app
    echo.
    echo To close the application:
    echo   - Close the desktop app window normally
    echo   - Close the backend terminal window (the one running the server)
    echo.
) else (
    echo.
    echo ❌ ERROR: Desktop app executable not found!
    echo Expected: "%SCRIPT_DIR%frontend\Class Routine Manager.exe"
    echo.
    echo The folder structure may be incomplete.
    pause
    exit /b 1
)

endlocal
