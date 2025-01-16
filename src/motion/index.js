export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

// Menu variants
export const smMenuVariants = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 90,
    },
  },
};

export const menuVariants = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      damping: 14,
      stiffness: 90,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1.58,
      delayChildren: 1,
    },
  },
};

export const clipPathVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      type: "spring",
      damping: 14,
      stiffness: 90,
    },
  },
};

// Sepereate page variants
export const pageVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
    },
  },
};
