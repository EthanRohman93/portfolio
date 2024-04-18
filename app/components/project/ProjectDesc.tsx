'use client'
import React from 'react';
import StyledLink from '../StyledLink';
import SectionTitle from '../SectionTitle';

type PropsType = {
    title: string;
    includeBorder?: boolean;
    id: string;
    content: string;
    href?: string;
    linkContent?: string;

}

const ProjectDesc = ({ title, includeBorder = false, id, content, href, linkContent }: PropsType) => {
  return (
    <div className={`mx-auto max-w-4xl p-4 rounded-xl ${includeBorder ? 'border-4 border-purple-600' : ''} my-4`}>
      <SectionTitle title={title} includeBorder={false} id={id}/>
      <p
        className='p-2'
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {href && linkContent && (
        <div className="flex justify-center">
          <StyledLink href={href} text={linkContent} />
        </div>
      )}
    </div>
  );
};

export default ProjectDesc;
