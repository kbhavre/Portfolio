// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Work from '../pages/Work'
import Contact from '../pages/Contact'



const AppRoutes = () => {
    return (
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-screen"
                >
                  <Hero />
                </motion.div>
          }
        />
        {/* <Route path="/" element={<Hero/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;