import { Link } from "react-router-dom";
import { DrawCircle } from "./DrawCircle";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import HeroImage from '../assets/heroImage.jpg'

const Hero = () => {
  return (
    <div className="h-screen relative lg:pb-20 lg:pt-6 flex flex-col lg:flex-row justify-evenly ">

      {/* Left part (Content) */}
      <div className="lg:w-[60%] flex flex-col gap-32 lg:justify-between  relative z-10 px-4 md:px-0">
        {/* Main Heading */}
        <h1 className="font-kyiv font-normal text-6xl lg:text-8xl tracking-tight text-secondary">
          <span className="text-myBlack tracking-tighter ml-[-11px]">B.</span>
          Kunal
        </h1>

        {/* Paragraph */}
        <div className="flex justify-center -mt-10 lg:mt-0">
          <p className="inline-block text-justify text-lg md:text-2xl font-raleway font-medium w-[80%] lg:w-[50%] leading-tight tracking-tight">
            I’m a creative designer and <DrawCircle text="Frontend Developer" />
            , specializing in intuitive interfaces, seamless experiences, and
            visually engaging web solutions.
          </p>
        </div>

        {/* Featured Works */}
        <div className="flex justify-start gap-24 ">
          <div className="flex flex-col items-center gap-4">
            <h6 className="formText leading-none text-myGrey">Featured Works</h6>

            {/* <motion.div
              animate={{ rotate: [-360, 360] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <IoArrowForwardCircleOutline className="h-10 w-10 text-myBlack" />
            </motion.div> */}

            <button className="z">
            <IoArrowForwardCircleOutline
      className="h-12 w-12 mt-1 text-myBlack transition-transform duration-300 ease-in-out transform hover:rotate-45 z-[1000]"
    />
            </button>
            
          </div>

          <h6 className="formText text-myGrey font-sans font-normal tracking-tight hidden lg:block">
            © 2025
          </h6>

          <div className="flex flex-col gap-5 formText underline text-myBlack font-semibold">
            <h4>kbhavare78@gmail.com</h4>

            <div className="flex flex-col ">
              <Link to="https://www.instagram.com/kbhaavre/">Instagram</Link>
              <Link to="https://www.instagram.com/kbhaavre/">LinkedIn</Link>
              <Link to="https://www.instagram.com/kbhaavre/">Github</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Part (Image) */}
      <img
  className="w-[90%] -my-20 sm:my-0 sm:w-[350px] lg:w-[540px]  lg:h-[100%] mx-auto lg:mx-0 order-first lg:order-last object-cover object-center"
  src={HeroImage}
  alt="HeroImage"
  loading="lazy"
/>
    </div>

  );
};

export default Hero;