import React from 'react';
import { motion } from 'framer-motion';
import myImage from '/me.jpg';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaDiscord,
} from 'react-icons/fa6';

// Social links
const socials = [
  {
    Name: 'GitHub',
    id: '1',
    hrefUrl: 'https://github.com/adnanaadam',
    icon: FaGithub,
    style: 'hover:text-gray-800',
    nameStyle: 'text-gray-800',
  },
  {
    Name: 'Discord',
    id: '2',
    hrefUrl: 'https://github.com/adnanaadam',
    icon: FaDiscord,
    style: 'hover:text-blue-500',
    nameStyle: 'text-blue-500',
  },
  {
    Name: 'LinkedIn',
    id: '3',
    hrefUrl: 'https://www.linkedin.com/in/adam-adnan-35657b251',
    icon: FaLinkedinIn,
    style: 'hover:text-[#004182]',
    nameStyle: 'text-[#004182]',
  },
  {
    Name: 'Instagram',
    id: '4',
    hrefUrl: 'https://www.instagram.com/addy_sharawi',
    icon: FaInstagram,
    style: 'hover:text-[#F56040]',
    nameStyle: 'text-[#F56040]',
  },
  {
    Name: 'X',
    id: '5',
    hrefUrl: 'https://x.com/addy_sharawi',
    icon: FaXTwitter,
    style: 'hover:text-gray-900',
    nameStyle: 'text-gray-900',
  },
];

const TeckStack = [
  'JavaScript',
  'React',
  'TypeScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'NextJS',
  'NodeJS',
  'MongoDB',
  'ExpressJS',
  'Firebase',
];

// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
};

const buttonVariants = {
  hover: { scale: 1.08 },
  tap: { scale: 0.9 },
  transition: { type: 'spring', duration: 0.3, stiffness: 500, damping: 17 },
};

const AboutMe = () => {
  return (
    <motion.div
      className='flex w-full flex-col items-start justify-between px-4 pt-28 pb-4 text-white md:h-screen md:px-16'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='mb-8 flex flex-col items-center gap-12 md:mb-0 md:flex-row'>
        {/* Image Wrapper */}
        <div className='relative flex-shrink-0'>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className='border-blue absolute -top-2 -left-2 h-80 w-72 rounded-2xl border-2 bg-[#112240]'
          />
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className='border-blue relative z-10 rounded-2xl border-4 p-1'
          >
            <img
              src={myImage}
              alt='Adnan Mish'
              className='h-80 w-72 rounded-2xl object-cover'
            />
          </motion.div>
        </div>

        {/* Text & Tech Stack */}
        <motion.div className='max-w-2xl' variants={textVariants}>
          <h1 className='text-blue mb-4 flex items-center text-lg font-semibold md:text-xl'>
            About Me
            <span className='ml-4 h-px w-2/5 bg-gray-700 md:inline-block'></span>
          </h1>
          <p className='mb-4 text-sm leading-relaxed text-gray-400 md:text-base'>
            Hello! I’m <span className='text-blue'>Adnan</span>, a{' '}
            <span className='text-blue'>frontend developer</span> with{' '}
            <span className='text-blue'>3+ years of experience</span> building{' '}
            <span className='text-blue'>fast</span>,{' '}
            <span className='text-blue'>scalable</span>, and{' '}
            <span className='text-blue'>maintainable</span> web applications.
            I’m passionate about{' '}
            <span className='text-blue'>clean architecture</span>,{' '}
            <span className='text-blue'>performance optimization</span>, and
            crafting{' '}
            <span className='text-blue'>seamless user experiences</span>.
          </p>
          <p className='mb-8 text-sm leading-relaxed text-gray-400 md:text-base'>
            Outside of coding, I’m{' '}
            <span className='text-blue'>always learning</span> — whether it’s
            exploring <span className='text-blue'>modern UI/UX trends</span>,
            working on <span className='text-blue'>side projects</span>, or
            staying up to date with the latest in{' '}
            <span className='text-blue'>web development</span>,{' '}
            <span className='text-blue'>frontend tooling</span>, and the
            ever-evolving <span className='text-blue'>tech landscape</span>.
          </p>

          {/* Tech Stack */}
          <motion.div variants={containerVariants}>
            <h2 className='text-blue mb-4 flex items-center text-lg font-semibold md:text-xl'>
              Tech Stack
              <span className='ml-4 h-px w-2/5 bg-gray-700 md:inline-block'></span>
            </h2>
            <div className='flex flex-wrap gap-4 text-gray-300'>
              {TeckStack.map((item, index) => (
                <motion.span
                  key={index}
                  className='font-kode rounded-lg text-xs bg-[#112240] px-4 py-2'
                  variants={itemVariants}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social links and copyright */}
      <motion.div
        className='z-20 mt-8 flex w-full flex-col items-center justify-between gap-4 text-end sm:mt-0 sm:flex-row md:items-end md:gap-0'
        variants={textVariants}
      >
        <motion.nav aria-label='socials' className='flex gap-3'>
          {socials.map((social) => (
            <motion.button
              key={social.id}
              className='group relative'
              variants={buttonVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <a
                href={social.hrefUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='pt-1'
                aria-label={`Visit my ${social.Name} profile`}
              >
                <social.icon
                  className={`${social.style} size-8 rounded-lg p-1 text-gray-500 duration-500 hover:scale-105 hover:bg-white`}
                />
              </a>
              <span
                className={`${social.nameStyle} absolute -top-10 left-[50%] origin-bottom -translate-x-[50%] scale-0 rounded-lg bg-white p-2 text-xs font-bold shadow-md transition-all duration-300 ease-in-out group-hover:flex group-hover:scale-90`}
              >
                {social.Name}
              </span>
            </motion.button>
          ))}
        </motion.nav>
        <div className='font-kode text-[0.6rem] opacity-30'>
          <span>created by Adnan | copyright © 2025</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
