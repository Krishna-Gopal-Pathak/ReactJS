/* import React from 'react'
import Main from '../../components/main/Main'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'
import Singlepost from '../singlepost/Singlepost'

const Home = () => {
  return (
    <>
    <Singlepost/>
    </> 
  )
}

export default Home */


import React from 'react'
import Main from '../../components/main/Main'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <>
    <Main/>
    <div className="post-section">
      <Posts/>
      <Sidebar/>  
    </div>
    </> 
  )
}

export default Home