import WorkCard from "../components/WorkCard"
import { projects } from "../constants"

const Work = () => {
  return (
    <div className='w-full my-8 px-4 md:px-0'>
      {/* <h1 className="text-center text-secondary text-8xl font-kyiv font-bold">Work</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <WorkCard
          key={project.id} // Unique key based on the id
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
