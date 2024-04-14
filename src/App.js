import React, { useState } from "react";
import Header from "./components/header.jsx"
import AddNote from './components/Addnote.jsx'

function App() {
  
  return (
    <div className="flex flex-row p-6 bg-black h-[1000vh]">
      <AddNote/>
    </div>
  )
}

export default App
