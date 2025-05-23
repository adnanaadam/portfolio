import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', delay: 0.2, stiffness: 120 },
  },
};

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
  exit: { x: '100%', opacity: 0, transition: { ease: 'easeInOut' } },
};

const buttonVariants = {
  hover: { scale: 1.08 },
  tap: { scale: 0.9 },
};

// Navigation links
const navLinks = [
  { name: 'About', path: '/aboutme' },
  { name: 'Eperience', path: '/experience' },
  { name: 'Works', path: '/webprojects' },
  { name: 'Contact', path: 'mailto:addy@example.com', external: true },
];

// Active link style
const activeLink = 'text-blue';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className='bg-darkBlue shadow-blue/20 fixed top-0 z-50 flex w-full items-center justify-between px-4 py-5 uppercase shadow-2xl sm:px-8 md:px-16'
      variants={headerVariants}
      initial='hidden'
      animate='visible'
    >
      {/* Logo */}
      <div>
        <span className='font-logoFont text-blue text-2xl font-bold tracking-widest'>
          <Link to='/' className='uppercase'>
            Addy
          </Link>
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className='font-kode hidden items-center justify-end md:flex'>
        <nav className='flex items-center justify-center gap-3'>
          <div className='flex justify-center text-sm *:mx-4'>
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={buttonVariants} whileTap='tap'>
                {link.external ? (
                  <a
                    href={link.path}
                    className='hover:text-blue/50 transition-all duration-500'
                  >
                    <span className='text-blue mr-1'>0{index + 1}.</span>
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? activeLink
                        : 'hover:text-blue/50 transition-all duration-500'
                    }
                    aria-current={({ isActive }) =>
                      isActive ? 'page' : undefined
                    }
                  >
                    <span className='text-blue mr-1'>0{index + 1}.</span>
                    <span>{link.name}</span>
                  </NavLink>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={buttonVariants} whileTap='tap'>
            <a
              href='/Adams-Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue flex cursor-pointer items-center justify-center'
            >
              <div className='border-blue group relative inline-flex items-center justify-start overflow-hidden rounded-md border py-2 pr-12 pl-4 font-semibold shadow transition-all duration-150 ease-in-out hover:pr-6 hover:pl-10'>
                <span className='bg-blue absolute bottom-0 left-0 h-1 w-full transition-all duration-150 ease-in-out group-hover:h-full'></span>
                <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
                  <Download className='size-4' />
                </span>
                <span className='absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0'>
                  <Download className='text-darkBlue size-4' />
                </span>
                <span className='group-hover:text-darkBlue relative w-full text-left text-sm transition-colors duration-200 ease-in-out'>
                  Resume
                </span>
              </div>
            </a>
          </motion.div>
        </nav>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className='text-blue cursor-pointer md:hidden'
        onClick={toggleMobileMenu}
        aria-label='Toggle mobile menu'
      >
        {isMobileMenuOpen ? (
          <X className='size-8' />
        ) : (
          <Menu className='size-8' />
        )}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Blurred Overlay */}
            <motion.div
              className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              className='bg-darkBlue font-kode fixed top-0 right-0 z-50 h-screen w-3/4 max-w-sm space-y-16 p-6'
              variants={mobileMenuVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <div className='flex w-full justify-end'>
                <button
                  className='text-blue cursor-pointer'
                  onClick={toggleMobileMenu}
                  aria-label='Toggle mobile menu'
                >
                  {isMobileMenuOpen ? (
                    <X className='size-8' />
                  ) : (
                    <Menu className='size-8' />
                  )}
                </button>
              </div>
              <nav className='flex flex-col items-center justify-center gap-6'>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={buttonVariants}
                    whileTap='tap'
                  >
                    {link.external ? (
                      <a
                        href={link.path}
                        className='hover:text-blue/50 transition-all duration-500'
                      >
                        <span className='text-blue mr-1'>0{index + 1}.</span>
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          isActive
                            ? activeLink
                            : 'hover:text-blue/50 transition-all duration-500'
                        }
                        aria-current={({ isActive }) =>
                          isActive ? 'page' : undefined
                        }
                        onClick={toggleMobileMenu}
                      >
                        <span className='text-blue mr-1'>0{index + 1}.</span>
                        <span>{link.name}</span>
                      </NavLink>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                variants={buttonVariants}
                whileTap='tap'
                className='mt-6'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue flex cursor-pointer items-center justify-center'
                  onClick={toggleMobileMenu}
                  href='/Adams-Reusme.pdf'
                >
                  <div className='border-blue group relative inline-flex items-center justify-start overflow-hidden rounded-md border py-2 pr-12 pl-4 font-semibold shadow transition-all duration-150 ease-in-out hover:pr-6 hover:pl-10'>
                    <span className='bg-blue absolute bottom-0 left-0 h-1 w-full transition-all duration-150 ease-in-out group-hover:h-full'></span>
                    <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
                      <Download className='size-4' />
                    </span>
                    <span className='absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0'>
                      <Download className='text-darkBlue size-4' />
                    </span>
                    <span className='group-hover:text-darkBlue relative w-full text-left text-sm transition-colors duration-200 ease-in-out'>
                      Resume
                    </span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
