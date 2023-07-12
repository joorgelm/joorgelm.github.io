import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

const Projects = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/projects.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Projetos"
      description="Projetos"
    >
      <article className="post markdown" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">Projetos</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Projects;
