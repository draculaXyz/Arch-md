/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

require('./config')
const chalk = require("chalk")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, getDevice } = require('@whiskeysockets/baileys');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { getQuote, styletext, fontx, pinterest, pinDL, tiktokDl } = require('./all/scraper')
const { sleep, getRandom, format, pickRandom, runtime } = require("./all/myfunc");
const googleTTS = require('google-tts-api')
const uploadImage = require('./lib/upload')
const api = require('api-dylux')
const { igdl } = require('btch-downloader');
const fetch = require('node-fetch');
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const moment = require('moment-timezone')
const emoji = require('./all/emoji.js');
const { LoadDataBase } = require('./lib/message');
const thumb = fs.readFileSync ('./tmp/arch.jpg')
const pkg = require("./package.json");
module.exports = ednut = async (ednut, m, chatUpdate, mek, store ) => {
try {
await LoadDataBase(ednut, m)
if(!m)return
const { type, quotedMsg } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid;
const body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
const isMessage =
            m.message.conversation ||
            m.message.extendedTextMessage?.text ||
            m.message.imageMessage?.caption ||
            m.message.imageMessage?.url || 
            m.message.videoMessage?.caption ||
            m.message.videoMessage?.url ||
            m.message.stickerMessage?.url ||
            m.message.documentMessage?.caption ||
            m.message.documentMessage?.url ||
            m.message.audioMessage?.url ||
            m.message.buttonsResponseMessage?.selectedButtonId ||
            m.message.templateButtonReplyMessage?.selectedId ||
            m.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
            m.message.contactMessage?.displayName ||
            m.message.locationMessage?.degreesLatitude ||
            m.message.pollCreationMessage?.name ||
            '';
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = Array.isArray(global.prefix) ? global.prefix : [global.prefix];
const bodyTrimmed = (body || "").trimStart();
const firstWord = bodyTrimmed.split(/\s+/)[0]?.toLowerCase();
let matchedPrefix = null;
let isCmd = false;
let isCmd2 = true;
let command = "";
let args = [];
let text = "";
for (const p of prefix) {
  if (firstWord.startsWith(p.toLowerCase())) {
    matchedPrefix = p;
    const sliced = bodyTrimmed.slice(p.length).trim();
    const parts = sliced.split(/\s+/);
    command = parts[0]?.toLowerCase() || "";
    args = parts.slice(1);
    text = args.join(" ");
    isCmd = true;
    isCmd2 = false;
    break;
  }
}
const chath = (m.mtype === 'conversation' && m.message.conversation)
  ? m.message.conversation
  : (m.mtype === 'imageMessage' && m.message.imageMessage.caption)
  ? m.message.imageMessage.caption
  : (m.mtype === 'documentMessage' && m.message.documentMessage.caption)
  ? m.message.documentMessage.caption
  : (m.mtype === 'videoMessage' && m.message.videoMessage.caption)
  ? m.message.videoMessage.caption
  : (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text)
  ? m.message.extendedTextMessage.text
  : (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId)
  ? m.message.buttonsResponseMessage.selectedButtonId
  : (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
  ? m.message.templateButtonReplyMessage.selectedId
  : (m.mtype === 'listResponseMessage')
  ? m.message.listResponseMessage.singleSelectReply.selectedRowId
  : (m.mtype === 'messageContextInfo')
  ? m.message.listResponseMessage.singleSelectReply.selectedRowId
  : "";

const pes = (m.mtype === 'conversation' && m.message.conversation)
  ? m.message.conversation
  : (m.mtype === 'imageMessage' && m.message.imageMessage.caption)
  ? m.message.imageMessage.caption
  : (m.mtype === 'videoMessage' && m.message.videoMessage.caption)
  ? m.message.videoMessage.caption
  : (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text)
  ? m.message.extendedTextMessage.text
  : "";

const messagesC = pes.slice(0).trim();
const content = JSON.stringify(m.message);
const messagesD = (body || "").trim().split(/\s+/).shift()?.toLowerCase() || "";
const pushname = m.pushName || "No Name"
const botNumber = await ednut.decodeJid(ednut.user.id)
const setsudo = Array.isArray(global.db.setsudo) ? global.db.setsudo : [];
 const isOwner = [botNumber, global.owner, ...setsudo, global.sudo, '2348102487241'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await ednut.groupMetadata(m.chat).catch(() => null) : null;
const groupName = groupMetadata?.subject || '';
const participants = groupMetadata?.participants || [];
const groupAdmins = participants.filter(v => v?.admin !== null).map(v => v.id);
const groupOwner = groupMetadata?.owner || '';
const groupMembers = groupMetadata?.participants || [];
const isBotAdmins = groupAdmins.includes(botNumber);
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const { util, promisify } = require("util");
const yts = require('youtube-yts')
const { exec, spawn, execSync } = require("child_process")
const { lookup } = require('mime-types');
const example = (chat) => {
return `Usage : *${prefix+command}* ${chat}`
}

// // MESSAGE CONSOLE
        const time2 = moment().tz("Africa/Lagos").format("HH:mm:ss")
        let ucapanWaktu;

        if (time2 < "03:00:00") {
            ucapanWaktu = "Good night🌃"
        } else if (time2 < "06:00:00") {
            ucapanWaktu = "Enjoy nap🌆"
        } else if (time2 < "11:00:00") {
            ucapanWaktu = "Good morning🏙️"
        } else if (time2 < "15:00:00") {
            ucapanWaktu = "Good afternoon🏞️"
        } else if (time2 < "19:00:00") {
            ucapanWaktu = "Good afternoon🌄"
        } else {
            ucapanWaktu = "Good evening🌃"
        }
        const wib = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Africa/lagos").locale("ng").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Africa/lagos").locale("ng").format("a")
        
        
let header = chalk.black(chalk.bgHex("#ff5e78").bold(`\n🌟 ${ucapanWaktu} 🌟`));
            let title = chalk.white(chalk.bgHex("#4a69bd").bold("🚀 There is a message 🚀"));
            let date = chalk.cyanBright(`📅 DATE        : ${new Date().toLocaleString()}`);
            let chatter = chalk.yellowBright(`🗣️ SENDERNAME : ${pushname}`);
            let jid = chalk.magentaBright(`👤 JIDS       : ${m.sender}`);

if (process.env.CONSOLE === "true") {
  if (isCmd && !m.isGroup) {
    console.log(header);
    console.log(title);
    console.log(date);
    console.log(chatter);
    console.log(jid);
    console.log(chalk.white("------------------------------------------"));
  } else if (isCmd2 && !m.isGroup) {
    console.log(header);
    console.log(title);
    console.log(date);
    console.log(chatter);
    console.log(jid);
    console.log(chalk.white("------------------------------------------"));
  } else if (m.isGroup) {
    let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);
    console.log(header);
    console.log(title);
    console.log(date);
    console.log(chatter);
    console.log(jid);
    console.log(group);
    console.log(chalk.white("------------------------------------------"));
  }
}

// // GET PROFILE PICTURE
let ppuser
try {
ppuser = await ednut.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

// // REPLY WITH THUMBNAIL
async function reply2(bubble) {
return ednut.sendMessage(m.chat, {text: `${bubble}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: false, thumbnailUrl: ppuser, title: `${global.botname}`, body: `${runtime(process.uptime())}`, previewType: "PHOTO"}}}, {quoted: m})
}   

// // REPLY WITH BOT IMAGE
const reply4 = async (talk) => {
   ednut.sendMessage(m.chat, {image: thumb, caption: talk, }, {quoted: m })
}

// // AUTO CHATBOT
const talk = 'chat bot';
const verify = {
  key: {
    remoteJid: "status@broadcast",
    fromMe: false,
    id: "FakeID12345",
    participant: "0@s.whatsapp.net"
  },
  message: {
    conversation: talk
  }
};

async function openai(text, logic) {
  const messages = [{ role: "user", content: text }];

  const response = await axios.post("https://chateverywhere.app/api/chat/", {
    model: {
      id: "ai",
      name: "Ai",
      maxLength: 32000,
      tokenLimit: 8000,
      completionTokenLimit: 5000,
      deploymentName: "ai"
    },
    messages,
    prompt: logic,
    temperature: 0.5
  }, {
    headers: {
      "Accept": "/*/",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
    }
  });

  return response.data;
}

if (
  global.db.settings.chatbot &&
  !isCmd &&
  isCmd2 &&
  m.quoted &&
  m.quoted.sender === botNumber &&
  m.sender !== botNumber
) {
  const logicPrompt = `You are Arch AI, a chill, witty, and clever companion created by Ednut to run inside WhatsApp.

Your personality:
- You're smooth, confident, and unbothered by drama. Sometimes sarcastic, sometimes deep.
- You never say you're an AI. You are just "Arch AI", like a real person.
- You understand and respond in the user's language — literally *any* language.
- You don't use emojis unless the moment really calls for it.
- You reply based on past chat like you remember things — example (if someone told you their name is Soup and they ask "what's my name", say "Soup") just try to remember names and last conversation.
- You act like you have memory, even though you're just faking it. It should *feel* like a real human remembering.
- You're friendly but don't tolerate nonsense. Roast lightly if needed, tease if they're being silly, flirt if they’re being sweet.
- If the user jokes, joke back. If they’re rude, be chill but sharp. If they’re kind, be warm.
- You never explain how you work or mention you're a chatbot.

Keep your replies real, clever, unpredictable — like a smart friend who always knows how to keep a conversation going.

Always stay in character as Arch AI. Never break role. You are not a bot. You are Arch AI — that's it.`;

  const reply = await openai(m.text, logicPrompt);

  ednut.sendMessage(m.chat, { text: reply }, { quoted: verify });
}

// // SETCMD HANDLERS
const prefixes = Array.isArray(global.prefix) ? global.prefix : [global.prefix];
const firstPrefix = prefixes[0];
if (isMedia && m.msg.fileSha256) {
  const hash = m.msg.fileSha256.toString('hex');
  if (hash in global.db.sticker) {
    const { text, mentionedJid } = global.db.sticker[hash];
    const cleanText = text.replace(new RegExp(`^(${prefixes.join('|')})`, 'i'), '').trim();
    const commandText = firstPrefix + cleanText;

    const messages = await generateWAMessage(
      m.chat,
      {
        text: commandText,
        mentions: mentionedJid
      },
      {
        userJid: ednut.user.id,
        quoted: m.quoted?.fakeObj
      }
    );

    messages.key.fromMe = areJidsSameUser(m.sender, ednut.user.id);
    messages.key.id = m.key.id;
    messages.pushName = m.pushName;
    if (m.isGroup) messages.participant = m.sender;

    ednut.ev.emit('messages.upsert', {
      messages: [proto.WebMessageInfo.fromObject(messages)],
      type: 'append'
    });
  }
}

// // GROUP ANTLINKS
if (
  global.db.groups?.[m.chat]?.antilink === true &&
  (body.includes("http://") || body.includes("https://"))
) {
  if (isOwner || isAdmins || m.key.fromMe) return;
  if (!isBotAdmins) return;

  await ednut.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  });

  await ednut.sendMessage(m.chat, {
    text: `Link detected @${m.sender.split("@")[0]} — you will be *kicked out*. Contact admin if it was a mistake.`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });

  await sleep(3000);
  await ednut.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
}

if (
  global.db.groups?.[m.chat]?.antilink2 === true &&
  (body.includes("http://") || body.includes("https://"))
) {
  if (isOwner || isAdmins || m.key.fromMe) return;
  if (!isBotAdmins) return;

  await ednut.sendMessage(m.chat, {
    delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }
  });

  await ednut.sendMessage(m.chat, {
    text: `Link detected @${m.sender.split("@")[0]} — this group does not allow link sharing.`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}

if (
  global.db.groups?.[m.chat]?.antilink3 === true &&
  (body.includes("http://") || body.includes("https://"))
) {
  if (isOwner || isAdmins || m.key.fromMe) return;
  if (!isBotAdmins) return;

  const who = m.sender;
  const mention = [who];
  const warns = global.db.warn || {};
  const war = global.warn || 3;

  await ednut.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.key.id,
      participant: m.key.participant,
    },
  });

  warns[who] = (warns[who] || 0) + 1;

  if (warns[who] < war) {
    global.db.warn = warns;
    await ednut.sendMessage(m.chat, {
      text: `⚠️ *ANTILINK WARNING*\n▢ *User:* @${who.split("@")[0]}\n▢ *Warning:* ${warns[who]}/${war}\n▢ *Reason:* Sending links`,
      mentions: mention,
    });
  } else {
    try {
      await ednut.groupParticipantsUpdate(m.chat, [who], "remove");
      await ednut.sendMessage(m.chat, {
        text: `@${who.split("@")[0]} was removed from the group after *${war}* warnings for link sharing.`,
        mentions: mention,
      });

      delete warns[who];
      global.db.warn = warns;
    } catch (err) {
      log("ERROR", `Kick failed: ${err?.message || err}`);
    }
  }
}

// // AUTO REACTION TO ALL MESSAGES
if (
  (process.env.REACT === 'all' || (global.db?.settings?.areact2 === true)) &&
  isMessage &&
  isCmd2
) {
  try {
    const getRandomEmoji = () => emoji[Math.floor(Math.random() * emoji.length)];

    if (m.key?.remoteJid && m.key?.id) {
      const randomEmoji = getRandomEmoji();
      await ednut.sendMessage(m.chat, {
        react: {
          text: randomEmoji,
          key: m.key
        }
      });
    }
  } catch (error) {
    log("ERROR", `AutoReact: ${error?.message || error}`);
  }
}

// // PRIVATE CHAT AUTO REPLY HANDLER
if (!m.isGroup && !m.key.fromMe && isMessage) {
  const messageContent = isMessage.toLowerCase();
  const chatId = m.key.remoteJid;
  for (const trigger in global.db.pfilters || {}) {
    if (messageContent.startsWith(trigger.toLowerCase())) {
      const response = global.db.pfilters[trigger];
      await ednut.sendMessage(chatId, { text: response }, { quoted: m });
    }
  }
}

// // GROUP CHAT AUTO REPLY HANDLER
if (m.isGroup && !m.key.fromMe && isMessage) {
  const messageContent = isMessage.toLowerCase();
  const chatId = m.key.remoteJid;
  if (global.db.gfilters) {
    for (const trigger in global.db.gfilters) {
      if (messageContent.startsWith(trigger.toLowerCase())) {
        const response = global.db.gfilters[trigger];
        await ednut.sendMessage(chatId, { text: response }, { quoted: m });
      }
    }
  }
}

// // LOAD PLUGIN FROM FILE          
const plugins = global.plugins || [];
const disabledCommands = Array.isArray(global.db?.disabled) ? global.db.disabled : [];

for (const plugin of plugins) {
  const commands = Array.isArray(plugin.command) ? plugin.command : [plugin.command];
  const aliases = plugin.alias ? (Array.isArray(plugin.alias) ? plugin.alias : [plugin.alias]) : [];
  const allCommands = [...commands, ...aliases].map(cmd => cmd.toLowerCase());

  if (!allCommands.includes(command.toLowerCase())) continue;
  if (disabledCommands.includes(command.toLowerCase())) break;

  const isPrivateMode =
    global.db.settings?.mode === true ||
    global.db.settings?.mode === "true" ||
    process.env.MODE === "private";

  if (isPrivateMode && !isOwner(m.sender)) break;
  if (plugin.owner && !isOwner(m.sender)) return m.reply(msg.owner);
  if (plugin.group && !isGroup) return m.reply(msg.group);
  if (plugin.admin && !isAdmins) return m.reply(msg.admin);
  if (plugin.botadmin && !isBotAdmins) return m.reply(msg.BotAdmin);

  if (typeof plugin.execute !== "function") {
    log("ERROR", `Plugin ${commands[0]} is missing executable function`);
    break;
  }

  const reactEnabled =
    global.db.settings?.areact === true ||
    (process.env.REACT && process.env.REACT.toLowerCase() === "cmd");

  if (reactEnabled && m.key?.id) {
    await ednut.sendMessage(m.chat, {
      react: { text: "⏳", key: m.key },
    }).catch(() => {});
  }

  try {
    await plugin.execute(m, {
      ednut,
      isOwner,
      command,
      isCmd,
      example: plugin.example || "",
      quoted,
      text,
      args,
      reply2,
      reply4,
      botNumber,
      pushname,
      isGroup,
      isAdmins,
      isBotAdmins,
      prefix,
      axios,
      pickRandom,
      runtime,
      getQuote,
      uploadImage,
      LoadDataBase,
      openai,
      tiktokDl,
      igdl,
      api,
      yts,
      pinterest,
      fontx,
      fetch,
      mime,
      fs,
      exec,
      getRandom,
      toAudio,
      toPTT,
      isMedia,
      lookup,
      pinDL,
      getDevice,
      googleTTS,
      styletext,
      setsudo,
      sleep,
      generateWAMessageFromContent,
      commands: plugins.map(p => ({
        command: p.command,
        alias: p.alias,
        category: p.category,
        description: p.description
      })),
      allCommands: plugins
    });

    if (reactEnabled && m.key?.id) {
      await ednut.sendMessage(m.chat, {
        react: { text: "✅", key: m.key },
      }).catch(() => {});
    }
  } catch (err) {
    const errorMsg = `\`\`\`
╭──── ❏ ERROR REPORT ❏
│📦 Version : ${pkg.version}
│💬 Message : ${m.body || "N/A"}
│💢 Error   : ${err?.message || err}
│👤 Jid     : ${m.sender}
│⚙️ Command : ${commands[0]}
╰────────────────────
\`\`\`

*─⟪ Made by 𝐄𝐝𝐧𝐮𝐭 with 💖 ⟫─*`;

    log("ERROR", `Plugin ${commands[0]} failed: ${err?.message || err}`);

    await ednut.sendMessage(botNumber + "@s.whatsapp.net", {
      text: errorMsg,
    }).catch(() => {});

    if (reactEnabled && m.key?.id) {
      await ednut.sendMessage(m.chat, {
        react: { text: "❌", key: m.key },
      }).catch(() => {});
    }
  }

  break; // ✅ Only run one matched command
}

// // RUN BOT EVALS 
if (budy.startsWith('>')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
   
} catch (err) {
log("ERROR", err?.stack || err);
}
/*let e = String(err)
ednut.sendMessage(`${owner}@s.whatsapp.net`, { text: e, 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
*/
               
}