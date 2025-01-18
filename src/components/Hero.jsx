import { Link } from "react-router-dom";
import { DrawCircle } from "./DrawCircle";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import HeroImage from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className="h-screen relative  lg:pb-32  flex flex-col lg:flex-row justify-evenly ">
      {/* Left part (Content) */}
      <div className="lg:w-[60%] flex flex-col gap-16 lg:justify-between  relative z-10 px-4 md:px-0">
        {/* Main Heading */}
        <h1 className="font-kyiv font-normal text-5xl lg:text-8xl tracking-tight text-secondary ml-3 md:ml-0">
          <span className="text-myBlack tracking-tighter ml-[-11px]">B.</span>
          Kunal
        </h1>

        {/* Paragraph */}
        <div className="flex justify-center -mt-10 lg:mt-0">
          <p className="inline-block text-justify text-[16px] md:text-2xl font-raleway font-medium w-[80%] lg:w-[50%] leading-tight tracking-tight">
            I’m a creative designer and <DrawCircle text="Frontend Developer" />
            , specializing in intuitive interfaces, seamless experiences, and
            visually engaging web solutions.
          </p>
        </div>

        {/* Featured Works */}
        <div className="flex justify-between ">
          <div className="flex flex-col md:items-center gap-4">
            <h6 className="text-[12px] md:text-sm formText leading-none text-myGrey">
              Featured Works
            </h6>
            <Link to="/work">
            <IoArrowForwardCircleOutline className="h-12 w-12 mt-1 text-myBlack transition-transform duration-300 ease-in-out transform hover:-rotate-45 z-[1000]" />
            </Link>
          </div>

          <h6 className="formText text-myGrey font-sans font-normal tracking-tight hidden md:block">
            © 2025
          </h6>

          <div className="flex flex-col gap-2 md:gap-5 text-[12px] md:text-sm formText underline text-myBlack font-semibold pr-0 md:pr-8">
            <a href="mailto:kbhavare78@gmail.com" target="_blank">kbhavare78@gmail.com</a>

            <div className="flex flex-col ">
              <Link target="_blank" to="https://www.instagram.com/kbhaavre/">Instagram</Link>
              <Link target="_blank" to="https://www.linkedin.com/in/kunal-bhavare-467863228/">LinkedIn</Link>
              <Link target="_blank" to="https://github.com/kbhavre">Github</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Part (Image) */}
      <img
        className="w-[90%] sm:my-0 sm:w-[350px] lg:w-[540px]  lg:h-[100%] mx-auto lg:mx-0 order-first lg:order-last object-cover object-center rounded-lg -my-20"
        src={HeroImage}
        alt="HeroImage"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
