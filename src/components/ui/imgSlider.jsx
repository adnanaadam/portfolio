import SimpleImageSlider from "react-simple-image-slider";

const Showcase = ({ images }) => {

  return (
    <>
      <div
        className='border-4 relative border-blue h-[9em] w-1/2 md:w-[50%]'
      >
        <SimpleImageSlider
          width='100%'
          height='100%'
          images={images}
          showBullets={false}
          showNavs={false}
          autoPlay={true}
          autoPlayDelay={2}
        />
      </div>
    </>
  );
};

export default Showcase;
