import React, { useState } from "react";
import Header from "./components/header.jsx"
import AddNote from './components/Addnote.jsx'

function App() {
  
  return (
    <div className="flex flex-row p-6 bg-black h-[1000vh]">
      <div className="flex flex-col gap-7"> 
        <span className="text-[30px] font-thin text-white">My <br /> Notes</span>
        <button className="text-white border-[1px]  rounded-xl  p-2 flex justify-between" style={{ width: '80px' }}>ALL <span className="border-[1px] bg-gray-700 rounded-full text-[9px] p-1 ">23</span></button>
        <AddNote />
      </div>

    </div>
  )
}

export default App
