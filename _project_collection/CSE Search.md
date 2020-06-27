---
title: CSE Search
img: /assets/logos/cse_search.png
links: https://gsuite.google.com/marketplace/app/cse_search/163723976462
date: 17 August 2017
endDate: present
tags: "javascript"
categories: "google-sheets apps-script"
---

### Description

Three custom functions that output a 2D array of results from a Google custom search engines. Return web results and images.

### How To Use
Set-up
1. Go to the CSE Developer Overview and select "Get a Key". 
2. Select a new or existing project and make a note of the API key. 
3. Go to Google CSE and select an existing search engine or create a new one. For help with this, read the [documentation](https://cse.google.com/cse/docs/all) and [help center](https://support.google.com/customsearch).
4. Click on 'Search Engine ID' and make a note of the code. It will look similar to "12345678900987654321:abcdefghi01". 
5. Open the API Set-up from the CSE Search Add-on menu and enter the API key from step 2 & Default Search Engine from step 4, then press save. You can now use the CSE functions.

#### Basic
Enter '=CSE()' in any cell. The parameters for this function are listed below:

* **term** - The term to search for.  You can refine your search results.
* **age** - Optional. Maximum age of cached results in hours. 0 = No limit. OR request results from within the specified number of past days (d) /weeks (w) /months (m) /years (y). Eg. 'm6' = 6 months. Default: 24.
* **limit** - Optional. The number of results to return. Default: 10.
* **images** - Optional. Boolean. Return images results. Default: FALSE.
* **localeResults** - Optional. Boolean. Prefer results based on document locale. Default: FALSE.
* **lite** - Optional. Return a reduced set of data with each level, 0-3. Default: 0.

#### Images
Enter '=CSE_IMAGE()' in any cell. The parameters for this function are listed below:
* **term** - The term to search for. You can refine your search results.
* **age** - Optional. Maximum age of cached results in hours. 0 = No limit. OR request results from within the specified number of past days (d) /weeks (w) /months (m) /years (y). Eg. 'm6' = 6 months. Default: 24.
* **limit** - Optional. Number of search results to return. Default: 10.
* **safe** - Optional.  Boolean. Use SafeSearch. Default: TRUE. 
* **imgCol** - Optional. The color of images. Acceptable values are "color","gray","mono","black","blue","brown","gray","green","pink","purple","teal","white" & "yellow".
* **imgSize** - Optional. The size of the images to return. Only used when images is true. Acceptable values are "huge","icon","large","medium","small","xlarge" & "xxlarge".
* **imgType** - Optional. The type of image to return. Acceptable values are "clipart","face","lineart","news" & "photo".
* **rights** - Optional. Filter based on licensing. Acceptables values are "publicdomain", "attribute", "sharealike", "noncommercial" & "nonderived".
* **localeResults** - Optional. Boolean. Prefer results based on document locale. Default: FALSE.
* **siteRestrict** - Optional. Boolean. Restrict results to sites specified in the engine's settings. Default: FALSE.
* **lite** - Optional. Return a reduced set of data with each level, 0-3. Default: 0.

#### Advanced
Enter '=CSE_ADVANCED()' in any cell. The parameters for this function are listed below:
* **term** - The term to search for. You can refine your search results.
* **age** - Optional. Maximum age of cached results in hours. 0 = No limit. OR request results from within the specified number of past days (d) /weeks (w) /months (m) /years (y). Eg. 'd14' = past 14 days, 'm6' = past 6 months. Default: 24.
* **lite** - Optional. Return a reduced set of data with each level, 0-3. Default: 0.
* **limit** - Optional. Number of search results to return. Default: 1.
* **safe** - Optional.  Boolean. Use SafeSearch. Default: TRUE. ​
* **andTerms** - Optional. Additional terms combined with the logical AND operator.
* **orTerms** - Optional. Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
* **exactTerms** - Optional. Identifies a phrase that all documents in the search results must contain.
* **excludeTerms** - Optional. Identifies a word or phrase that should not appear in any documents in the search results.
* **siteRestrict** - Optional. Controls whether to include or exclude results from the site named in the siteSearch parameter. -1 = exclude, 0 = off, 1 = include, 2 = fallback. Default: 0.
* **siteSearch** - Optional. Specifies all search results should be pages from a given site. Default: your CSE site restrictions.
* **linkSite** - Optional. Specifies that all search results should contain a link to a particular URL.
* **relatedSite** - Optional. Specifies that all search results should be pages that are related to the specified URL.
* **fileType** - Optional. Restricts results to files of a specified extension. Learn more about file types.
* **images** - Optional. Boolean. Limit results to images instead of webpages. Default: FALSE.
* **imgCol** - Optional. The color of images. Acceptable values are "color","gray","mono","black","blue","brown","gray","green","pink","purple","teal","white" & "yellow".
* **imgSize** - Optional. The size of the images to return. Only used when images is true. Acceptable values are "huge","icon","large","medium","small","xlarge" & "xxlarge".
* **imgType** - Optional. The type of image to return. Acceptable values are "clipart","face","lineart","news" & "photo".
rights - Optional. Filter based on licensing. Acceptables values are "publicdomain", "attribute", "sharealike", "noncommercial" & "nonderived".
* **country** - Optional. Prefer results from a certain country. Use two letter country code or TRUE for document locale.
* **lang** - Optional. Prefer results in a certain language. Use two letter language code or TRUE for document locale.
* **start** - Optional. The index of the first result to return. Default: 1.
* **cx** - Optional. The search engine to use, if not the default.
* **api** - Optional. The API key to use, if not the default.

### Output
Both functions output a 2D array of information from the custom search with headers on row one. This can take up a lot of columns, so consider transposing the output. Results are stored in the document to improve performance and minimise the amount of requests made to your search engine, however this is not always possible with large responses.

### Examples
To search for one result about a dog enter *=CSE("dog")* in any cell.

To search for ten images of dogs while preferring local results, enter *=CSE("dog",24,1,10,TRUE)* in any cell. While some of these parameters could be omitted, you should use default values to maintain clarity.

### Permissions
Here's what CSE Search does with each of the permissions it requires:
* View and manage spreadsheets that this application has been installed in
    * Used to read and write the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​
    * Used to provide a fancy user interface.
* Connect to an external service
    * Connect to Google Custom Search to return search results when the user enters one of the custom functions. View its privacy policy.
* Allow this application to run when you are not present
    * Allows CSE Search to import search results on a scheduled basis

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog​

* **2019-01-23** - Bug fix for formatting toggle in menu
* **2018-11-07** - Simpler UI and formatting bug fixes.
* **2018-05-22** - Added "Apply Right/Down".
* **2018-03-20** - Updated UI & added formatting options.
* **2017-08-17** - Initial Version.