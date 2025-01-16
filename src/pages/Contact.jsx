import { motion } from 'framer-motion'
import { pageVariants } from '../motion'

const Contact = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
     className='h-screen w-full flex justify-center items-center bg-yellow-500  '>
    <h1 className="text-center text-secondary text-8xl font-kyiv font-bold">Contact</h1>
      
  </motion.div>
  )
}

export default Contact
