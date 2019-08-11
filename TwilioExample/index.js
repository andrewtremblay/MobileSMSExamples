#! /usr/bin/env node
const keys = require('./keys.json');
function keyInvalid(keyName) {
    if (!keys[keyName] || keys[keyName].length == 0){ 
        console.error(`🙅‍ ${keyName} required!`);
        return true;
    }
    return false;
}
if (keyInvalid('account_sid') || keyInvalid('account_token') || keyInvalid('trial_sending_number')) {
    console.error('Check your keys.json');
    return 1;
}
const client = require('twilio')(keys.account_sid, keys.account_token);

// usage: (include country code!)
// npm run msg 'your devices phone number (only numbers) '10001 is your [AppName] security code'
// don't forget to use real account info in keys.json!

const sendSms = function(to, message) {
    console.log(`sending ${message} to ${to}`);
    client.messages.create({
      body: message,
      to: to,
      from: keys.trial_sending_number
    }, function(err, data) {
      if (err) {
        console.error('Could not send sms');
        console.error(err);
      } else {
        console.log('Sms sent to ' + to);
      }
    });
  };


const expected_input = "npm run msg 'your devices phone number (only numbers) '10001 is your [AppName] security code'";

var myArgs = process.argv.slice(2);
if (myArgs.length != 2) {
    console.error('🙅‍ wrong number of args! \n expected:'+expected_input);
}
sendSms("+" + myArgs[0], myArgs[1]);
