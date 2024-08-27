import './App.css'
import {Main} from './layout/sections/main/Main'
import {Skills} from './layout/sections/skills/Skills'
import {Specialization} from './layout/sections/specialization/Specialization'
import {Connect} from './layout/sections/connect/Connect'
import {Footer} from './layout/footer/Footer'
import {Statistics} from './layout/sections/statistics/Statistics'
import React from 'react'


function App() {
  return (
    <div className="App">

        <Main/>
        <Skills/>
        <Specialization/>
        <Statistics/>
        <Connect/>
        <Footer/>

    </div>
  )
}

export default App
