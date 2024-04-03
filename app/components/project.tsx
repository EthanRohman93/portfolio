import Link from 'next/link';

const projectIds = ['answer-bot', 'capstone', 'marketing-campaign', 'thesis']; // Defined statically or fetched via props

const ProjectSection = () => (
  <ul>
    {projectIds.map(id => (
      <li key={id}>
        <Link href={`/projects/${id}`}>
          <a>{id.replace('-', ' ').toUpperCase()}</a> {/* Example transformation for display */}
        </Link>
      </li>
    ))}
  </ul>
);

export default ProjectSection;

