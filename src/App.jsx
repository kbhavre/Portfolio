import { AnimatePresence, motion } from "framer-motion"
import Hero from "./components/Hero"
import MenuBar from "./components/Menu"
import starImg from './assets/star.svg'
import { useEffect, useState } from "react"
import Lenis from "@studio-freight/lenis/types"
import PreLoad from "./components/Preload"

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const lenis = new Lenis();

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    const timeout = setTimeout(()=>{
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return ()=> clearTimeout(timeout);
  }, [])


  return (
    <div className="h-screen relative overflow-hidden w-full bg-primary lg:px-12 lg:py-8 md:px-6 md:py-4">

      <AnimatePresence mode="wait">
        {isLoading && <PreLoad/> }
      </AnimatePresence>

      {!isLoading && (
        <>
        {/* <PreLoad/>   */}
        <MenuBar/>
      <Hero/>


      <motion.img
        animate={{ rotate: [-360, 360] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        }}
        className="absolute left-[-250px] bottom-[80px]  lg:left-[-250px] lg:bottom-[-250px] w-[600px] opacity-10 z-[1000]"
        src={starImg}
        alt="StarImage"
      /> 
        </>
      )}

      

    </div>
  )
}

export default App
