import { Link } from 'react-router';
import DateTime from '@/components/ui/dateTime';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger animations for children
    },
  },
};

const mailVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
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

const dateTimeVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
  },
};

const buttonVariants = {
  hover: { scale: 1.08 },
  tap: { scale: 0.9 },
  transition: { type: 'spring', duration: 0.3, stiffness: 500, damping: 17 },
};

const Home = () => {
  return (
    <motion.main
      className='from-blue/50 via-darkBlue/90 to-darkBlue relative flex w-screen flex-col items-center justify-between gap-8 overflow-hidden bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] px-4 md:pt-32 pt-20 pb-12 sm:px-8 md:h-screen md:px-16 lg:pl-36'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
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

      {/* Web developer section */}
      <motion.div
        className='flex w-full flex-col-reverse items-start gap-16 md:flex-row lg:justify-between'
        variants={containerVariants}
      >
        <motion.div
          className='flex w-full flex-col items-start gap-6 lg:w-[70%]'
          variants={textVariants}
        >
          <div className='flex flex-col gap-3 sm:gap-6'>
            <p className='text-blue font-kode text-sm'>Hi, my name is,</p>
            <h3 className='text-4xl font-semibold sm:text-6xl md:text-7xl'>
              Adnan Adam.
            </h3>
            <div className='bg-gradient-to-r from-gray-300 from-10% to-gray-500 to-60% bg-clip-text text-xl font-semibold text-transparent uppercase sm:text-2xl'>
              <span>frontend Enigineer</span> <br />
              <span className='text-[crimson]'>+</span>
              <span>designer </span>
              <span className='text-[crimson]'>+</span>
              <span>code-kage</span>
            </div>
            <p className='w-full text-sm text-gray-300 md:w-[70%]'>
              I craft intuitive,{' '}
              <span className='text-blue'>user-friendly </span>experiences and{' '}
              <span className='text-blue'>striking designs </span>
              that leave a lasting impression. Explore my work to discover the
              depth of my{' '}
              <span className='text-blue'>
                technical expertise, creative instincts, and passion{' '}
              </span>
              for building{' '}
              <span className='text-blue'>digital experiences </span> that{' '}
              <span className='text-blue'>truly connect</span>.
            </p>
          </div>

          <motion.div
            className='flex items-center'
            variants={buttonVariants}
            whileTap='tap'
          >
            <Link
              to='/webprojects'
              className='text-blue border-blue group relative cursor-pointer overflow-hidden rounded-md border px-4 py-2 text-center text-base font-semibold'
            >
              <span className='group-hover:text-darkBlue font-kode mr-2'>
                Explore!
              </span>
              <ArrowRight className='text-blue group-hover:text-darkBlue inline size-5 transition-transform duration-500 group-hover:translate-x-2' />
              <span className='absolute -top-8 -left-2 -z-10 h-32 w-36 origin-left scale-x-0 rotate-12 transform bg-white transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500'></span>
              <span className='bg-grey absolute -top-8 -left-2 -z-10 h-32 w-36 origin-left scale-x-0 rotate-12 transform transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700'></span>
              <span className='bg-blue absolute -top-8 -left-2 -z-10 h-32 w-36 origin-left scale-x-0 rotate-12 transform transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000'></span>
            </Link>
          </motion.div>
        </motion.div>

        {/* DateTime */}
        <motion.div className='' variants={dateTimeVariants}>
          <DateTime />
        </motion.div>
      </motion.div>

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

      {/* Bottom gradient */}
      <div className='from-darkBlue to-blue/0 absolute bottom-0 z-10 h-1/5 w-full bg-gradient-to-t'></div>
    </motion.main>
  );
};

export default Home;
