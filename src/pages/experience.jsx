import { useState } from 'react';
import { motion } from 'framer-motion';

const mailVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
  },
};

const experiences = [
  {
    company: 'Upstatement',
    role: 'Engineer',
    duration: 'May 2018 — Present',
    responsibilities: [
      'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify.',
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis.',
    ],
  },
  {
    company: 'Scout',
    role: 'Frontend Developer',
    duration: 'Jan 2017 — Apr 2018',
    responsibilities: [
      'Collaborated with designers to implement responsive, pixel-perfect UIs.',
      'Optimized web experiences for speed and accessibility.',
    ],
  },
  {
    company: 'Apple',
    role: 'UI Engineer Intern',
    duration: 'May 2016 — Dec 2016',
    responsibilities: [
      'Developed internal tools for automating UI testing.',
      'Worked closely with senior engineers to modernize legacy components.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='relative w-full bg-[#0a192f] px-4 py-20 pt-32 text-white md:h-screen md:px-16'>
      {/* Mail section */}
      <motion.div
        className='text-grey group fixed bottom-0 hidden items-center justify-center gap-2 text-xs [writing-mode:vertical-lr] sm:absolute sm:left-4 md:flex lg:ml-12'
        variants={mailVariants}
      >
        <a
          href='mailto:adnanmish30@gmail.com'
          className='group-hover:text-blue'
        >
          adnanmish30@gmail.com
        </a>
        <div className='bg-grey h-[10rem] w-[2px]'></div>
      </motion.div>

      <div className='md:ml-28'>
        <h2 className='text-blue mb-10 flex items-center gap-2 text-2xl font-semibold'>
          Where I’ve Worked
          <span className='ml-4 h-px w-1/5 bg-gray-700 hidden md:block'></span>
        </h2>

        <div className='flex flex-col gap-6 md:flex-row'>
          {/* Left Tabs */}
          <div className='no-scrollbar flex overflow-x-scroll border-b border-teal-500 md:w-48 md:flex-col md:border-b-0 md:border-l'>
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer border-b-2 px-4 py-2 text-left md:border-b-0 md:border-l-2 ${
                  activeTab === index
                    ? 'border-blue text-blue bg-[#112240]'
                    : 'border-transparent text-gray-400 hover:bg-[#112240]'
                } w-full transition-all duration-300`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className='flex-1'
          >
            <h3 className='mb-1 text-xl font-medium text-gray-200'>
              {experiences[activeTab].role}{' '}
              <span className='text-blue'>
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className='font-kode mb-4 text-sm text-gray-400'>
              {experiences[activeTab].duration}
            </p>
            <ul className='space-y-3 md:w-[80%]'>
              {experiences[activeTab].responsibilities.map((item, i) => (
                <li key={i} className='flex items-start gap-3 text-gray-400'>
                  <span className='text-blue'>▸</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className='font-kode absolute right-8 bottom-4 z-20 text-[0.6rem] opacity-30'>
        <span>created by Adnan | copyright © 2025</span>
      </div>
      {/* Bottom gradient */}
      <div className='from-darkBlue to-blue/0 absolute bottom-0 z-10 hidden h-1/5 w-full bg-gradient-to-t md:flex'></div>
    </div>
  );
};

export default Experience;
