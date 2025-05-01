import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const AboutProjects = ({ project }) => {
  const [transitioning, setTransitioning] = useState(false);
  const [currentProject, setCurrentProject] = useState(project);

  useEffect(() => {
    if (project !== currentProject) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setCurrentProject(project);
        setTransitioning(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [project, currentProject]);

  return (
    <div
      className={`flex flex-col gap-6 ${
        transitioning
          ? '-translate-x-4 opacity-0 duration-0'
          : 'translate-x-0 opacity-100 duration-300'
      }`}
    >
      <div className='flex flex-col gap-1'>
        <h5 className='text-blue font-kode text-sm'>Featured Project</h5>
        <h1 className='text-2xl font-bold'>{project.title}</h1>
      </div>

      <p className='text-sm text-gray-300'>{project.description}</p>

      {/* technologies */}
      <div className='font-kode text-grey flex gap-4 text-sm'>
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      {/* links */}
      <div className='text-grey *:hover:text-blue flex gap-4 *:transition *:duration-300 *:ease-in-out'>
        {project.github && (
          <a href={project.github}>
            <span>
              <Github />
            </span>
          </a>
        )}
        {project.demo && (
          <a href={project.demo}>
            <span>
              <ExternalLink />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default AboutProjects;
