import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Huggingface', img: '/images/huggingface.png' },
  { name: 'Django', img: '/images/django.png' },
  { name: 'Nextjs', img: '/images/Next.png' },
  { name: 'Postgres', img: '/images/postgres.png' },
  { name: 'AWS', img: '/images/aws.png' },
  { name: 'Databricks', img: '/images/databricks.png' },
  { name: 'Ascend', img: '/images/ascend.jpg' },
  { name: 'Docker', img: '/images/docker.png' },
];

const Technologies = () => {
  return (
    <div id='tech' className="flex-1  w-full md:w-auto min-w-[300px]">
      <h2 className="text-xl font-bold mb-4 text-center">Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-md border-4 border-purple-600">
              <Image 
                src={tech.img}
                alt={tech.name}
                width={80} 
                height={80} 
                className="rounded-md" 
              />
            </div>
            <p className="mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
