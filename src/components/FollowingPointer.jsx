// src/components/FollowPointer.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const FollowingPointer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 60 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 60 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 h-3 w-3 md:w-4 md:h-4 bg-black rounded-full pointer-events-none z-50"
    ></motion.div>
  );
};

export default FollowingPointer;