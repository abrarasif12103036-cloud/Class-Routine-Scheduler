# Class Routine Manager - Portable Application

## 🚀 Quick Start

### On Your Computer:
1. **Extract this folder** to any location (Desktop, Documents, etc.)
2. **Double-click `START.bat`**
3. **Wait 3-5 seconds** - the app will open automatically

That's it! You're ready to use the application.

---

## 📋 What's Inside

- **`frontend/`** - Desktop application (Class Routine Manager.exe)
- **`backend/`** - Server files and database
- **`docs/`** - Documentation and guides
- **`START.bat`** - Launch script (double-click to run)

---

## ✨ Features

- **Calendar** - 7-day class schedule view
- **Checklist** - Track homework and assignments
- **Schedule** - Today/tomorrow focused view
- **Resources** - Store and organize study materials (PDFs, images)
- **Settings** - Customize subjects
- **📊 Custom Schedule Upload** - Upload your own Excel file to load your routine!
- **Excel Import** - Load schedules from XLSX files
- **Data Persistence** - All data stored locally

---

## 📊 New: Upload Your Custom Schedule!

### How to Use:
1. Open the app and go to **⚙️ Settings**
2. Click **"📁 Choose Excel File"**
3. Select your custom schedule Excel file
4. Click upload and your subjects are added automatically!

### File Format:
- First column: Subject names
- Next 7 columns: Days (Monday through Sunday)
- Cells: Class times or schedule info

**Example:**
```
Subject       Monday        Tuesday       Wednesday     Thursday      Friday
Mathematics   10:00-11:00   11:00-12:00               10:00-11:00
Physics                     1:00-2:00     2:00-3:00                  2:00-3:00
Chemistry     2:00-3:00                               3:00-4:00
```

📚 **See `docs/HOW_TO_CREATE_EXCEL_SCHEDULE.md`** for detailed instructions!

---

## 💾 System Requirements

- **Windows 7, 8, 10, or 11**
- **~300 MB disk space**
- **No internet required** (runs completely offline)
- **No installation needed** (portable - works anywhere)

---

## 📖 How It Works

When you run `START.bat`:

1. A **backend terminal window** opens (this runs the server)
2. The **desktop app window** opens in ~3 seconds
3. Both must stay running while you use the app
4. To close: First close the app window, then the terminal window

---

## ⚠️ Important Notes

- **The terminal window must stay open** while using the app
- **Don't close the terminal** until you're done using the application
- If the app doesn't open, check that port 5000 is available
- If you have an error about port 5000, close the terminal and try again

---

## 🔒 Privacy & Security

- ✅ All data stays on your computer (no cloud upload)
- ✅ No internet connection required
- ✅ No tracking or analytics
- ✅ Completely offline and private

---

## 📁 On USB Drive / Pen Drive

You can copy this entire folder to a USB drive and use it on any computer:

1. Copy `Routine Application` folder to USB drive
2. On any computer, copy the folder to local drive
3. Double-click `START.bat` to run
4. Everything works automatically

---

## ❓ Troubleshooting

**Problem: "Backend dependencies not found"**
- Solution: Ensure the entire folder structure is copied correctly (including `backend/node_modules`)

**Problem: "Desktop app executable not found"**
- Solution: Ensure the `frontend/` folder contains `Class Routine Manager.exe`

**Problem: Port 5000 already in use**
- Solution: Close the terminal and try again, or wait a moment for port to free up

**Problem: App doesn't respond**
- Solution: Restart - close both windows and double-click START.bat again

---

## 📞 Support

For issues or questions:
1. Check the `docs/` folder for detailed guides
2. Ensure all files are copied correctly
3. Verify your folder structure matches what's expected

---

**Created:** December 2025  
**Author:** Abrar Asif  
**Version:** 1.0
