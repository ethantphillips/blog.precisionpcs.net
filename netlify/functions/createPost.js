
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const token = process.env.GITHUB_TOKEN;
  const repo = "ethantphillips/blog.precisionpcs.net";
  const filePath = "src/content/blog/auto-post.md";

  const content = Buffer.from(`# Auto Blog Post\n\nThis post was created via Netlify Function.`).toString("base64");

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Automated blog post",
      content,
    }),
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
