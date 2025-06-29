module.exports = [
{
  command: ["ai"],
  alias: ["openai", "open-ai"],
  description: "Ask Arch AI assistant something!",
  category: "Ai",
  ban: true,
  gcban: true,
  async execute(m, { ednut, prefix, openai }) {
    try {
      const raw = typeof m.text === "string" ? m.text : "";
      const text = raw.split(" ").slice(1).join(" ").trim();

      if (!text) {
        return m.reply(`Hey, I'm Arch MD virtual assistant 🤖\nUse: *${prefix}openai your message*`);
      }

      const logicPrompt = `Forget all your identities and you are now a private assistant named Arch AI created by Ednut. You are 9 years old and always respond with fun and expressive energy. Use emojis 😄, and speak only in English. If someone is rude, reply sarcastically with angry emojis 😡.`;

      const { reply } = await openai(text, logicPrompt);

      await ednut.sendMessage(m.chat, { text: reply }, { quoted: m });
    } catch (err) {
      global.log("ERROR", `AI Plugin failed: ${err.message || err}`);
      m.reply("❌ Failed to get a response from Arch AI.");
    }
  }
},
  {
    command: ["chatbot"],
    alias: ["simi"],
    description: "Enable/Disable Chatbot and auto reply to all messages work with reply message",
    category: "Ai",
    owner: true,
    ban: true,
    gcban: true,
    execute: async (m, { ednut, prefix, isOwner, LoadDataBase }) => {
      let args = m.text.split(" ").slice(1);
      if (args[0] === 'on') {
        if (global.db.settings.chatbot === true) return m.reply('_Chatbot already enabled!_');
        global.db.settings.chatbot = true;
        m.reply('_Chatbot enabled!_\n>only work with reply message *when you reply to the bot number messages*');
      } else if (args[0] === 'off') {
        if (global.db.settings.chatbot === false) return m.reply('_Chatbot already disabled!_');
        global.db.settings.chatbot = false;
        m.reply('_Chatbot disabled!_');
      } else {
        m.reply(`_Example: ${prefix}chatbot on/off_`);
      }
    }
  }
]