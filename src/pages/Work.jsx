import { motion } from "framer-motion";
import WorkCard from "../components/WorkCard";
import { projects } from "../constants";
import { pageVariants } from "../motion";

const Work = () => {
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    variants={pageVariants}
    className="w-full h-screen overflow-y-auto px-4 md:px-0 pb-16 scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {projects.map((project) => (
          <WorkCard
            key={project.id}
            title={project.title}
            img={project.img}
            tech={project.tech}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Work;