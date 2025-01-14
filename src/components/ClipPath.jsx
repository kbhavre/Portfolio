import { useState } from "react";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiFigma,
  SiExpress,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useAnimate, motion } from "framer-motion";
import PropTypes from "prop-types";

export const ClipPath = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiCplusplus} name="C++" href="#" />
        <LinkBox Icon={SiPython} name="Python" href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiJavascript} name="JavaScript" href="#" />
        <LinkBox Icon={SiReact} name="React" href="#" />
        <LinkBox Icon={SiTailwindcss} name="TailwindCSS" href="#" />
        <LinkBox Icon={SiTypescript} name="TypeScript" href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-900">
        <LinkBox Icon={SiNumpy} name="NumPy" href="#" />
        <LinkBox Icon={SiPandas} name="Pandas" href="#" />
        <LinkBox Icon={SiScikitlearn} name="Scikit-learn" href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiNodedotjs} name="Node.js" href="#" />
        <LinkBox Icon={SiExpress} name="Express" href="#" />
        <LinkBox Icon={SiMongodb} name="MongoDB" href="#" />
        <LinkBox Icon={SiMysql} name="MySQL" href="#" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiFigma} name="Figma" href="#" />
        <LinkBox Icon={TbBrandFramerMotion} name="Framer Motion" href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";

const ENTRANCE_KEYFRAMES = [BOTTOM_RIGHT_CLIP, NO_CLIP];
const EXIT_KEYFRAMES = [NO_CLIP, BOTTOM_RIGHT_CLIP];

export const LinkBox = ({ Icon, name, href }) => {
  const [scope, animate] = useAnimate();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>

      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ ease: "easeInOut"}}
          className="absolute bottom-2 formText text-center mx-auto w-full"
        >
          {name}
        </motion.span>
      )}
    </a>
  );
};

LinkBox.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ClipPath;