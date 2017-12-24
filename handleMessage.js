const callSendAPI = require('./sendMessage.js').callSendAPI;
const state = require('./state');

// Handles messages events
module.exports = function handleMessage(sender_psid, received_message) {
  if (received_message.quick_reply) {
    var nextState = received_message.quick_reply.payload;
    if (state[nextState].options.length !== 0) {
      var quickreplies = state[nextState].options.map(function(options) {
        return {
          content_type: 'text',
          title: options[0],
          payload: options[1]
        };
      });
      callSendAPI(sender_psid, {
        text: state[nextState].text,
        quick_replies: quickreplies
      });
    } else {
      callSendAPI(sender_psid, {
        text: state[nextState].text
      });
      var newState = { quick_reply: { payload: state[nextState].nextState } };
      setTimeout(function() {
        handleMessage(sender_psid, newState);
      }, 2000);
    }
  } else {
    callSendAPI(sender_psid, {
      text: 'Please reply by clicking on an option.'
    });
    var newState = { quick_reply: { payload: '1' } };
    setTimeout(function() {
      handleMessage(sender_psid, newState);
    }, 2000);
  }
};
