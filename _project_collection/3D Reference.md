---
title: 3D Reference
img: /assets/logos/3d_reference.png
links: https://gsuite.google.com/marketplace/app/3d_reference/692995954534
tags: "javascript"
categories: "google-sheets apps-script"
date: 16 January 2018
endDate: present
---

### Description
Output a 2D array containing values from a common range across multiple sheets. Use a basic function or configure the 3D reference with regex.

### How To Use

#### Basic

Enter '=DDDREF()' in any cell. The parameters for this function are listed below:
* **start** - The name of the sheet to start the reference at.
* **end** - The name of the sheet to end the reference at.
* **range** - The range to return from each sheet, as a string.

#### Advanced

Enter '=DDDREF_ADV()' in any cell. The parameters for this function are listed below:
* **prefix** - In most cases this is the string preceding a number in sheet names. If regex is set to true then this is the regular expression that sheet names should match against. For a sheet named "List 1", the prefix is "List " (with the space).
* **regex** - Boolean. When set to true, the function will ignore the startValue, step, endValue & suffix parameters. Ranges will be returned from sheets where the name matches the regular expression in the prefix parameter. Default: FALSE.
* **range** - The range you want values to be returned from. This will be the same across all sheets and not include the sheet name. Eg. "A1:B5".
* **startValue** - The sheet number to start at when iterating. For example, If you wanted to start returning values from a sheet named "List 2" then you would enter "2" here.
* **step** - The step which sheets will be iterated through.  If you want to return every second sheet then you would enter "2". Must be an integer greater than or equal to 1. Default: 1.
* **endValue** - The sheet number to end at when iterating. For example, If you wanted to stop returning values at a sheet named "List 5" then you would enter "5" here.
* **suffix** - The string proceeding a number in sheet names. For a sheet named "List 5 redacted", the suffix is " redacted" (with the space).
* **includeSheetName** - Optional. Include the name of each sheet in the first column of the data. Default: False

### Permissions
Here's what 3D Reference does with each of the permissions it requires:
* View and manage the files in your Google Drive & View and manage your spreadsheets in Google Drive - Used to read the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​ - Used to provide a fancy user interface.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog
* **2018-03-26** - Fixed error in "Replace Functions" for locales using semi-colon delimiter.
* **2018-02-19** - Implemented "Replace Functions" workaround to allow real-time updates.
* **2018-01-30** - Added basic function.
* **2018-01-16** - Initial Version.