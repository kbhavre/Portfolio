import { Link } from "react-router-dom";
import { DrawCircle } from "./DrawCircle";
import { motion } from "framer-motion";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import HeroImg from '../assets/heroImage.jpg'

const Hero = () => {
  return (
    <div className="relative lg:py-8 flex flex-col md:flex-row justify-evenly">
      {/* Left part (Content) */}
      <div className="lg:w-[60%] flex flex-col gap-20 lg:gap-32 relative z-10 px-4 md:px-0">
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
        <div className="flex justify-start gap-24">
          <div className="flex flex-col items-center gap-4">
            <h6 className="formText leading-none text-myGrey">Featured Works</h6>
            <motion.div
              animate={{ rotate: [-360, 360] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              <IoArrowForwardCircleOutline className="h-10 w-10 text-myBlack" />
            </motion.div>
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
      <div>
      <img 
      className=" border-4 mt-4 lg:mt-0 border-secondary mx-auto w-[350px] lg:h-[650px] lg:w-[540px]"
      src={HeroImg} 
      alt="HeroImage"
       />
      </div>
      
      
      
    </div>
  );
};

export default Hero;