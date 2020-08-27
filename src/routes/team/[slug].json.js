import fs from "fs";
import path from "path";
import marked from "marked";
import grayMatter from "gray-matter";

export function get(req, res) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  // Reading correct file
  const member = fs.readFileSync(
    path.resolve("src/team", `${slug}.md`),
    "utf-8"
  );

  // Parse front matter
  const { data, content } = grayMatter(member);

  // Render html from string
  const renderer = new marked.Renderer();
  const html = marked(content, { renderer });

  res.end(
    JSON.stringify({
      ...data,
      html
    })
  );
}