import { useState } from 'react';
import { motion } from 'framer-motion';
import { Experiences } from '../db';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const mailVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
  },
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='relative w-full bg-[#0a192f] px-4 py-20 pt-32 text-white md:h-screen md:px-16'>
      {/* Mail section */}
      <motion.div
        className='text-grey group fixed bottom-0 hidden items-center justify-center gap-2 text-xs [writing-mode:vertical-lr] sm:absolute sm:left-4 md:flex lg:ml-12'
        variants={mailVariants}
        initial='hidden'
        animate='visible'
      >
        <a
          href='mailto:adnanmish30@gmail.com'
          className='group-hover:text-blue'
        >
          adnanmish30@gmail.com
        </a>
        <div className='bg-grey h-[10rem] w-[2px]'></div>
      </motion.div>

      <motion.div
        className='md:ml-28'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Header */}
        <motion.h2
          className='text-blue mb-10 flex items-center gap-2 text-lg md:text-xl font-semibold'
          variants={childVariants}
        >
          Where I’ve Worked
          <span className='ml-4 h-px w-1/5 bg-gray-700 md:inline-block'></span>
        </motion.h2>

        <div className='flex flex-col gap-6 md:flex-row'>
          {/* Left Tabs */}
          <motion.div
            className='no-scrollbar flex overflow-x-scroll border-b border-teal-500 md:w-48 md:flex-col md:border-b-0 md:border-l'
            variants={childVariants}
          >
            {Experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer text-sm border-b-2 px-4 py-2 text-left md:border-b-0 md:border-l-2 ${
                  activeTab === index
                    ? 'border-blue text-blue bg-[#112240]'
                    : 'border-transparent text-gray-400 hover:bg-[#112240]'
                } w-full transition-all duration-300`}
              >
                {exp.company}
              </button>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className='flex-1'
          >
            <motion.h3
              className='mb-1 text-lg md:text-xl font-medium text-gray-200'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {Experiences[activeTab].role}{' '}
              <span className='text-blue'>
                @ {Experiences[activeTab].company}
              </span>
            </motion.h3>
            <motion.p
              className='font-kode mb-4 text-sm text-gray-400'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {Experiences[activeTab].duration}
            </motion.p>
            <motion.ul
              className='space-y-3 md:w-[80%]'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {Experiences[activeTab].responsibilities.map((item, i) => (
                <li key={i} className='flex items-start text-sm md:text-base gap-3 text-gray-400'>
                  <span className='text-blue'>▸</span> {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.div>

      <div className='font-kode absolute bottom-4 z-20 w-full text-center text-[0.6rem] opacity-30 md:right-8 md:w-auto'>
        <span>created by Adnan | copyright © 2025</span>
      </div>

      {/* Bottom gradient */}
      <div className='from-darkBlue to-blue/0 absolute bottom-0 z-10 hidden h-1/5 w-full bg-gradient-to-t md:flex'></div>
    </div>
  );
};

export default Experience;
