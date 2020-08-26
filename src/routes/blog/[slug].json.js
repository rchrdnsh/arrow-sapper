// --------------------------------
// Level Up Tuts
// --------------------------------

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
  const post = fs.readFileSync(
    path.resolve("src/posts", `${slug}.md`),
    "utf-8"
  );

  // Parse front matter
  const { data, content } = grayMatter(post);

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

// --------------------------------
// Blog Post
// --------------------------------

// import path from "path";
// import fs from "fs";
// import grayMatter from "gray-matter";
// import marked from "marked";
// // import hljs from "highlight.js";

// const getPost = fileName =>
//   fs.readFileSync(path.resolve("posts", `${fileName}.md`), "utf-8");

// export function get(req, res, next) {
//   const { slug } = req.params;

//   // get the markdown text
//   const post = getPost(slug);

//   // function that expose helpful callbacks
//   // to manipulate the data before convert it into html
//   const renderer = new marked.Renderer();

//   // use hljs to highlight our blocks codes
//   // renderer.code = (source, lang) => {
//   //   const { value: highlighted } = hljs.highlight(lang, source);
//   //   return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`;
//   // };

//   // parse the md to get front matter
//   // and the content without escaping characters
//   const { data, content } = grayMatter(post);

//   const html = marked(content, { renderer });

//   if (html) {
//     res.writeHead(200, {
//       "Content-Type": "application/json"
//     });

//     res.end(JSON.stringify({ html, ...data }));
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "application/json"
//     });

//     res.end(
//       JSON.stringify({
//         message: `Not found`
//       })
//     );
//   }
// }