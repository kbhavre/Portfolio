import { motion } from "framer-motion";
import ClipPath from "../components/ClipPath";
import { pageVariants } from "../motion";
import LeetcodeMap from "../components/LeetcodeMap";
import GithubMap from "../components/GithubMap";

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full h-screen overflow-y-auto px-4 md:px-0 pb-40 md:pb-36 scrollbar-hide"
    >
      <p className="w-full md:w-4/5 text-center mx-auto paraText mb-6">
        I am someone who tries many things out, gets in trouble, and eventually
        solves it. Being a self-taught guy (with GPT, docs and random youtube
        videos), I haven not followed any specific path. I have tried out
        Machine Learning, a bit of Designing, but then shifted to development.
      </p>

      {/* Skills */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl">
          Skills
        </h1>
        <ClipPath />
      </div>

      <p className="w-full md:w-4/5 text-center mx-auto paraText mb-6 mt-10">
      I am passionate about development, design, and problem-solving, constantly alternating between building innovative projects and tackling complex challenges. Below are my contributions, reflecting my dedication to both fields.
      </p>

      {/* Github Map */}
      <div className="flex flex-col gap-2 mt-6 md:mt-12 text-center">
        <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl">
          Github Contributions
        </h1>
        <GithubMap />
      </div>

      {/* Leetcode Map */}
      <div className="flex flex-col gap-2 mt-6 md:mt-12 text-center">
        <h1 className="font-kyiv text-secondary font-medium text-2xl md:text-6xl">
          Leetcode Submissions
        </h1>
        <LeetcodeMap />
      </div>
    </motion.div>
  );
};

export default Skills;
