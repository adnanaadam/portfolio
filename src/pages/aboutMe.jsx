import React from 'react';
import { motion } from 'framer-motion';
import myImage from '/man.png';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaDiscord
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
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'NodeJS',
  'MongoDB',
  'ExpressJS',
];

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const buttonVariants = {
  hover: { scale: 1.08 },
  tap: { scale: 0.9 },
  transition: { type: 'spring', duration: 0.3, stiffness: 500, damping: 17 },
};

const AboutMe = () => {
  return (
    <div className='flex md:h-screen w-full flex-col items-start justify-between px-4 pt-28 pb-4 text-white md:px-16'>
      <div className='flex flex-col items-center gap-12 md:flex-row'>
        {/* Image Wrapper */}
        <div className='relative flex-shrink-0'>
          {/* Background Layer */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='border-blue absolute -top-2 -left-2 h-80 w-72 rounded-2xl border-2 bg-[#112240]'
          ></motion.div>

          {/* Foreground Image */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
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
        <div className='max-w-2xl'>
          <h1 className='text-blue mb-4 text-2xl font-bold'>About Me</h1>
          <p className='mb-4 leading-relaxed text-gray-400'>
            Hello! I’m Adnan, a frontend developer passionate about crafting
            intuitive, user-friendly digital experiences. I love transforming
            ideas into beautiful, responsive, and performant web apps.
          </p>
          <p className='mb-8 leading-relaxed text-gray-400'>
            When I'm not coding, you’ll find me exploring UI/UX trends, working
            on personal projects, or reading about design systems and new web
            technologies.
          </p>

          {/* Tech Stack */}
          <div>
            <h2 className='text-blue mb-4 text-xl font-semibold'>Tech Stack</h2>
            <div className='flex flex-wrap gap-4 text-sm text-gray-300'>
              {TeckStack.map((item, index) => (
                <span key={index} className='font-kode rounded-lg bg-[#112240] px-4 py-2'>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social links and copyright */}
      <motion.div
        className='z-20 mt-8 flex w-full flex-col items-center justify-between gap-4 text-end sm:mt-0 sm:flex-row md:items-end md:gap-0'
        variants={textVariants}
      >
        {/* Social links */}
        <motion.nav
          aria-label='socials'
          className='flex gap-3'
          variants={textVariants}
        >
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
    </div>
  );
};

export default AboutMe;
