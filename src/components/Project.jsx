import React from 'react';

function Project({ title, deployedLink, repoLink, image }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Deployed Version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub Repository: <a href={repoLink}>{repoLink}</a></p>
      {/* Render project image */}
    </div>
  );
}

export default Project;