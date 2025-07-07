const { execSync } = require("child_process");
const fetch = require("node-fetch");

module.exports = [
  {
    command: ["update"],
    description: "🔄 Update the bot from GitHub",
    category: "Other",
    owner: true,
    async execute(m, { ednut }) {
      const GIT_REPO = "https://github.com/Ednut001/Arch-md";
      const HEROKU_API_KEY = process.env.HEROKU_API_KEY;
      const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME;

      try {
        // Get current and latest commits
        let localCommit = execSync("git rev-parse HEAD").toString().trim();
        let remoteCommit = execSync("git ls-remote origin -h refs/heads/main").toString().split("\t")[0];

        if (localCommit === remoteCommit) {
          return m.reply("✅ Bot is already up to date.");
        }

        await m.reply("📦 New update available...\n⏳ Updating now...");

        // If on Heroku
        if (HEROKU_API_KEY && HEROKU_APP_NAME) {
          const res = await fetch(`https://api.heroku.com/apps/${HEROKU_APP_NAME}/builds`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/vnd.heroku+json; version=3",
              Authorization: `Bearer ${HEROKU_API_KEY}`,
            },
            body: JSON.stringify({
              source_blob: {
                url: `${GIT_REPO}.tar.gz`,
              },
            }),
          });

          if (!res.ok) {
            const errTxt = await res.text();
            throw new Error(`Heroku Build Error:\n${errTxt}`);
          }

          await m.reply("🚀 Update triggered on Heroku!\nWait 1–2 minutes for it to rebuild.");
          return;
        }

        // Local update for VPS/Panel/Termux
        execSync("git pull");
        await m.reply("✅ Update pulled!\n♻️ Restarting bot to apply changes...");

        // Exit to let process manager restart it
        process.exit(1);

      } catch (err) {
        global.log("ERROR", `Update failed: ${err.message || err}`);
        m.reply("❌ Update failed. Try manually pulling or check logs.");
      }
    },
  },
];
