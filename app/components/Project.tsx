interface ProjectProps {
  pname: string; // Project name, treated as the title in this context
}

const Project: React.FC<ProjectProps> = ({ pname }) => {
  return (
    <div>
      <h4>{pname}</h4> {/* Displaying pname as the title */}
    </div>
  );
}

export default Project;
