---
title: MC Text Analysis Add-on
img: /assets/logos/gsheets.png
date: 05 October 2018
tags: "google-sheets apps-script javascript"
---

###### Development has been halted as MeaningCloud have published an official add-on. You can read about it [on their blog](https://www.meaningcloud.com/blog/new-meaningcloud-add-on-for-google-sheets) and install it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/meaningcloud/kedfekejohhkjefeeekfkhbhenhnkbko).

### Description
Adds multiple functions that output a 2D array of data from MeaningCloud. Return topic, classification, sentiment, language, parsing, reputation, summary, structure & deep categorisation data.

This add-on has no affiliation with MeaningCloud LLC.​​

### How To Use

#### Set-up

1. Navigate to [https://www.meaningcloud.com/developer/account/subscriptions](https://www.meaningcloud.com/developer/account/subscriptions)
2. Copy the license key into the set up dialog. ​​

For full documentation, visit [MeaningCloud](https://www.meaningcloud.com/developer/apis).

#### Parameters
The following parameters are standard for every function:
text - Required. The text, markup or URL (web page / file) you wish to analyse. Supported URL Formats.
age - Optional. The maximum age of cached results, in hours. Use this option to minimize the amount of requests you make to MeaningCloud. Use 0 for no limit, -1 to ignore cache. Default: 24.
lite - Optional. Boolean. Return a reduced set of data. Default : FALSE.
format - Optional. The format of the text parameter. Default: auto.
auto - Determine the format of the text automatically.
plain - Text strings.
markup - Known HTML tags and HTML code will be interpreted, and unknown tags will be ignored.
url - URL with the content to classify. Currently only non-authenticated HTTP and FTP are supported. 
api - Optional. The API key to use, if not the default.
The following parameters only appear in some functions:
categories - Optional. List of prefixes of the code of the categories to which the classification is limited.
context - Optional. Disambiguation context.
dict - Optional. User dictionary to use.
dm -  Optional. Type of disambiguation applied. n = none, s = semantic, m = morphosyntactic. Default: s.
infer - Deal with inferences. Default: FALSE.
lang - Optional. Language. auto,en,es,fr,it,pt,ca,da,sv,no,fi. Default: auto.
mode - Optional. tm: Topic Modeling,dg: Document Grouping. Define the approach used to carry out the clustering process. Default "tm".
model - The name of the model to use.
polarity - Determines if categories will contain an associated polarity value. Default: FALSE.
reliable - Optional. Boolean. Use strict analysis without dealing with unknown words or relaxed typography. Default: TRUE.
sdg - Optional. Semantic disambiguation grouping. n = none, g = global intersection, t = intersection by type, l = intersection by type (smallest location). Default:l.
selection - List of expected languages, separated by |.
sentences - Number of sentences for the summary. Default: 1.
stopWords - Stopwords to be ignored by the algorithm, both in the clustering process, and as labels for the clusters. One per line.
threshold - Language detection threshold as a percentage of similarity with respect to the top result.
title - Optional. Descriptive title of the content.
topics - Optional. a = all, e = named entities,c = concepts,t = time expressions,m = money expressions,n = quantity expressions,o = other expressions,q = quotations,r = relations. Default: "a".

#### Functions

MC_TOPICS(text,age,lite,format,reliable,lang,topics,dict,api) - Extracts relevant information such as Named Entities (people, locations, organizations, etc), concepts as well as facts (dates, time expressions, quantities, etc) from bodies of text.
MC_CLASSIFY(text,age,lite,format,title,model,categories,api) - Classifies texts based on a hierarchical categorization or taxonomy.
models
MC_SENTIMENT(text,age,lite,format,reliable,lang,model,dm,sdg,context,dict,api) - Analyzes texts and detects their polarity, subjectivity, irony and emotional agreement.
MC_LANG(text,age,lite,format,selection,threshold,api) - Detects the language of texts obtained from any source.
MC_PARSER(text,age,lite,format,reliable,lang,dm,sdg,context,topics,model,dict,api) - Carries out different linguistic analysis in several languages: morphosyntactic analysis, PoS (Part of Speech) tagging, and lemmatization.
MC_CORPREP(text,age,lite,format,reliable,lang,infer,dict,api) - Provides a semantic tagging of multilingual content for the purpose of Corporate Reputation analysis.
MC_CLUSTER(text,age,lite,mode,stopWords,api) - Groups documents by similarity and detects the most significant subjects.
​MC_SUMMARY(text,age,format,sentences,api) - Summarize a given text/document according to the specified length.
MC_STRUCTURE(text,age,lite,format,api) - Extracts different sections of a given document with markup content, including titles, sections, abstract and parts of an email.
MC_DEEPCAT(text,age,lite,format,model,polarity,dict,api) - Assigns one or more categories to a text, using a very detailed rule-based language that allows you to identify very specific scenarios and patterns using a combination of morphological, semantic and text rules.
models​

### Output

All functions output a 2D array of information with headers on row one. This can span a lot columns, so consider using the lite mode or transposing the output. Results are stored in the document to improve performance and minimise the amount of requests made to MeaningCloud, however this is not always possible with large responses.

### Permissions
Here's what MC Text Analysis does with each of the permissions it requires:

* View and manage your spreadsheets in Google Drive - Used to read and write the value of cells in the active document.
* Display and run third-party web content in prompts and sidebars inside Google applications​ - Used to provide a fancy user interface.
* Connect to an external service - Connect to MeaningCloud to return data when the user enters one of the custom functions. View its privacy policy.

### Uh-oh, Something Broke!
[Contact me](/#contact), giving as much detail as you can.

### Changelog​

* **2018-10-19** - Sidebar added. Development halted (official add-on published).
* **2018-10-05** - Initial Version.