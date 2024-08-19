import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkImages from 'remark-images';

const initialMarkdown = `# Mehria
## Saqibi

[Github-Link](https://github.com/Saqibi4213)

\`Inline code\`
\`\`\`

Code block
\`\`\`

- List item

> Blockquote
>> GIF

![GithubGIF](https://octodex.github.com/images/NUX_Octodex.gif)

**Bold text**

\nNew line here after two spaces at the end of this line.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
// eslint-disable-next-line no-unused-vars
function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <div id="heading">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="App">
        <textarea id="editor" value={markdown} onChange={handleChange} />
        <div id="preview">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks, remarkImages]}>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default MarkdownPreviewer;