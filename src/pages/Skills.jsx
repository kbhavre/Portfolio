
import { motion } from 'framer-motion';
import ClipPath from '../components/ClipPath';
import { pageVariants } from '../motion';

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
     className=' px-4 md:px-0'>
        <ClipPath/>
    </motion.div>
  )
}

export default Skills
