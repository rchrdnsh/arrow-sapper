// --------------------------------
// Level Up Tuts
// --------------------------------

import fs from 'fs'
import path from 'path'
import marked from 'marked'
import grayMatter from 'gray-matter'

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).filter(f => /.*\.md$/.test(f)).map((fileName) => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8");

    // Parse Front matter from string
    const { data, content } = grayMatter(post);

    // Turns markdown into html
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });

    // Builds data
    return {
      ...data,
      html
    };
  });
  return data;
}

export function get(req, res) {
  const posts = getAllPosts("src/posts");

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(posts));
}