import React from "react"
import { FaTrash } from 'react-icons/fa'

const Header = ({note,date,deletenote}) =>{
  
  return (
    <section class="text-gray-600 ">
    <div class="container p-2 py-2 mx-auto flex flex-wrap ">
      <div class="flex flex-wrap -m-4 ">
          <div className="flex rounded-lg  p-8 sm:flex-row flex-col bg-yellow-200 w-[250px] h-[20vh] shadow-lg">
            <div className="flex-grow ">
              <h2 className="mb-3 text-sm font-thin text-gray-900">{note.text}</h2>
              <div className="flex space-x-32 mt-14">
              <small className="text-[12px]  ">{date}</small>
              <i className=" fa-solid fa-trash text-[12px]" onClick={()=>{
                deletenote(note.id)
              }}></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      
  </section>
  )
}

export default Header