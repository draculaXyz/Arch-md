module.exports = async function getLatestGitHubVersion() {
  try {
    const res = await fetch("https://api.github.com/repos/Ednut001/Arch-md/releases/latest");
    if (!res.ok) return null;

    const json = await res.json();
    return json.tag_name?.replace(/^v/, "") || null;
  } catch {
    return null;
  }
};