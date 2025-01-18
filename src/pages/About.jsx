import { motion } from 'framer-motion'
import { pageVariants } from '../motion'
import { DrawCircle } from '../components/DrawCircle'

const About = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
     className='h-screen w-full flex flex-col items-center overflow-y-auto scrollbar-hide pt-4 pb-40 md:pb-36'>
      <p className="paraText">
      I am <DrawCircle text='Kunal Bhavare'/> a designer and Developer passionate about merging creativity with technolgy. Frustrated by seeing my designs lose their essence during development,  I masterd both the skills to ensure projects maintain visual integrity and functional excellence.
      <br />
      Beyond design and development, I am a dedicated problem solver, having tackled over 
      <span className='font-sans text-secondary'> 400 </span>
      problems on platforms like LeetCode, GeeksforGeeks, and Codestudio.
      </p>



      {/* Community Work Section */}
      <div className="flex flex-col items-center gap-2 mt-8">
      <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl ">Community Work</h1>
      <p className='paraText'>
      I am actively in several technical clubs at my college  <span className='text-secondary'>Mahakal Institute of Technology</span>. I have organized bootcamps, where I taught TypeScript and provided roadmaps on starting the coding journey. Guiding my peers and juniors, I helped them build a strong foundation in programming. 
      </p>
      </div> 

       {/* About Me Section */}
       <div className="flex flex-col items-center gap-2 mt-8">
      <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl ">About Me</h1>
      <p className='paraText'>
      Apart from my tech interests, I enjoy solving Rubik’s cubes, improving my typing speed, and listening to music, movies, and podcasts. I love diving into web series and engaging in discussions about history and politics, which always spark my curiosity.
      </p>
      </div> 
    </motion.div>
  )
}

export default About
