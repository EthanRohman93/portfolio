import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Huggingface', img: '/images/huggingface.png' },
  { name: 'Django', img: '/images/django.png' },
  { name: 'Nextjs', img: '/images/Next.png' }, // or '/images/Next.png' if you prefer the PNG version
  { name: 'Postgres', img: '/images/postgres.png' },
  { name: 'AWS', img: '/images/aws.png' }, // Assuming you're using the same image for AWS EC2 and RDS
  { name: 'Databricks', img: '/images/databricks.png' },
  { name: 'Ascend', img: '/images/ascend.jpg' },
];

const Technologies = () => {
  return (
    <div className="w-full py-4">
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
