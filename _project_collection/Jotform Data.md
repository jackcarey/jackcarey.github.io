---
title: Jotform Data
img: /assets/logos/jotform_data.png
links: https://gsuite.google.com/marketplace/app/arraythis/1098041258001
date: 26 July 2018
endDate: present
tags: "javascript"
categories: "google-sheets apps-script"
---

### Description
Adds interfaces and custom functions that output a 2D array of data from JotForm. Return user, form, submission, report & folder data.
This add-on has no affiliation with JotForm Inc.​​

### Set Up

1. Navigate to jotform.com/myaccount/api. 
2. Press "Create a new key" or use an existing one. 
3. Copy the key into the set up dialog.
For full instructions, see Jotform's website.

### Import Sidebar
The sidebar can be used to import data from Jotform manually, which is useful if you only need to update it periodically. Go to Jotform Data > Import to open the sidebar, from here you can select the data you want to import. Details of each parameter are listed under 'Custom Functions' below. IMAGE

### Scheduling
Available through the import sidebar, scheduling allows you to import data from Jotform on a regular, recurring basis. Settings are taken from the import sidebar and run at the specified frequency. You can manually prompt a check of all schedules, as well as forcing them all to import regardless of when they were last run. IMAGE
### Custom Functions
**Basic**

Enter '=JOTFORM()' in any cell. The parameters for this function are listed below:
* **endpoint** - The data you wish to return. Allowed values: user, form, submission, report or folder.
* **id** - The id of the record(s) to return. Required for form, submission, report & folder endpoints.
* **child** - A second-level endpoint to return. 
    * **user** - "usage","submissions","subusers","folders","reports","settings","history","forms" or blank.
    * **form** - "questions","properties","reports","files","webhooks","submissions" or blank.
    * **submission, report, folder** - blank.
* **age** - Optional. The maximum age of cached results, in hours. Default: 24. Use this option to minimize the amount of requests you make to JotForm. Use 0 for no limit, -1 to ignore cache.
* **lite** - Optional. Boolean. Return a reduced set of data. Default : FALSE.

**Advanced**

Enter '=JOTFORM_ADV()' in any cell. The parameters for this function are listed below:
*  **endpoint** - The data you wish to return. Allowed values: user, form, submission, report or folder.
*  **id** - The id of the record(s) to return. Required for form, submission, report & folder endpoints.
*  **child** - Optional. A second-level endpoint to return  for each endpoint:
    * **user** - "usage","submissions","subusers","folders","reports","settings","history","forms" or blank.
    * **form** - "questions","properties","reports","files","webhooks","submissions" or blank.
    * **submission, report, folder** - blank.
*  **age** - Optional. The maximum age of cached results, in hours. Default: 24. Use this option to minimize the amount of requests you make to JotForm. Use 0 for no limit, -1 to ignore cache.
*  **lite** - Optional. Boolean. Return a reduced set of data. Default : FALSE.
*  **api** - Optional. API key to use, if not the default.
*  **limit** - Optional. The number of results to return. Only for child 'submissions' & 'forms'.
*  **offset** - Optional. The number of entries to skip. Only for child 'submissions' & 'forms'. Default: 0.
*  **filter** - Optional. Filters the query results to fetch a specific submissions range.  Eg: {"new":"1"} 
You can also use gt (greater than), lt (less than), ne (not equal to), formIDs and fullText commands to get more advanced filtering :
Example: {"created_at:gt":"2013-01-01 00:00:00"}
Example: {"formIDs":["your-form-id","your-form-id#2"]}
Example: {"fullText":"John Brown"}

### Output
Both functions output a 2D array of information from JotForm with headers on row one. This can take up a lot of columns, so consider transposing the output. Results are stored in the document to improve performance and minimise the amount of requests made to JotForm, however this is not always possible with large responses.

### Permissions
Here's what Jotform Data does with each of the permissions it requires:

* View and manage your spreadsheets in Google Drive - Used to read and write the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​ - Used to provide a fancy user interface.
* Connect to an external service - Connect to JotForm to return data when the user enters one of the custom functions. View its privacy policy.
* Allow this application to run when you are not present - Allow imports to run once scheduling has been set up.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog​

* **2019-10-06**
    * Multiple bug fixes and performance improvements.
* **2019-07-28**
    * Moved the schedule dialog into the sidebar for less obtrusive schedule checks
    * ​Performance improvements and bug fixes
* **2019-04-20**
    * Fixed bug with title extraction
* **2018-11-12**
    * Added scheduling to the import sidebar.
* **2018-11-04**
Added the import sidebar.
* **2018-09-19**
    * Added support for custom form urls.
* **2018-07-20**
    * Improved headers for answer columns, now uses the question text instead of 'answer 1', 'answer 2' etc.
    * Added filter parameter to advanced function.
    * 'Updated At' now fills from 'Created At' when blank. 
* **2018-06-29**
    * Backend support for xpath wildcards.
* **2018-06-26** 
    * Initial Version.