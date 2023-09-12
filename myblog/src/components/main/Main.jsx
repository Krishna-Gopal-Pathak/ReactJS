import React from 'react'
import MainImages from '../assests/mainImage.jpg'
import "./main.css"

const Main = () => {
  return (
    <div className='main-container'>
      <div className="main-title">
        <span className="main-title-sm">Welcome TO My</span>
        <span className="main-title-lg">Blog</span>
      </div>
      <img src={MainImages} alt="" className='main-images'/>

    </div>
  )
}

export default Main