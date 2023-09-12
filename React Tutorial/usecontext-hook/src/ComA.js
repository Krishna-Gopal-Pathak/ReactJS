import React, { useContext } from 'react'
import {FirstName, LastName} from './App'
const ComA = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <div>Com {fname} {lname}</div>
  )
}

export default ComA