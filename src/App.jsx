import Hero from "./components/Hero"
import MenuBar from "./components/Menu"

const App = () => {
  return (
    <div className="h-screen w-full bg-primary lg:px-12 lg:py-8 md:px-6 md:py-4">
      <MenuBar/>
      <Hero/>

    </div>
  )
}

export default App
