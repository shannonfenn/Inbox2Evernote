# Inbox2Evernote
Quickly convert emails to evernote notes with IFTTT and Google Apps Script

Inspired by [Snoozever](http://www.snoozever.com/) which unfortunately requires a paid Evernote subscription due to the reliance on the evernote email functionality. This also allows you to continue using snooze capability of Inbox as is. Custom tags/notebook are handled by the IFTTT recipe rather than the Apps script.

### Requires

* Google Inbox
* IFTTT
* Evernote

### Setup

* [Create an evernote account](http://www.evernote.com/)
* [Create an IFTTT account](http://ifttt.com/)
* [Create a Google Apps Script](https://script.google.com/)
* Copy/paste Inbox2Evernote source
* Create a trigger "Every minute" for the script
* Create an IFTTT recipe like [this one](https://ifttt.com/recipes/371922-email2evernote)\* with whatever notebook and tags you prefer.
* Create a Google Inbox folder/group called "Evernote")

### Usage
* Send emails you want a note created for to the Evernote folder. The script will trigger the IFTTT reciped, creating a new note, and then move the email back to the inbox for you to handle. This behaviour can be easily changed by modifying the last line from `GmailApp.moveThreadToInbox(threads[i]);` to `GmailApp.moveThreadToArchive(threads[i]);`.

\* Note that if you use the [IFTTT Email trigger](https://ifttt.com/email) for other recipes you may need to modify this script to use the tagging trigger rather than the catch-all trigger used here.
