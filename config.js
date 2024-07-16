const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_16_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5tTnc0TGpEQzRpSzZlam0yT1pPbnVyL2pRMENtU0dMYmRYdHRRbkxnb1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiODgwMTk2NTE0Mjg1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzkyMzREQ0MxRjdCNTVFOEREREFEMzI3N0FBODFGN0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTE3NzgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiODgwMTk2NTE0Mjg1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjlFNjhDN0MzNDQ1OUQxQUNBQUI2OEJEMkJFRDI0RTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTE3NzgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiODgwMTk2NTE0Mjg1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREZEMjdCN0RBQkYxNTBEOTNFQzdCOEM3NDMwQjM2QTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTE3Nzg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiODgwMTk2NTE0Mjg1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUJCNjQ1NzQwMjlCODAyNzgxODdGRjJBMEY0Mjg4QTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTE3Nzg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVoLTRZWVlTUmlDMWl2UkI1Ql9kYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzFiY2JkNDAtODQ1NS00ZTIxLTg0NGItNTMwZGM3OTZlMTZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgNzYsXG4gICAgICAzNCxcbiAgICAgIDExNSxcbiAgICAgIDEyMCxcbiAgICAgIDE3MixcbiAgICAgIDI2LFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgMTg4LFxuICAgICAgNzMsXG4gICAgICAxODksXG4gICAgICA3OSxcbiAgICAgIDIzOCxcbiAgICAgIDE2LFxuICAgICAgMTk5LFxuICAgICAgMjU0LFxuICAgICAgMTk0LFxuICAgICAgOCxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDU1LFxuICAgICAgNDAsXG4gICAgICAyMjEsXG4gICAgICAyNDEsXG4gICAgICAxNTAsXG4gICAgICAxNixcbiAgICAgIDE3MyxcbiAgICAgIDQyLFxuICAgICAgMjQ5LFxuICAgICAgNjUsXG4gICAgICAxODAsXG4gICAgICAxMDgsXG4gICAgICAyMzgsXG4gICAgICA2MixcbiAgICAgIDg2LFxuICAgICAgMTQ0LFxuICAgICAgMjU0LFxuICAgICAgMjEwLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpOVzJITlpYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI4ODAxOTY1MTQyODU2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5NjY4ODA0NTM4NDA0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2Zg/CdmZDwnZmO8J2ZjvCdmLzwnZmE8J2ZiV9fX19fX18vXFxcXF/wn6aL8J+WpFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BLRTBVWVEwOWpZdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid3h5ejhFYTdQZzh2TjZvRmdIU0c5UG1xazh0M2grUEhUL1E5bTA2MytVVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwS3VUKzM3dy8wc1lxSlJIMFBNWjFvZ2NmU1I5QTFrNW5vWTRRb2l4UUFCVnFNUm5IYmk0M01RSTRqTmdPeXdtMHEyNkxsSUFYU1lMakJKK1RiaFFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBaTZzRUQzT1hpc0ZGVmU4STJRa1ErU2gwL2Nod2JQb2Rra3ZDNXlRWStTaTJIaHd3MHV5MGttUVVOMlFBQnBHbjBYZ1NyTElMU3gyRGc0dWMxUTJqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI4ODAxOTY1MTQyODU2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExMTc3ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJYURcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlhRC5qc29uIjogIntcImtleURhdGFcIjpcIi9SK3FEcE94T3J1TGUrMHhFc1RCRUlvdXBpWk1CUXhTNExDeUpSTitFdW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ4MTI4MzcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMTc3ODM0MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙃𝙐𝙎𝙎𝘼𝙄𝙉"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
