---
title: DataPull
img: /assets/logos/datapull.png
links: https://gsuite.google.com/marketplace/app/datapull/551150082749
date: 04 February 2018
endDate: 15 April 2018
tags: "javascript"
categories: "google-sheets apps-script"
---

### Description

This add-on allows you to import data from a list of other Sheets without impacting performance. Great for periodic updates of data-sets spanning multiple documents. You can also create documents from form submissions to make imports as easy as possible.

### ​Import

Import data from other documents listed in a spreadsheet.

* **Target Documents** - A range containing a list of links to Google Sheets documents to import data from.
* **Import Sheet** - The name of the sheet to import data into.
* **Header Rows** - The number of header rows on the import sheet. Data will be imported below this row. Minimum: 0;
* **Export Range** - The range you wish to be imported from the target documents. Include the sheet name if necessary.

If any sheets/ranges cannot be found, or you do not have access to them, they will be displayed in a dialog once the import has completed. IMAGE

The import will output the values from the target sheets in the specified tab, overwriting existing data. IMAGE.

### ​Template Setup
Create documents from templates based on form submissions.

*  **Template Question** - The question in the form to determine which template is used.
* **Template Range**  - The range in the current document containing a list of template names and URLs for the templates. These names should be used in the template question above.
* **Link Output Range**  - The sheet containing form responses and the header (in row one) of the column where the URL of the created document should be placed.
* **Add Email Addresses as Editor(s)**  - Whether or not email addresses taken from the form should be added as editors to the created document & which question in the form should be used. Multiple addresses should be separated by a comma.
* **Send non-Google accounts a link to the created document** - Email addresses not associated with a Google account cannot be added as editors, so this option provides a link for recipients to request access via a Google account. It's good practise to make recipients aware that they will need a Google account before they make a form submission.
Path & File Name**  - Where the created document should be saved and what it should be named. Use tags for dynamic values based on the form response.
* **Variables**  - Up to eight variables can be set. The ranges in the created document can be set to a static value or use a response from the form (see "Tags" below).
* **Permissions**  and sharing access are carried forward from templates and anyone who can access the form can create documents. The collaborator who saves these settings must have edit access to the templates and created documents will be stored in their Google Drive. Please set up (and double check) permissions and file access limits before using this feature, read more on Google's support page.

### Tags
Tags identify the questions in a form and can be used to set the folder, file name and variables of the created document dynamically based on a form response. For example, a path of  "DataPull Documents/<<1783560853>>/<<1481065390>>" could become "DataPull Documents/Europe/London". IMAGE

### Permissions
Here's what DataPull does with each of the permissions it requires:

* **View and manage files in your Google Drive:**

    * *Upload, download, update and delete files in your Google Drive* - Used to set variables in created documents. Template creation must be enabled and set up.
    * *Create, access, update and delete native Google documents in your Google Drive* - Used during imports to read data from other spreadsheets and with templates to create documents (template creation must be enabled and set up). No files are ever deleted.
    * *Manage files and documents in your Google Drive (e.g. search, organise and modify permissions and other metadata, such as title)* - Used to move created documents to the directory specified by the user in template set up.

* **View and manage your spreadsheets in Google Drive:**

    * *View and modify existing spreadsheets* - Required for imports.
    * *Create new spreadsheets and share spreadsheets with others* - Only when template creation is enabled and as specified by the user settings listed above.

* **Display third-party web content in prompts and sidebars inside Google applications:** Required to produce a fancy user interface.

* **Allow this application to run when you are not present:** Only when template creation is enabled, so that new documents can be created following form submissions. 

* **Send email as you:** Only when template creation, "Add Email Addresses as Editor(s)" and "Send non-Google accounts a link to the created document" are enabled and only from the account assigned to create templates for each document DataPull is used in. Emails will only be sent following form submissions and to addresses which cannot automatically be added as an editor of a document. The message contains a link to the document so that they can request access using a Google account.

* **View and manage your forms in Google Drive:**

    * *Create new forms* - If there is no form connected to a document when setting up templates, the user will be prompted to create one.
    * *View, submit and process form responses* - Required when using template creation to set up new documents in the correct directory and set variables.
    * *Share forms with others* - If a template has a form connected to it then editors will be given access to the form connected to the created document.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog​

* **2018-04-15** - Added option to email non-Google accounts a link to created documents.
* **2018-03-28** - Added "Template Setup" for creating documents from templates based on form submissions.
* **2018-02-04** - Initial Version.