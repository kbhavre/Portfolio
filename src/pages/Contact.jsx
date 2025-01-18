import { motion } from 'framer-motion'
import { pageVariants } from '../motion'
import TextMask from '../components/TextMask';
import MenuForm from '../components/MenuForm';

const Contact = () => {

  const phrases = "HAVE AN IDEA?"
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={pageVariants}
     className='min-h-screen w-full flex flex-col justify-center items-center pb-40'>
    

    <div className="flex items-center justify-center flex-col gap-y-1 w-full h-auto ">
					<div>
						<h1 className="text-secondary font-kyiv font-semibold uppercase leading-none text-4xl md:text-8xl tracking-tight">
							<TextMask>{phrases}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}>
						<p className="font-raleway text-xl md:text-2xl text-myBlack tracking-wider ">
							Drop me an email:
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}>
						<a
							href="mailto:kbhavre78@gmail.com?subject=Portfolio-Inquiry"
							className="uppercase font-raleway text-lg md:text-2xl text-myBlack tracking-wider font-semibold">
							Kbhavare78@gmail.com
						</a>
					</motion.div>
				</div>

        <div className='bg-secondary rounded-lg  w-[90%] md:w-[80%] p-2 mt-6'>
        <MenuForm/>
        </div>
        
      
  </motion.div>
  )
}

export default Contact
