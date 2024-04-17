'use client'
import React from 'react';
import StyledLink from '../StyledLink';
import SectionTitle from '../SectionTitle';

const PortDesc = () => {
  return (
    <div className="mx-auto max-w-4xl p-4 rounded-xl border-4 border-purple-600 my-4">
      <SectionTitle title='This Portfolio Website' size={2} includeBorder={false}/>
      <p>
        Developed with <strong>Next.js</strong> for front-end and <strong>NGINX</strong> on an <strong>EC2</strong> instance for server-side operations, using <strong>Docker</strong> containers for streamlined service management and deployment. This setup leverages HTTPS for secure connections, with static site generation offering optimized performance across devices. The architecture includes dynamic routing to efficiently handle project pages with code snippets and details, showcasing both flexibility and scalability.
      </p>
      <div className="flex justify-center">
          <StyledLink href="project/portfolio" text="View Portfolio Details" />
      </div>
    </div>
  );
};

export default PortDesc;

