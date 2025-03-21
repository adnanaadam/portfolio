import { useState, useEffect } from "react";

const Background = ({bgImg, bgStyle}) => {
  const [currentBgImg, setCurrentBgImg] = useState(bgImg);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (bgImg !== currentBgImg) {
      setTransitioning(true);

      const timeout = setTimeout(() => {
        setCurrentBgImg(bgImg);
        setTransitioning(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [bgImg, currentBgImg]);

  return (
    <>
    <div className="relative bg-cover w-full h-[70%] flex items-center">
      <div
        className={`${bgImg} ${bgStyle} relative bg-no-repeat w-full h-[90%] ${
          transitioning
            ? "opacity-0 -translate-y-4 duration-0"
            : "opacity-100 translate-y-0 duration-500"
        }`}
      >
        <div className="w-full h-[40%] absolute bottom-0 bg-gradient-to-t from-darkBlue/100 to-grey/0"></div>
      </div>
    </div>
      
    </>
  );
};

export default Background;
