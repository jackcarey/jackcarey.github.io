---
title: Sheets to Reddit
img: /assets/logos/s2r.png
links: https://gsuite.google.com/marketplace/app/sheets_to_reddit_table/367798026320
tags: "javascript"
categories: "apps-script google-sheets"
date: 04 August 2017
endDate: present

---

### Description

Use this add-on to post your Google Sheets data straight to /r/googlesheets and other subreddits. You can also copy the markdown table for use anywhere else. Formatting can be retained. The add-on includes a custom function for generating tables within cells.
​
This add-on has no affiliation with Reddit. REDDIT is a registered trademark of reddit inc.

### How To Use

To get started, highlight the range you want to post on Reddit. Go to '*Add-ons > Sheets to Reddit > Active Range​*' and you will be prompted with options for formatting, A1 notation and showing formulas. These settings are saved per user. You can also click on '*Add-ons > Sheets to Reddit > Specify Range​*' to type a range in manually. IMAGE

After this you will be presented with a dialog where you can select which subreddit you wish to post to and whether to share just your data, or a link to your document as well. Both options will open a new tab with a pre-filled post for you to edit. The post will contain your data and some prompts to get you started. You're encouraged to edit this post and include as much detail as possible. The first button will also change the sharing permissions of your document to 'anyone with the link can view' and add a link to the document in your post. Learn more about document sharing on Google's [support page](https://support.google.com/drive/answer/2494893). IMAGE

#### =S2R() Function

Entering `=S2R()` allows you to generate Reddit compatible tables in a cell.  It takes the following parameters:
* **range** - The range of cells to make a table out of, as a string. Eg. "A1:B5".
* **formatting** - Boolean. Whether bold, italic & strikethrough should be retained. Default: False.
* **includeA1** - Boolean. Whether A1 notation should be included in the table or not. Default: False.
* **showF** - Boolean. Whether formulas should be shown in place of cell values. Default: False.
* **useCellRef** -   Boolean. Whether the  cell reference should be used for the range instead of the cell value. Setting this to true allows you to use relative ranges in your table, instead of needing to update the range string. Default: False.

### Permissions
Here's what Sheets to Reddit does with each of the permissions it requires:
* View and manage the files in your Google Drive - Used to set the sharing permissions when "With Link" is selected.
* View and manage your spreadsheets in Google Drive - Used to read the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​ - Allows a fancy user interface.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog
* **28/4/19** - Added the option to submit to any subreddit.
* **​12/11/18** - New Reddit now compatible with S2R.
* **23/10/18** - Bug fix for saving user options.
* **01/05/18** - UI Improvements for selecting options and posting to different subreddits. Includes fix for malformed HTML.
* **01/02/2018** - UI Tweaks.
* **19/01/2018** - HTML UI and improved UX.
* **24/08/2017** - Updated images to remove infringing content. 
* **04/08/2017** - Initial Version.