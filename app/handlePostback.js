const sendMessage = require('./sendMessage').callSendAPI;
const state = require('./state');
// Handles messaging_postbacks events
module.exports = function(sender_psid, received_postback) {
  var quickreplies = state['1'].options.map(function(options) {
    return {
      content_type: 'text',
      title: options[0],
      payload: options[1]
    };
  });
  sendMessage(sender_psid, {
    text: state['1'].text,
    quick_replies: quickreplies
  });
};
