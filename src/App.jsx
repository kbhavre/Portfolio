import { motion } from "framer-motion"
import Hero from "./components/Hero"
import MenuBar from "./components/Menu"
import starImg from './assets/star.svg'

const App = () => {
  return (
    <div className="h-screen relative overflow-hidden w-full bg-primary lg:px-12 lg:py-8 md:px-6 md:py-4">
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
        className="absolute left-[-250px] top-[200px]  lg:left-[-250px] lg:bottom-[-250px] w-[600px] opacity-10 z-[1000]"
        src={starImg}
        alt="StarImage"
      /> 

    </div>
  )
}

export default App
