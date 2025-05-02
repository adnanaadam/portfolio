import { ExternalLink, Github } from 'lucide-react';

const AboutProjects = ({ project }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h5 className='text-blue font-kode text-sm'>Featured Project</h5>
        <h1 className='text-xl font-semibold'>{project.title}</h1>
      </div>

      <p className='text-sm text-gray-300 md:text-base'>
        {project.description}
      </p>

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
