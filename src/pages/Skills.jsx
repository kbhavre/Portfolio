import { motion } from "framer-motion";
import ClipPath from "../components/ClipPath";
import { pageVariants } from "../motion";
import GithubMap from "../components/GithubMap";



const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full h-screen overflow-y-auto px-4 md:px-0 pb-24 md:pb-36 scrollbar-hide"
    >
      <p className="w-full md:w-4/5 text-center mx-auto font-raleway text-myBlack font-medium text-lg md:text-2xl tracking-tight leading-tighter mb-6">
        I am someone who tries many things out, gets in trouble, and eventually
        solves it. Being a self-taught guy (with GPT, docs and random youtube videos), I haven't
        followed any specific path. I have tried out Machine Learning, a bit of Designing, but then shifted to development 💻.
      </p>

      {/* Skills */}
      <div className="flex flex-col gap-2">
      <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl">Skills</h1>
      <ClipPath />
      </div>
      


      {/* Github Map */}
      <div className="flex flex-col gap-2 mt-6 md:mt-12">
      <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl">Github Contributions</h1>
      <GithubMap/>
      </div>
      
      
      
      {/* Leetcode Map */}
      
    </motion.div>
  );
};

export default Skills;
