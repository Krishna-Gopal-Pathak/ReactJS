import React from 'react'
import './Singlepost.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Single from '../../components/single/Single'
const Singlepost = () => {
  return (
    <div className='container'>
    <Single/>
    <Sidebar/>
    </div>
  )
}

export default Singlepost