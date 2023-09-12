
import React, { createContext } from 'react'
import ComA from './ComA';
export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <FirstName.Provider value={"Krishna"}>
      <LastName.Provider value={"Pathak"}>
        <ComA/>
      </LastName.Provider>  
    </FirstName.Provider>
  );
}

export default App;
