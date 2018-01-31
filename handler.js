'use strict';

module.exports.berUp = (event, context, callback) => {
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: '',
      },
      shouldEndSession: false,
    },
  };

  callback(null, response);
};
