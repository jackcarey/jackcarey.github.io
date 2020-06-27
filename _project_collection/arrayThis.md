---
title: arrayThis
img: /assets/logos/arrayThis.png
links: https://gsuite.google.com/marketplace/app/arraythis/1098041258001
date: 17 August 2017
endDate: present
tags: "javascript"
categories: "google-sheets apps-script"
---

### Description
Copies the formula and (optional) format of the top left-most cell across a range, respecting absolute and relative cell references. This is useful for applying functions across arrays that cannot normally be applied with ARRAYFORMULA(), such as RAND(), INDEX() & GOOGLEFINANCE().

For reference, Google's list of functions can be found [here](https://support.google.com/docs/table/25273).

### How To Use

To get started, highlight the range you want to apply the formula across. Remember that the formula will be taken from the top-left cell and that absolute and relative cell references are maintained. Go to 'Add-ons > arrayThis > Active Range​'  and you will see the formula copied across the range.

If you wish to apply arrayThis across several ranges at once, then you do not need to select them. Go to 'Add-ons > arrayThis > Specify Range(s)​' and enter the ranges separating by commas.

### Output
* "Active Range" and "Specify Range(s)" will overwrite the formulas in each range with the formula of the top-left cell.
* "Apply Right" will apply the first formula of each row in the active range across the active sheet, moving right.
* "Apply Down" will apply the first formula of each column in the active range across the active sheet, moving down.
* Formatting will be applied if you have it enabled.

### Examples
**A1:** =RAND()
Select column A. Go to 'Add-ons > arrayThis > Active Range'. The output will be '=RAND()' in each cell, producing different random numbers, instead of the same random number that would be produced by ARRAYFORMULA().

**A1:** ="http://www.example.com/?n="&RAND()

**​B1:** =IMPORTHTML(A1,"table",1)

**Incorrect:** Go to '*Add-ons > arrayThis > Specify Range(s)*' and enter "*A:B*" in the prompt. This will make every cell in A:B equal to "*http://www.example.com/?n="&RAND()*.

**Correct:** Go to '*Add-ons > arrayThis > Specify Range(s)*' and enter "*A:A,B:B*" in the prompt. This will make every cell in column A '*="http://www.example.com/?="&RAND()*' and every cell in column B '*=IMPORTHTML(A1,"table",1)*'.

### Permissions
Here's what arrayThis does with each of the permissions it requires:
* View and manage the files in your Google Drive & View and manage your spreadsheets in Google Drive - Used to read and write the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​ - Used to provide a fancy user interface.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog​

* **2019-01-23** - Bug fix for formatting toggle in menu
* **2018-11-07** - Simpler UI and formatting bug fixes.
* **2018-05-22** - Added "Apply Right/Down".
* **2018-03-20** - Updated UI & added formatting options.
* **2017-08-17** - Initial Version.