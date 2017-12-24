const sendMessage = require("./sendMessage").callSendAPI
// Handles messaging_postbacks events
module.exports = function (sender_psid, received_postback) {
  sendMessage(sender_psid, {
    "text": "Hey this is Gary. Do you need advice.",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Yes",
        "payload":"3",//state step it needs to advance too
      },
      {
        "content_type":"text",
        "title":"No",
        "payload":"2"
      }
    ]
  });
}
