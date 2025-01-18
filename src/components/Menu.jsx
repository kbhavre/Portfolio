import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { smNavLinks, lgNavLinks } from "../constants/index";
import MenuForm from "./MenuForm"; 
import { smMenuVariants, menuVariants, containerVariants} from '../motion/index'
import MenuLogo from '../assets/menuLogo.svg'

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return (
    <div className="relative mb-2 md:mb-10">

      {/* Logo */}
      {!isHomeRoute && (
        <div className="absolute z-50">
          <Link to="/">
            <img src={MenuLogo} alt="MenuLogo" className="w-12 h-12 hidden md:block object-contain mx-4 my-2 lg:my-0 lg:mx-0"/>
            {/* <h4 className="text-2xl font-raleway font-medium  text-secondary underline">Home</h4> */}
          </Link>
        </div>
      )}

      {/* Menu Button */}
      <div className="lg:hidden flex items-center justify-end p-4">
        <button
          className="z-50 text-2xl font-raleway font-medium text-myBlack underline"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Large Screen */}
      <motion.nav
        className="hidden lg:flex justify-end gap-[90px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {lgNavLinks.map((link) => (
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
            className="z-40 lg:hidden fixed top-0 left-0 w-full min-h-screen bg-secondary flex flex-col items-end justify-end overflow-y-scroll gap-36 p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{type: "keyframes", stiffness: 80 }}
          >
            <div>
              {smNavLinks.map((link) => (
                <motion.div
                  key={link.id}
                  className="group text-right text-[48px] font-raleway leading-tight font-medium text-primary relative"
                  variants={smMenuVariants}
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

            <MenuForm />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBar;