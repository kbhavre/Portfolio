import WorkCard from "../components/WorkCard"
import { projects } from "../constants"

const Work = () => {
  return (
    <div className='w-full h-screen overflow-y-auto px-4 md:px-0 pb-16'>
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
  </div>
  )
}

export default Work
