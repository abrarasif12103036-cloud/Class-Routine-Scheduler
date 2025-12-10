# 📊 How to Create Your Custom Schedule Excel File

## Overview

You can now upload your own Excel file to automatically:
1. ✅ Load your custom class schedule
2. ✅ Automatically add subjects from your file
3. ✅ Update the calendar with your routine

---

## File Format Requirements

### Structure
Your Excel file should have:
- **First Column:** Subject names
- **Next 7 Columns:** Days of the week (Monday through Sunday)
- **Cells:** Class times or any schedule information

### Example Format

```
Subject          Monday         Tuesday        Wednesday       Thursday       Friday         Saturday       Sunday
Mathematics      10:00-11:00    11:00-12:00                    10:00-11:00                   
Physics                         1:00-2:00      2:00-3:00                      2:00-3:00      
Chemistry        2:00-3:00                                                     3:00-4:00      
English                                                                                        
History                                                                                        
Geography                                                                                     
```

---

## Step-by-Step Instructions

### 1. Create Your Excel File

**Option A: Using Excel or Google Sheets**

1. Open Microsoft Excel, LibreOffice, or Google Sheets
2. Create a new spreadsheet
3. Follow the format above:
   - Column A: Subject names
   - Columns B-H: Days (Monday through Sunday)
   - Cells: Time slots or any text

**Option B: Copy the Template**

Use the `SCHEDULE_TEMPLATE.csv` file included in the folder:
1. Open it with Excel
2. Edit with your subjects and times
3. Save as `.xlsx` file

### 2. Input Your Data

**Subject Names (Column A):**
- List all your subjects
- One subject per row
- Examples: Mathematics, Physics, Chemistry, English, History, Biology

**Time Slots (Columns B-H):**
- Enter class times for each day
- Format examples:
  - `10:00-11:00`
  - `2:00 PM`
  - `9:30`
  - Or any text identifying the class

**Empty Cells:**
- Leave cells empty if you don't have class that day
- No need to fill all cells

### 3. Save Your File

1. **Filename:** Any name is fine (e.g., `MySchedule.xlsx`)
2. **Format:** Must be `.xlsx` or `.xls` (Excel format)
3. **Location:** Save anywhere convenient

---

## Example Files

### Simple Schedule
```
Subject       Monday    Tuesday   Wednesday   Thursday   Friday   Saturday   Sunday
Maths         9:00      9:00                  9:00
English                 10:00     10:00                  10:00
Science       11:00               11:00      11:00
Hindi         2:00      2:00      2:00       2:00       2:00
```

### Detailed Schedule
```
Subject          Monday              Tuesday             Wednesday           Thursday            Friday             Saturday           Sunday
Mathematics      9:00-9:45          9:00-9:45                              9:00-9:45
Physics                             10:00-10:45        10:00-10:45                            10:00-10:45
Chemistry        11:00-11:45                           11:00-11:45        11:00-11:45
English          1:00-1:45          1:00-1:45          1:00-1:45          1:00-1:45          1:00-1:45
History                                                                    2:00-2:45
Geography        2:00-2:45                             2:00-2:45                              2:00-2:45
```

---

## How to Upload

### From the App

1. Open Class Routine Manager
2. Click the **⚙️ Settings** button (top right)
3. In Settings modal, find **"📊 Upload Your Custom Schedule"** section
4. Click **"📁 Choose Excel File"**
5. Select your `.xlsx` file
6. Wait for upload confirmation (✅)
7. Your subjects are now updated!
8. Your schedule appears in the Calendar

---

## What Happens After Upload

✅ **Subjects Added Automatically**
- All subjects from your Excel file are added to the app
- They appear in the Checklist form
- They appear in the Resources folder list

✅ **Schedule Loaded**
- Today's schedule is set based on current day
- Tomorrow's schedule is set based on tomorrow's date
- Full week schedule is available in Calendar

✅ **Your Data Updates**
- New subjects are combined with existing ones
- No subjects are deleted
- You can still add/remove subjects manually in Settings

---

## Tips & Best Practices

### ✓ Do This
- ✅ Use clear subject names
- ✅ Use consistent time formats
- ✅ Keep file simple and organized
- ✅ Save in `.xlsx` format
- ✅ Test with a simple file first

### ✗ Don't Do This
- ❌ Don't use merged cells
- ❌ Don't have empty first row
- ❌ Don't use Excel files with multiple sheets (only first sheet is read)
- ❌ Don't use special characters in subject names
- ❌ Don't leave Column A (Subject names) empty

---

## Column Order (IMPORTANT)

Days must be in this exact order:
1. **Column A:** Subject names (required)
2. **Column B:** Monday
3. **Column C:** Tuesday
4. **Column D:** Wednesday
5. **Column E:** Thursday
6. **Column F:** Friday
7. **Column G:** Saturday
8. **Column H:** Sunday

If your file has a different order, the app won't match correctly.

---

## Troubleshooting

### "File doesn't upload"
**Solution:**
- Make sure file is `.xlsx` or `.xls` format
- Try saving again from Excel
- Ensure file is not corrupted

### "No subjects are added"
**Solution:**
- Check that Column A has subject names
- Make sure subject names are in rows, not columns
- Verify there are no merged cells

### "Times don't appear correctly"
**Solution:**
- The upload only captures which days you have classes
- Specific times are stored but may not be visible in all views
- Check the Schedule view to see times

### "My schedule isn't loading"
**Solution:**
- Refresh the app (press F5)
- Close and reopen the app
- Check that day names are spelled correctly (Monday, Tuesday, etc.)

---

## Example: Converting Your Current Schedule

If you already have a schedule file (`schedule.xlsx`), you can use it directly:
1. Just upload it using the new feature
2. The app will automatically extract everything

---

## Need Help?

- Check the format example above
- Use the `SCHEDULE_TEMPLATE.csv` as a starting point
- Make sure days are in the correct order
- Contact support if you still have issues

---

## Next Steps

1. ✅ Create your Excel file
2. ✅ Open Class Routine Manager
3. ✅ Go to Settings (⚙️)
4. ✅ Upload your file
5. ✅ Start using your custom routine!

---

**Version:** 1.0  
**Created:** December 2025  
**For:** Class Routine Manager by Abrar Asif
