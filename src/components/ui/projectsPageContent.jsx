import { useState, useRef, useEffect } from 'react';
import Showcase from './imgSlider';
import { motion, useScroll, useSpring } from 'framer-motion';
import AboutProjects from './aboutProject';

// animation variants
const slideVariants = {
  animation: {
    x: [0, -3, 0],
    y: [4, -4, 0],
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
  const slideRefs = useRef([]); // refs for each slide

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // handle smooth scrolling when clicking on a slide
  const handleSlideClick = (index) => {
    const selectedSlide = slideRefs.current[index];
    if (selectedSlide) {
      selectedSlide.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  // use intersectionObserver to detect when a slide comes into view
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
        threshold: 0.5, // trigger when 50% of the slide is visible
      }
    );

    // observe each slide
    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    // cleanup observer
    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, [currentIndex]);

  // scroll to the bottom on initial render, then scroll up to the first image
  useEffect(() => {
    if (scrollRef.current) {
      // scroll to the bottom immediately
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;

      // smoothly scroll to the first image after a short delay
      setTimeout(() => {
        if (slideRefs.current[0]) {
          slideRefs.current[0].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 500); // adjust the delay as needed
    }
  }, []);

  const getSlideStyle = (index) =>
    index === currentIndex ? 'scale-120 transition-all duration-500' : '';

  const currentPageContent = pageContent[currentIndex];

  return (
    <div className='h-screen w-screen'>
      {/* scroll progress bar */}
      <motion.div
        viewport={{ root: scrollRef }}
        style={{ scaleY }}
        className={`bg-blue fixed top-0 right-0 bottom-0 w-2 origin-top rounded`}
      />

      <div className='flex h-full w-full items-center justify-center'>
        <div className='flex h-full w-[45%] flex-col justify-between py-8 pt-32 pl-16'>
          <AboutProjects />
          <Showcase images={currentPageContent.images} />
        </div>

        {/* slides */}
        <div className='flex h-full w-[55%] items-center justify-between gap-8 pt-16 pr-16'>
          <div
            className='slide-cont no-scrollbar flex h-full w-full -skew-x-[10deg] snap-y flex-col items-center gap-4 overflow-x-hidden overflow-y-scroll px-4'
            aria-live='polite'
            aria-atomic='true'
            ref={scrollRef}
          >
            <div className='h-[70%] w-[90%] cursor-default text-transparent'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam
              at autem dolorum eligendi praesentium, deleniti similique illo
              molestiae vero eaque. Nostrum sapiente aliquam aut, impedit at
              autem dolorum eligendi praesentium, deleniti similique illo
              molestiae vero eaque. Nostrum sapiente aliquam aut, impedit
            </div>
            {pageContent.map((image, index) => (
              <motion.div
                key={index}
                data-index={index}
                ref={(el) => (slideRefs.current[index] = el)}
                onClick={() => handleSlideClick(index)}
                className={`slide relative h-[60%] w-[80%] cursor-pointer slide-${index} ${getSlideStyle(
                  index
                )}`}
              >
                {/* animation div and concave and convex shapes */}
                <motion.div
                  className={`absolute top-0 right-0 bottom-0 -left-5 m-auto h-[105%] w-[110%] ${index === currentIndex ? 'bg-transparent' : 'bg-darkBlue/60'}`}
                  variants={slideVariants}
                  animate='animation'
                >
                  <div className='bg-darkBlue absolute inset-y-0 right-0 w-9'></div>
                  <div className='bg-darkBlue absolute inset-y-0 left-0 w-8'></div>
                  {/* convex and concave shapes */}
                  <div className='top bg-darkBlue absolute top-0 -right-7 h-[20%] w-full'></div>
                  <div className='bottom bg-darkBlue absolute -right-7 bottom-0 h-[15%] w-full'></div>
                </motion.div>

                {/* Image */}
                <img
                  src={image.url}
                  alt={`Slide ${index}`}
                  loading='lazy'
                  className='h-full w-full object-cover'
                />
              </motion.div>
            ))}

            <div className='h-[70%] w-[90%] cursor-default text-transparent'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam
              at autem dolorum eligendi praesentium, deleniti similique illo
              molestiae vero eaque. Nostrum sapiente aliquam aut, impedit
            </div>
          </div>

          {/* side dots with menu */}
          <div className='group relative flex cursor-pointer flex-col'>
            {pageContent.map((_, index) => (
              <span
                key={index}
                className={`mx-1 my-2 rounded-full ${
                  currentIndex === index
                    ? 'bg-blue h-6 w-3 origin-center transition-all duration-700'
                    : 'border-blue h-3 w-3 border-2'
                }`}
                onClick={() => handleSlideClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
            <div
              className={`bg-darkBlue absolute top-0 right-0 flex w-[10rem] origin-right scale-0 flex-col rounded-lg p-2 text-sm shadow-md transition-all duration-300 ease-in-out group-hover:scale-100`}
            >
              {pageContent.map((pageContent, index) => (
                <p
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className='hover:text-blue py-1'
                >
                  {pageContent.title}
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