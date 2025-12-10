# 📚 Guide Index - Excel Schedule Upload Feature

## Quick Navigation

### I Just Want to Use This Feature
👉 **Start here:** `EXCEL_UPLOAD_QUICK_GUIDE.txt`
- Quick reference
- Step-by-step upload instructions
- Common issues and solutions

### I Want to Create My Excel File
👉 **Read this:** `docs/HOW_TO_CREATE_EXCEL_SCHEDULE.md`
- How to prepare your Excel file
- File format with examples
- Best practices
- Troubleshooting

### I Want to See a Template
👉 **Use this:** `SCHEDULE_TEMPLATE.txt`
- Sample file in correct format
- Open with Excel and edit
- Ready to use as starting point

### I Want Technical Details
👉 **Check this:** `IMPLEMENTATION_DETAILS.md`
- Code changes made
- API specifications
- Data flow
- Technical architecture

### I Want Feature Overview
👉 **Read this:** `FEATURE_EXCEL_UPLOAD_SUMMARY.md`
- What's new
- How it works
- User experience improvements
- Use cases

---

## Feature at a Glance

**What:** Upload custom Excel files with your class schedule

**Why:** Automatically load subjects and schedule instead of manual entry

**Where:** Settings modal (⚙️ button)

**How:** 
1. Click "Choose Excel File"
2. Select your Excel file
3. Done!

**Time:** 10 seconds to set up

---

## File Guide

| File | Purpose | For Whom |
|------|---------|----------|
| `EXCEL_UPLOAD_QUICK_GUIDE.txt` | Quick reference | Everyone |
| `HOW_TO_CREATE_EXCEL_SCHEDULE.md` | Step-by-step guide | Users creating files |
| `SCHEDULE_TEMPLATE.txt` | Starting template | Users wanting example |
| `FEATURE_EXCEL_UPLOAD_SUMMARY.md` | Feature overview | Overview readers |
| `IMPLEMENTATION_DETAILS.md` | Technical details | Developers |

---

## Common Scenarios

### Scenario 1: I Have No Schedule Yet
1. Use `SCHEDULE_TEMPLATE.txt` as starting point
2. Edit in Excel with your subjects and times
3. Save as `.xlsx`
4. Upload using the feature
5. Done!

### Scenario 2: I Already Have a Schedule
1. Prepare your Excel file with subjects and times
2. Open Settings (⚙️)
3. Click "Choose Excel File"
4. Select your file
5. Done! Everything loads automatically

### Scenario 3: I Want to Share My Schedule
1. Save your schedule as Excel file
2. Give the file to your friend
3. They upload it in their app
4. They have your exact schedule!

### Scenario 4: I Want to Change My Schedule
1. Create new Excel file with updated schedule
2. Upload the new file
3. Everything updates automatically
4. Done!

---

## Step-by-Step: First Time Setup

### Step 1: Prepare Your File
- Open Excel or Google Sheets
- Create new spreadsheet
- Use format from `HOW_TO_CREATE_EXCEL_SCHEDULE.md`
- Add your subjects in Column A
- Add class times in Columns B-H (Days)
- Save as `.xlsx` file

### Step 2: Open App
- Run START.bat
- App opens with Calendar view

### Step 3: Go to Settings
- Click ⚙️ button (top-right corner)
- Settings modal opens

### Step 4: Find Upload Section
- Look for "📊 Upload Your Custom Schedule"
- You'll see "📁 Choose Excel File" button

### Step 5: Upload File
- Click "📁 Choose Excel File"
- Select your Excel file
- Wait for upload (green ✅ message)

### Step 6: Start Using
- Check Calendar to see your schedule
- Use subjects in Checklist
- Organize Resources by subjects
- Everything works!

---

## Troubleshooting Guide

### Issue: File Won't Upload
**Solution:** 
- Check that file is `.xlsx` or `.xls` format
- Save file again from Excel
- Try uploading again

### Issue: No Subjects Added
**Solution:**
- Check that Column A has subject names
- Subjects should be in rows, not columns
- Make sure no cells are merged
- See `HOW_TO_CREATE_EXCEL_SCHEDULE.md` examples

### Issue: Schedule Not Showing
**Solution:**
- Refresh the app (press F5)
- Check that day names are correct
- Days must be in order: Mon, Tue, Wed, Thu, Fri, Sat, Sun
- See file format examples in guide

### Issue: Some Data Missing
**Solution:**
- The app only reads the first sheet of Excel
- If you have multiple sheets, put schedule in first sheet
- Remove any merged cells
- Check column order matches expected format

---

## Format Reminder

```
Column A        B           C           D           E           F           G           H
Subject         Monday      Tuesday     Wednesday   Thursday    Friday      Saturday    Sunday
─────────────────────────────────────────────────────────────────────────────────────────────
Math            10:00-11:00 11:00-12:00             10:00-11:00
Physics                     1:00-2:00   2:00-3:00               2:00-3:00
Chemistry       2:00-3:00                           3:00-4:00
English
History
```

**Key Points:**
- First column: Subject names
- Next 7 columns: Days in order
- First row: Column headers
- Days must be: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
- Fill cells with time or any text
- Leave empty if no class that day

---

## FAQ

**Q: Can I use Google Sheets?**
A: Yes! Export as .xlsx and upload

**Q: Can I use CSV files?**
A: Currently supports .xlsx and .xls only

**Q: Can I upload multiple times?**
A: Yes! New subjects are added to existing ones

**Q: Will my old subjects disappear?**
A: No! New subjects are added alongside existing ones

**Q: Can I download my schedule back as Excel?**
A: Not yet, but you can keep your original file

**Q: What if my schedule has time slots?**
A: They're read and stored, though may not show in all views

**Q: Can I edit after uploading?**
A: Yes! You can add/remove subjects manually in Settings

**Q: How many subjects can I add?**
A: As many as you want! No limit

**Q: What if I make a mistake in my file?**
A: Upload a corrected version and it updates automatically

---

## Tips & Tricks

✓ Create a backup of your schedule file
✓ Use clear subject names (no special characters)
✓ Keep time format consistent in your file
✓ Test with a simple file first
✓ Use the template as a starting point
✓ Share your schedule with classmates
✓ Create different files for different semesters

---

## Related Features

This feature works great with:
- **Calendar:** Shows your scheduled classes
- **Checklist:** Uses your subjects for homework
- **Resources:** Organizes files by your subjects
- **Schedule:** Shows today/tomorrow's classes

---

## Support

If you need help:
1. Check the quick guide: `EXCEL_UPLOAD_QUICK_GUIDE.txt`
2. Read detailed guide: `docs/HOW_TO_CREATE_EXCEL_SCHEDULE.md`
3. Look at template: `SCHEDULE_TEMPLATE.txt`
4. Review examples in guides

---

## Version Info

- **Feature Version:** 1.0
- **Release Date:** December 2025
- **Status:** Production Ready
- **Available In:** Desktop, Web, Portable versions

---

## What's Next?

After uploading your schedule:
1. Check Calendar for weekly view
2. Add homework in Checklist
3. Upload study materials in Resources
4. Customize in Settings as needed
5. Enjoy organized class management!

---

**Happy scheduling!** 🎓📚

For questions or issues, check the documentation files provided.
