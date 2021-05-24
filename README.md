# emBetter
## Description
Discord bot to add items to certain channels. Allows tagging those items to other users and relating items to each other. 
Still early and a WIP, but the core functionality works. Please excuse the spaghetti code and console.logs

## How-to
use ```$add CHANNEL_NAME CONTENT_TO_ADD $people @PERSON_1 @PERSON_2 $link [LINK_TEXT](URL)``` 
to add a string of `CONTENT` to a `CHANNEL` with `PEOPLE` and a `LINK` <br /><br />
use ```$edit CHANNEL_NAME MESSAGE_ID [LINK_TEXT](URL)``` 
to add a `LINK` on a `MESSAGE` from a `CHANNEL`

## Dependencies
use ```npm install discord.js``` to get the discord dev package <br /><br />
create a ```vars.js``` file in the root directory with ```exports.token = 'YOUR_BOT_TOKEN_HERE';``` as the content in it
