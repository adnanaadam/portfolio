import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router';

const AboutProjects = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h5 className='text-blue font-kode'>Featured Project</h5>
        <h1 className='text-2xl font-bold'>Title</h1>
      </div>

      <p className='text-sm text-gray-300'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, sit
        dolorem deleniti quibusdam praesentium sunt hic modi quis voluptate qui
        mollitia saepe quidem beatae obcaecati corporis ex commodi! Natus
        numquam molestiae eos voluptatem iste, ut dolorem, quasi laudantium
        reprehenderit pariatur, aliquid delectus quas nulla blanditiis odit non
        nam nostrum est!
      </p>

      {/* technologies */}
      <div className='font-kode text-grey text-sm flex gap-4'>
        <span>tech</span>
        <span>tech</span>
        <span>tech</span>
      </div>

      {/* links */}
      <div className='text-grey flex gap-4 *:hover:text-blue *:transition *:duration-300 *:ease-in-out'>
        <Link to='github'>
          <span>
            <Github />
          </span>
        </Link>
        <Link to='/about'>
          <span>
            <ExternalLink />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default AboutProjects;
