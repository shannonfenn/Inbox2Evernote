function email2evernote() {

  // Parameters
  var IFTTT_email = 'trigger@recipe.ifttt.com';
  var folder_name = 'Evernote'

  // Get threads in Evernote cluster
  var threads = GmailApp.search('in:anywhere label:' + folder_name);
  
  // Loop of snoozed threads
  for(i in threads){
    // Get last message of threads
    var last_index = threads[i].getMessageCount()-1;

    var message = threads[i].getMessages()[last_index];
    
    //Forward last message to evernote
    GmailApp.sendEmail(IFTTT_email, message.getSubject(), message.getBody(), {
      attachments: message.getAttachments()
    })

    // Remove from Evernote cluster
    threads[i].removeLabel(GmailApp.getUserLabelByName(folder_name))
    // Put thread back in inbox for handling
    GmailApp.moveThreadToInbox(threads[i]);
  }
}
