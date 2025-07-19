/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk");
const fs = require("fs");
require("dotenv").config(); 

//==================[ BOT SETTINGS ]==================\\
global.prefix      = (process.env.PREFIX || ".").trim().split(/\s+/); // Supports multiple or single prefix
global.owner       = process.env.OWNER_NUMBER || "2347036214381";     // Owner number (for multiple, use comma-separated in your logic)
global.sudo        = process.env.SUDO || "";                          // Sudo users (string or logic processed array)
global.ownername   = process.env.OWNER_NAME || "Ednut";              // Owner name
global.botname     = process.env.BOT_NAME || "null";                 // Bot name
global.author      = process.env.AUTHOR || "Ednut";                  // Sticker author
global.packname    = process.env.PACK_NAME || "Arch Md ²⁵";          // Sticker pack name
global.session     = process.env.SESSION_ID || "";                   // Session ID
global.timezone    = process.env.TIME_ZONE || "Africa/Lagos";        // Default timezone
global.simbol      = process.env.SYMBOL || "♘";                      // Menu icon/symbol
global.thumb       = process.env.THUMB || "https://files.catbox.moe/bfzvlr.jpg,https://files.catbox.moe/n7wo5h.jpg,https://files.catbox.moe/sidp03.jpg,https://files.catbox.moe/yvb0et.jpg,https://files.catbox.moe/vu2qgl.jpg,https://files.catbox.moe/5rfbw9.jpg,https://files.catbox.moe/5hpljo.jpg,https://files.catbox.moe/o5hve8.jpg,https://files.catbox.moe/7383y9.jpg";
global.footer      = process.env.FOOTER || "";                       // Footer for captions
global.warn        = process.env.WARN || "4";                        // Warning threshold
global.menutype    = process.env.MENU_TYPE || "";                    // Menu style
global.scan        = "https://arch.ednut.xyz/";                      // Scan link

//==================[ BOT MESSAGES ]==================\\
global.msg = {
  succes:   "Success ✅",
  owner:    "❌ This feature is only for the owner",
  admin:    "❌ This feature is only for group admins",
  BotAdmin: "❌ The bot must be an admin to use this feature",
  group:    "❌ This command is for group chats only",
  private:  "❌ This command is for private chats only",
  bot:      "❌ This feature is only for the bot number",
  wait:     "⏳ Please wait...",
  ban:      "❌ You are banned. Contact the owner to be unbanned.",
  gcban:    "❌ This group is banned from using bot features"
};