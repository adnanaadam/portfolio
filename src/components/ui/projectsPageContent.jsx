import { useState, useRef, useEffect } from 'react';
import Showcase from './imgSlider';
import { useScroll, useSpring } from 'framer-motion';
import AboutProjects from './aboutProject';
import { motion } from 'motion/react';

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

// const slideContVariants = {
//   hidden: { y: 100, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: 'spring', stiffness: 100, damping: 20, delay: 0.5 },
//   },
// };

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

  const handleSlideClick = (index) => {
    const container = scrollRef.current;
    const slide = slideRefs.current[index];

    if (container && slide) {
      const containerHeight = container.clientHeight;
      const containerWidth = container.clientWidth;
      const slideTop = slide.offsetTop;
      const slideLeft = slide.offsetLeft;
      const slideHeight = slide.clientHeight;
      const slideWidth = slide.clientWidth;

      const isMobile = window.innerWidth < 768;

      const scrollTo = isMobile
        ? slideLeft - containerWidth / 2 + slideWidth / 2
        : slideTop - containerHeight / 2 + slideHeight / 2;

      container.scrollTo({
        [isMobile ? 'left' : 'top']: scrollTo,
        behavior: 'smooth',
      });

      setCurrentIndex(index);
    }
  };

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current && slideRefs.current[0]) {
      setTimeout(() => {
        handleSlideClick(0);
      }, 50);
    }
  }, []);

  const getSlideStyle = (index) => {
    const baseStyle = 'transition-all duration-500 ease-in-out';
    return index === currentIndex
      ? `${baseStyle} scale-110 z-10`
      : `${baseStyle} scale-80 md:scale-90 opacity-80`;
  };

  const currentPageContent = pageContent[currentIndex];

  return (
    <div className='mt-16 w-screen overflow-hidden md:mt-0 md:h-screen'>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleY }}
        className='bg-blue fixed top-0 right-0 bottom-0 hidden w-2 origin-top rounded md:block'
      />

      <div className='flex w-full flex-col-reverse items-center justify-between md:h-full md:flex-row'>
        {/* Left side panel */}
        <div
          className='flex h-auto w-full flex-col justify-between gap-6 px-6 py-8 md:h-full md:w-[40%] md:pt-32 md:pl-16'
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <AboutProjects project={currentPageContent} />
          </motion.div>

          <motion.div
            key={`showcase-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Showcase images={currentPageContent.images} />
          </motion.div>
        </div>

        {/* Slides container */}
        <div className='flex w-full flex-col-reverse items-center justify-between gap-8 pt-8 md:h-full md:w-[55%] md:flex-row md:px-6 md:pt-16 md:pr-16'>
          <div
            ref={scrollRef}
            className='no-scrollbar flex w-full snap-y snap-mandatory flex-row items-center gap-4 overflow-x-scroll overflow-y-hidden md:h-full md:-skew-x-[10deg] md:flex-col md:overflow-x-hidden md:overflow-y-scroll'
            aria-live='polite'
            aria-atomic='true'
          >
            {/* Spacer */}
            <div className='h-[20vh] w-[40%] md:w-[80%] flex-shrink-0 md:h-[30vh]' />

            {pageContent.map((image, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (slideRefs.current[index] = el)}
                onClick={() => handleSlideClick(index)}
                className={`slide relative h-[30vh] w-[60%] flex-shrink-0 snap-center cursor-pointer md:h-[58vh] md:w-[80%] ${getSlideStyle(index)}`}
              >
                <motion.div
                  className={`absolute top-0 right-0 bottom-0 -left-5 m-auto hidden h-[105%] w-[110%] overflow-hidden md:block ${
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

            {/* Spacer */}
            <div className='h-[20vh] w-[40%] md:w-[80%] flex-shrink-0 md:h-[30vh]' />
          </div>

          {/* Side dots & menu */}
          <div className='group relative flex cursor-pointer md:flex-col'>
            {pageContent.map((_, index) => (
              <motion.span
                key={index}
                onClick={() => handleSlideClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`mx-1 my-2 rounded-full ${
                  currentIndex === index
                    ? 'bg-blue h-3 w-6 md:h-6 md:w-3'
                    : 'border-blue h-3 w-3 border-2'
                }`}
                animate={{
                  scale: currentIndex === index ? 1.3 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              />
            ))}

            <div className='bg-darkBlue absolute top-0 right-0 hidden w-[10rem] origin-right scale-0 flex-col rounded-lg p-2 text-sm shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 md:flex'>
              {pageContent.map((page, index) => (
                <p
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`py-1 ${
                    currentIndex === index ? 'text-blue' : 'text-gray-300'
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
