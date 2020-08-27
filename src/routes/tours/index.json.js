import fs from 'fs'
import path from 'path'
import marked from 'marked'
import grayMatter from 'gray-matter'

function getAllTours(filesPath) {
  const data = fs.readdirSync(filesPath).filter(f => /.*\.md$/.test(f)).map((fileName) => {
    const tour = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8");

    // Parse Front matter from string
    const { data, content } = grayMatter(tour);

    // Turns markdown into html
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });

    // Builds data
    return {
      ...data,
      slug: fileName.substring(0, fileName.length - 3),
      html
    };
  });
  return data;
}

export function get(req, res) {
  const tours = getAllTours("src/tours");

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(tours));
}