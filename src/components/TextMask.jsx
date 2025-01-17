import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { animation } from "../motion";

export default function TextMask({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  // Ensure `children` is an array
  const phrases = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}

TextMask.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
};