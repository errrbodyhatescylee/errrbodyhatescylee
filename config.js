//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/cx3602.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27849730363";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mwkqs7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFzbisraDN3M2FMbEpBTDZSYlpHNW9QbjQxTzI0YVlibUVhUnNOUUdsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXhrTmNrSTdILytZbjZYZmJoUS9QRlE2NThPN1JxeW9oZGtJYTk2MEwwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR3FVVXRZamNBUlRTcHZnNytnVlp3TEQ5SlhMN0ZwZFllaXgvN1laQVhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEWFdJWWJNUkhFTnFsUm5MQVhWTm1HKzlLWjVtUnY4WE8rNFdNT2JYMVI4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNOTQvTXVhdDNXZW14aGE0ejJpQk5IenluSmpkMWUxc01PbUdvcFJLM1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpqUEhNcGlEM1kwYlBIYi9xZUlsZUtBYVpTeUI4Nm9adnRwZyszTWthMjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdiWG50WjR0ZStWT0R3YUpGc01FQUNWOHBCNzJObGJsb1l3WFp5QW1VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWFEdG9URCtuZGhmNWJ0MVlYVDZSemhJdTNyWTN0UzhjVlRiTEt3THZXdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhjaENIQUpSa0o4SC9jaHdxODBiL2tGdzZEdHlGMGVORmNKU3lNUkdOdzI5QjM3cEo4aTJudE0rM0IyQU0rdG51akdZYXJ4U3J4TXNMSjdFaEJqK2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6ImhkMkhqSy9Jay9Dd0c3czYrYU5IbUV5QzEvN0FyNmh0TFluQlZoMHhOVFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBGZ3dUOUxYVDBHTHZxVUo1YzJYUEEiLCJwaG9uZUlkIjoiYWI4MDJlZTItNGIxNy00MGY5LTg2ZmMtYzdjMDNiNmJiNDQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklLYlFpbGRBaklFNkM1emhQWUF3NzVaZHpmaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcURoV3U4ZWtOYWFtbi9PWEF1L1Ztb3BJRk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjFMNThDTFoiLCJtZSI6eyJpZCI6IjI3NjE1MDQ1NTcyOjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWwiuOBqOOCguOBq+OCr+OCveOCkuiogOOBhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEt2d29ZRkVLZkp4N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkZyQWtQQll1WUVlV29vTDg5TEkwSHdZL2dmbjZabERYOTFEN3lPNkFXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSytmUVIvem5wMVE2UHIwd2wreUd2TzBNMlc4dmFDa2U2WmpTOEtTbVNlQzhSWXBMSmZ0UzhSK2I4UElTNmdVSWc5T0tzMzZ0eUxkbHZxTmVnU1VBQUE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1jTWpxWkc0K1crdkFOdmFaSldCUUZnOGRVRG5tUmdjTFJOVk5LQ2ppSll0RkY0TFo2VUV3SFM5UGZiTzlCbGRHUGZhNFZYeG1wVU1KbmltcDRVRWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MTUwNDU1NzI6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWnhhd0pEd1dMbUJIbHFLQy9QU3lOQjhHUDRINSttWlExL2RRKzhqdWdGciJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTMyMzA2MH0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Cylee thee Insomniac, Merry Christmas❄️❤️🧸™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "🧸❤️❄️ Chucky 2.0 ❄️❤️🧸",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
