
import { motion } from 'framer-motion';
import ClipPath from '../components/ClipPath';

const Skills = () => {
  return (
    <motion.div
      initial={{ y: '-100vh' }} // Start off-screen to the left
      animate={{ y: 0 }}       // End at the final position
      transition={{
        type: 'spring', // Use spring animation
        stiffness: 80, // Higher stiffness means faster motion
        damping: 14,
      }}
     className='py-6 px-4 md:px-0'>
        <ClipPath/>
    </motion.div>
  )
}

export default Skills
