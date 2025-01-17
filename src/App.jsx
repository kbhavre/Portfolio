// src/App.jsx
import MenuBar from "./components/Menu";
import AppRoutes from "./routes/AppRoutes";
import starImg from "./assets/star.svg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FollowingPointer from './components/FollowingPointer';
import PreLoad from './components/PreLoad';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden w-full bg-primary lg:px-12 lg:py-8 md:px-6 md:py-4">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoad/>}
      </AnimatePresence>

      {!isLoading && (
        <>

          {/* Following Pointer */}
          <FollowingPointer/>
          
          

          <MenuBar /> 
          <AppRoutes /> 
          <motion.img
              animate={{ rotate: [-360, 360] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }}
              className="absolute left-[-250px] bottom-[80px] lg:left-[-250px] lg:bottom-[-250px] w-[600px] opacity-10 z-[0] pointer-events-none"
              src={starImg}
              alt="StarImage"
            />
          
        </>
      )}
    </div>
  );
};

export default App;