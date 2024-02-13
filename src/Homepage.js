import React from 'react'
import './Homepage.css'
import Header from './header/Header'
import Timeline from './timeline/Timeline'
import Skills from './skills/Skills'

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Header />
      </div>
      <div className="homepage__skills">
        <Skills />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  )
}

export default Homepage
