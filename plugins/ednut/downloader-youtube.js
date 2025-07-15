module.exports = [
{
  command: ["yta"],
  alias: ["ytmp3", "ytaudio"],
  description: "Download YouTube audio (MP3)",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, text }) => {
    if (!text) return m.reply("Please provide a YouTube video link.");
    if (!text.startsWith("https://")) return m.reply("Invalid YouTube link.");

    try {
      const api = `https://api.yogik.id/downloader/youtube?url=${encodeURIComponent(text)}&format=audio&quality=720`;
      const { data } = await require("axios").get(api);

      if (data?.status && data?.result?.download_url) {
        const note = await ednut.sendMessage(m.chat, {
          text: `🎧 Downloading: *${data.result.title}*`,
        }, { quoted: m });

        await ednut.sendMessage(m.chat, {
          audio: { url: data.result.download_url },
          mimetype: "audio/mpeg"
        }, { quoted: note });
      } else {
        m.reply("❌ Failed to fetch audio.");
      }
    } catch (err) {
      global.log("ERROR", `yta: ${err.message || err}`);
      m.reply("An error occurred while downloading audio.");
    }
  }
},
  {
  command: ["ytv"],
  alias: ["ytmp4", "ytvideo"],
  description: "Download YouTube video as MP4",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, text }) => {
    if (!text) return m.reply("Please provide a YouTube video link.");
    if (!text.startsWith("https://")) return m.reply("Invalid YouTube link.");

    try {
      const api = `https://api.yogik.id/downloader/youtube?url=${encodeURIComponent(text)}&format=video&quality=720`;
      const { data } = await require("axios").get(api);

      if (data?.status && data?.result?.download_url) {
        const note = await ednut.sendMessage(m.chat, {
          text: `📥 Downloading: *${data.result.title}*`,
        }, { quoted: m });

        await ednut.sendMessage(m.chat, {
          video: { url: data.result.download_url },
          mimetype: "video/mp4",
          caption: global.footer
        }, { quoted: note });
      } else {
        m.reply("❌ Failed to fetch video download.");
      }
    } catch (err) {
      global.log("ERROR", `ytv command: ${err.message || err}`);
      m.reply("An error occurred while downloading the video.");
    }
  }
},
{
  command: ["play"],
  alias: ["ytplay", "ytmusic"],
  description: "Search and play song from YouTube",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, yts, text }) => {
    if (!text) return m.reply("Please provide a song name.");

    try {
      const search = await yts(text);
      const result = search.all?.[0];
      if (!result) return m.reply("No results found.");

      const title = result.title;
      const downloadNote = await ednut.sendMessage(m.chat, {
        text: `⏳ Downloading *${title}*...`
      });

      const apiUrl = `https://archive.lick.eu.org/api/download/ytmp3?url=${encodeURIComponent(result.url)}`;
      const response = await fetch(apiUrl);
      const json = await response.json();

      if (json?.status && json.result?.audio_url) {
        await ednut.sendMessage(m.chat, {
          audio: { url: json.result.audio_url },
          mimetype: "audio/mpeg"
        }, { quoted: downloadNote });
      } else {
        m.reply("❌ MP3 download failed.");
      }
    } catch (err) {
      global.log("ERROR", `play command: ${err.message || err}`);
      m.reply("An error occurred while processing your request.");
    }
  }
},
  {
  command: ["video"],
  alias: ["ytgrab"],
  description: "Search and download YouTube video",
  category: "Downloader",
  ban: true,
  gcban: true,
  execute: async (m, { ednut, yts, text }) => {
    if (!text) return m.reply("Please provide a video name.");

    try {
      const search = await yts(text);
      const result = search.all?.[0];
      if (!result) return m.reply("No video found.");

      const apiUrl = `https://api.yogik.id/downloader/youtube?url=${encodeURIComponent(result.url)}&format=video&quality=720`;
      const { data } = await require("axios").get(apiUrl);

      if (data?.status && data?.result?.download_url) {
        const downloading = await ednut.sendMessage(m.chat, {
          text: `📥 Downloading: *${data.result.title}*`,
        }, { quoted: m });

        await ednut.sendMessage(m.chat, {
          video: { url: data.result.download_url },
          mimetype: "video/mp4",
          caption: global.footer
        }, { quoted: downloading });
      } else {
        m.reply("❌ Video download failed.");
      }

    } catch (err) {
      global.log("ERROR", `video command: ${err.message || err}`);
      m.reply("An error occurred while downloading the video.");
    }
  }
}
];