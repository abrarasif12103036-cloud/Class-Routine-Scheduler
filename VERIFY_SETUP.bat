@echo off
REM Quick setup script for first-time use
REM This checks if everything is in place before launching

setlocal enabledelayedexpansion

echo.
echo ============================================
echo   CLASS ROUTINE MANAGER - Setup Check
echo ============================================
echo.

set "appDir=%~dp0"
set "success=1"

REM Check frontend folder
if exist "%appDir%frontend\Class Routine Manager.exe" (
    echo ✓ Frontend application found
) else (
    echo ✗ Frontend application NOT found
    set "success=0"
)

REM Check backend source
if exist "%appDir%backend\src\server.ts" (
    echo ✓ Backend source files found
) else (
    echo ✗ Backend source files NOT found
    set "success=0"
)

REM Check backend node_modules
if exist "%appDir%backend\node_modules" (
    echo ✓ Backend dependencies found
) else (
    echo ✗ Backend dependencies NOT found
    set "success=0"
)

REM Check database
if exist "%appDir%backend\database\routine.db" (
    echo ✓ Database found
) else (
    echo ⚠ Database not found (will be created on first run)
)

echo.

if !success! equ 1 (
    echo ============================================
    echo ✅ All components verified successfully!
    echo ============================================
    echo.
    echo You can now run: START.bat
    echo.
) else (
    echo ============================================
    echo ❌ Some files are missing!
    echo ============================================
    echo.
    echo Please check the folder structure and ensure:
    echo   1. frontend\ folder contains Class Routine Manager.exe
    echo   2. backend\ folder contains src\ and node_modules\
    echo.
)

pause
