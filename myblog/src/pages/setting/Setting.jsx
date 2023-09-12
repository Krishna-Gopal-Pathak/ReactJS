import React from 'react'
import './Setting.css'
import MainImage from '../../components/assests/mainImage.jpg'
import { FaUserCircle } from "react-icons/fa";
const Setting = () => {
  return (
    <div className='setting'>
      <div className="settingwrapper">
        <div className="settingTitle">
            <span>Update Your Account</span>
            <span>Delete Account</span>
        </div>
        <form action="#" className="settingform">
            <label>Profile Picture</label>
            <div className="settingprofile">
                <img src={MainImage} alt="" />
                <label htmlFor="fileinput"><FaUserCircle className='settingprofile-icon'/></label>
                <input type="file" id="fileinput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button className='settingsSubmit'>Update</button>
        </form>
      </div>

    </div>
  )
}

export default Setting