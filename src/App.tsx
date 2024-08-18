import './App.css'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {About} from './layout/sections/about/About'
import {Specialization} from './layout/sections/specialization/Specialization'


function App() {
  return (
    <div className="App">
      <Main/>
      <Skills/>
      <Specialization/>
      <About/>
    </div>
  )
}

export default App
