import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/index";
import MenuForm from "./MenuForm"; // Import MenuForm

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <div className="lg:hidden flex items-center justify-end p-4">
        <button
          className="z-10 text-2xl font-raleway font-medium text-myBlack underline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Large Screen */}
      <motion.nav
        className="hidden lg:flex justify-end gap-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.id}
            className="group relative flex justify-end items-center text-2xl font-raleway font-medium text-myBlack"
            variants={menuVariants}
          >
            <Link to={link.href} className="relative z-10">
              {link.title}
            </Link>

            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-myBlack transition-all duration-300 group-hover:w-full"></span>
          </motion.div>
        ))}
      </motion.nav>

      {/* Small Screens */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-screen bg-secondary flex flex-col items-end justify-end gap-36 p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "keyframes", stiffness: 80 }}
          >
            <div>
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  className="group text-right text-[48px] font-raleway leading-tight font-medium text-primary relative"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="relative z-10"
                  >
                    {link.title}
                  </Link>

                  <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              ))}
            </div>

            {/* MenuForm Component */}
            <MenuForm />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBar;