# 📚 PORTABLE APPLICATION SETUP GUIDE

## What is This?

This is a **completely portable** version of Class Routine Manager that you can:
- Copy to any computer
- Run from a USB/Pen drive
- Share with friends and classmates
- Use without any installation

---

## 🎯 Before You Start

1. **Extract the folder** to your desired location
2. Make sure the entire folder structure is intact:
   ```
   Routine Application/
   ├── frontend/              (Desktop app executable)
   ├── backend/               (Server files and database)
   ├── docs/                  (Documentation)
   ├── START.bat              (Main launcher)
   ├── VERIFY_SETUP.bat       (Check if everything is installed)
   └── README.md              (This file)
   ```

---

## ✅ First Time Setup

### Step 1: Verify Everything
Before launching, run `VERIFY_SETUP.bat` to check all files are present:
- Right-click `VERIFY_SETUP.bat` → Open with → Command Prompt
- OR just double-click it
- It will tell you if anything is missing

### Step 2: Run the Application
Double-click `START.bat` to launch the application:
1. A **terminal window** will open (the server backend)
2. Wait 3 seconds...
3. The **desktop app** will open automatically
4. That's it!

---

## 🔧 Troubleshooting First Launch

### Issue: "Backend dependencies not found"
**Cause:** The `backend\node_modules` folder wasn't copied completely

**Solution:**
1. Delete the `Routine Application` folder
2. Copy the entire folder again from the source
3. Make sure Windows isn't hiding file extensions or skipping hidden files
4. Try `VERIFY_SETUP.bat` again

### Issue: "Desktop app executable not found"
**Cause:** The `frontend` folder is incomplete

**Solution:**
1. Check if `frontend\Class Routine Manager.exe` exists
2. If not, copy the full `Class Routine Manager` folder from source again
3. Verify file is about 200MB in size

### Issue: Application crashes on startup
**Cause:** Usually port 5000 is already in use

**Solution:**
1. Close the terminal window
2. Wait 10 seconds
3. Try `START.bat` again

---

## 💡 How the App Works

### Architecture
```
START.bat
  ↓
Backend Server (port 5000)
  ↓ serves
React Desktop App (Electron)
  ↓ connects to
SQLite Database
```

### Two Windows
When you launch via `START.bat`:
- **Terminal Window** = Backend server (do NOT close)
- **App Window** = Your actual application interface

### Data Flow
- Your schedule data → Stored locally in SQLite database
- Resources/files → Saved in backend\database folder
- Changes are saved automatically

---

## 📤 Sharing via USB/Pen Drive

### To Share:
1. Plug in your USB drive
2. Copy the entire `Routine Application` folder to USB
3. Give the USB to someone else
4. They copy `Routine Application` to their computer
5. They double-click `START.bat`

### Notes:
- Make sure the entire folder is copied (not just individual files)
- The folder is ~300MB, so ensure USB has enough space
- Works on Windows 7, 8, 10, and 11
- No additional installation needed on recipient's computer

---

## ⚙️ Manual Backend Start (Advanced)

If `START.bat` doesn't work, you can start the backend manually:

1. Open Command Prompt
2. Navigate to the `backend` folder:
   ```
   cd "C:\path\to\Routine Application\backend"
   ```
3. Run:
   ```
   npx tsx src/server.ts
   ```
4. You should see: `✅ Backend server running on http://localhost:5000`
5. In a separate terminal, run the EXE:
   ```
   "C:\path\to\Routine Application\frontend\Class Routine Manager.exe"
   ```

---

## 🔒 Privacy Guarantee

- ✅ All data stored locally (no cloud uploads)
- ✅ No internet required at all
- ✅ No tracking, analytics, or telemetry
- ✅ Completely isolated application
- ✅ Can be used offline anywhere

---

## 📋 What Each Folder Contains

### `frontend/`
- `Class Routine Manager.exe` - The desktop application
- All supporting libraries and resources
- Electron runtime (everything needed to run)

### `backend/`
- `src/` - Server source code (Node.js + Express)
- `database/` - SQLite database and data files
- `node_modules/` - All server dependencies
- Configuration files (package.json, tsconfig.json)

### `docs/`
- Setup guides and documentation
- Troubleshooting tips
- Feature documentation

---

## ⏱️ Expected Performance

| Action | Time |
|--------|------|
| Launch app | ~3-5 seconds |
| Load schedule | ~1 second |
| Switch tabs | Instant |
| Upload file (5MB) | ~2 seconds |
| Save checklist | ~0.5 seconds |

---

## 🆘 Getting Help

1. **Check README.md** for quick answers
2. **Run VERIFY_SETUP.bat** to diagnose issues
3. **Check docs folder** for detailed guides
4. **Look at terminal output** - error messages are helpful

---

## 🎓 For Educators/Admins

This application is perfect for classroom distribution:
- Copy to shared network drive
- Distribute via USB drive
- No licensing fees
- No network required
- No admin privileges needed
- Works on any Windows computer

---

## ✨ Final Notes

- This is a **100% portable** application
- **No installation needed** - just copy and run
- **No dependencies** - everything is bundled
- **No configuration** - works out of the box
- Perfect for sharing and distribution

Enjoy your Class Routine Manager! 🎉

---

**Version:** 1.0  
**Created:** December 2025  
**Author:** Abrar Asif
