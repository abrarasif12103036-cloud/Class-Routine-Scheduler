@echo off
setlocal enabledelayedexpansion
set "APP_DIR=%~dp0"
set "APP_EXE=%APP_DIR%Class Routine Manager.exe"
set "DESKTOP=%USERPROFILE%\Desktop"
set "VBS_FILE=%temp%\create_shortcut.vbs"
(
echo Set oWS = WScript.CreateObject("WScript.Shell"^)
echo sLinkFile = "%DESKTOP%\Class Routine Manager.lnk"
echo Set oLink = oWS.CreateShortcut(sLinkFile^)
echo oLink.TargetPath = "%APP_EXE%"
echo oLink.WorkingDirectory = "%APP_DIR%"
echo oLink.Description = "Class Routine Manager - Study & Schedule Management"
echo oLink.Save
echo WScript.Echo "Shortcut created on Desktop!"
) > "%VBS_FILE%"
cscript.exe "%VBS_FILE%"
del "%VBS_FILE%"
pause
