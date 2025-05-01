import { useState, useRef, useEffect } from 'react';
import Showcase from './imgSlider';
import { motion, useScroll, useSpring  } from 'framer-motion';
import AboutProjects from './aboutProject';

// animation variants
const slideVariants = {
  animation: {
    x: [0, -3, 0],
    y: [2, -4, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 4,
        ease: 'easeInOut',
      },
      y: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 4,
        ease: 'easeInOut',
      },
    },
  },
};

const PageContent = ({ pageContent }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const slideRefs = useRef([]);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth scroll to center a slide, and immediately set active index
  const handleSlideClick = (index) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[index];

    if (container && slide) {
      const containerHeight = container.clientHeight;
      const slideTop = slide.offsetTop;
      const slideHeight = slide.clientHeight;

      const scrollTo = slideTop - (containerHeight / 2) + (slideHeight / 2);

      container.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });

      setCurrentIndex(index);
    }
  };

  // Observe which slide is in view while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.5,
        rootMargin: '0px',
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  // Scroll to the first slide when component mounts
  useEffect(() => {
    if (scrollRef.current && slideRefs.current[0]) {
      setTimeout(() => {
        handleSlideClick(0);
      }, 50);
    }
  }, []);

  // Get style for each slide based on its active state
  const getSlideStyle = (index) => {
    const baseStyle = 'transition-all duration-500 ease-in-out';
    return index === currentIndex
      ? `${baseStyle} scale-110 z-10`
      : `${baseStyle} scale-90 opacity-80`;
  };

  const currentPageContent = pageContent[currentIndex];

  return (
    <div className='h-screen w-screen overflow-hidden'>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleY }}
        className='bg-blue fixed top-0 right-0 bottom-0 w-2 origin-top rounded'
      />

      <div className='flex h-full w-full items-center justify-between'>
        {/* Left side panel */}
        <motion.div
          className='flex h-full w-[40%] flex-col justify-between py-8 pt-32 pl-16'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <AboutProjects />
          <Showcase images={currentPageContent.images} />
        </motion.div>

        {/* Slides container */}
        <div className='flex h-full w-[55%] items-center justify-between gap-8 pt-16 pr-16'>
          <div
            ref={scrollRef}
            className='no-scrollbar flex h-full w-full -skew-x-[10deg] snap-y snap-mandatory flex-col items-center gap-4 overflow-x-hidden overflow-y-scroll px-4'
            aria-live='polite'
            aria-atomic='true'
          >
            {/* Top spacer */}
            <div className='h-[30vh] w-full flex-shrink-0' />

            {/* Slides */}
            {pageContent.map((image, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (slideRefs.current[index] = el)}
                onClick={() => handleSlideClick(index)}
                className={`relative slide h-[58vh] w-[80%] flex-shrink-0 cursor-pointer ${getSlideStyle(index)}`}
              >
                <motion.div
                  className={`absolute overflow-hidden top-0 right-0 bottom-0 -left-5 m-auto h-[105%] w-[110%] ${
                    index === currentIndex ? 'bg-transparent' : 'bg-darkBlue/60'
                  }`}
                  variants={slideVariants}
                  animate='animation'
                >
                  <div className='bg-darkBlue absolute inset-y-0 right-0 w-9'></div>
                  <div className='bg-darkBlue absolute inset-y-0 left-0 w-8'></div>
                  <div className='top bg-darkBlue absolute top-1 -right-7 h-[20%] w-full'></div>
                  <div className='bottom bg-darkBlue absolute -right-7 bottom-0 h-[15%] w-full'></div>
                </motion.div>

                <img
                  src={image.url}
                  alt={`Slide ${index}`}
                  loading='lazy'
                  className='h-full w-full object-cover object-center'
                />
              </div>
            ))}

            {/* Bottom spacer */}
            <div className='h-[30vh] w-full flex-shrink-0' />
          </div>

          {/* Side dots & menu */}
          <div className='group relative flex cursor-pointer flex-col'>
            {pageContent.map((_, index) => (
              <span
                key={index}
                className={`mx-1 my-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-blue h-6 w-3'
                    : 'border-blue h-3 w-3 border-2'
                }`}
                onClick={() => handleSlideClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}

            <div className='bg-darkBlue absolute top-0 right-0 flex w-[10rem] origin-right scale-0 flex-col rounded-lg p-2 text-sm shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>
              {pageContent.map((page, index) => (
                <p
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`py-1 ${
                    currentIndex === index ? 'text-blue' : 'hover:text-blue'
                  }`}
                >
                  {page.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
