import React from 'react';
import Link from 'next/link';

const ProjectSection = () => (
  <section>
    <h2>Projects</h2>
          <ul>
      <li>
        <Link>
          <a href="/projects/answer-bot">Answer Bot</a>
        </Link>
      </li>
      {/* Repeat for other projects */}
    </ul>
  </section>
);

export default ProjectSection;

