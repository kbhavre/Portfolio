import { motion, useMotionValue, useSpring } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const WorkCard = ({ title, img, tech, linkref }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

  const [isPointerVisible, setIsPointerVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  return (
    <a
      href={linkref}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsPointerVisible(true);
          setIsHovered(true); 
        }}
        onMouseLeave={() => {
          setIsPointerVisible(false);
          setIsHovered(false); 
        }}
        className="flex flex-col border border-secondary rounded-lg p-3 gap-4 relative overflow-hidden"
      >
        {/* Box */}
        <motion.div
          animate={{
            height: isHovered ? "100%" : "3.5rem", 
            width: isHovered ? "100%" : "3.5rem", 
          }}
          transition={{ duration: 0.35, ease: "easeOut" }} 
          className={`absolute bottom-0 right-0 bg-secondary opacity-40 ${
            isHovered ? "" : "rounded-tl-full"
          } rounded-md`}
        ></motion.div>

        {/* Pointer */}
        {isPointerVisible && (
          <motion.div
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            className="absolute z-20 h-14 w-14 md:h-20 md:w-20 rounded-full bg-secondary pointer-events-none flex items-center justify-center text-myBlack text-[12px] md:text-lg font-raleway font-light"
          >
            Click Me
          </motion.div>
        )}

        {/* Image Section */}
        <img
          src={img}
          className="object-cover h-4/5 rounded-lg z-10"
          alt={title}
        />

        <div className="flex flex-col gap-2 z-10">
          {/* Title */}
          <h1 className="font-kyiv font-semibold text-myBlack text-2xl md:text-5xl tracking-wider leading-none z-10">
            {title}
          </h1>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <h4
                key={index}
                className="border border-myBlack font-raleway px-3 rounded-xl"
              >
                {techItem}
              </h4>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkref: PropTypes.string.isRequired,
};

export default WorkCard;


