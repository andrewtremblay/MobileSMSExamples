# Requirements 

* Mac OS (reccomended 10.14.5 or higher)

* Node (reccomended v9.10.1 or higher)

* A Twilio Account (Free trial account is fine)


# Setup

1. Make a twilio project. https://www.twilio.com/console

2. Verify the phone number you want to use for development. https://www.twilio.com/console/phone-numbers/verified

3. Get a trial number from your twilio console to make outgoing sms calls.  

4. Copy your Account SID, Auth Token, and Trial Number into keys.json

5. `npm install`

# Running The Example:

To send a raw message:

`npm run raw_msg "your device phone #" "my full activation code message"`

To send a message tested to work with the iOS project:

`npm run ios_msg "your device phone #" "my activation code"`

To send a message tested to work with the ReactNative project:

`npm run rn_msg "your device phone #" "my activation code"`
