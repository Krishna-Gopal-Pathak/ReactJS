import React from 'react'
import './Write.css'
import MainImage from '../../components/assests/mainImage.jpg'
import { FaPlus } from "react-icons/fa";
const Write = () => {
  return (
    <div className='write-container'>
            <img src={MainImage} alt="" className='writeimage'/>
        <form action="#" className='writeform'>
            <div className="writeformgroup">
            <label htmlFor="fileinput"><FaPlus className='icon'/></label>
                <input type="file" id="fileinput" style={{display: "none"}}/>
                <input type="text" placeholder='Title' autoFocus={true} className='writeInput'/>
                
            </div>
            <div className="writeformgroup">
            <textarea type="text" placeholder='Tell your story' className='writeInput writeText'></textarea>
            </div>
            <button className='writesubmit'>Submit</button>
        </form>
    </div>
  )
}

export default Write