import react, { useState } from 'react'
import React from 'react'
import Header from '../components/header'

function Addnote() {
  const [noteText, setnoteText] = useState('')
  const [notes, setNotes] = useState([])
  const [charLimitRemaining, setCharLimitRemaining] = useState(100)
  const handlechange = (event) => {
    const inputValue=event.target.value;
    setnoteText(inputValue);
    if (inputValue.length > charLimit) {
      alert("Note is too long!")
      setnoteText(noteText.substring(0, charLimit))
      setCharLimitRemaining(0)
    } else {
      setCharLimitRemaining(charLimit - inputValue.length)
    }
  }
  var charLimit=100;
  const handleClick = () => {
    const currentDtae=new Date();
    const formatDate=currentDtae.toLocaleDateString();
    setNotes([...notes, {id:Date.now(),text:noteText,date:formatDate}])

  }
  const deletenote=(id)=>{
    setNotes(notes.filter((note)=>note.id!=id))
  }
  
  return (
    <div>
      
    <div className='relative'>

      <textarea placeholder='Type to add a note' onChange={handlechange} value={noteText} rows='8' col='10' className='bg-orange-500 h-[20vh] rounded-lg w-[200px] text-[14px] p-2 shadow-lg outline-none text-black'></textarea>
      <div className='absolute top-[6rem] left-[4px] space-x-16 '>
        <small className='font-thin rounded-lg text-[12px]  pl-2 '>{charLimitRemaining} Remaining</small>
        <button className='w-9 bg-white rounded-lg text-[12px] hover:bg-violet-300 ' onClick={handleClick} >Save</button>
      </div>
      <div className='flex  flex-wrap gap-10 mt-2'>
        {notes.map((note, index) => (
          <div key={index} className='p-2 mb-2 bg-white rounded-lg'>
            <Header note={note} date={note.date}  deletenote={deletenote}/>
          </div>
        ))}
      </div>
    </div>
    </div>
    
        
  )
        }
      
  


export default Addnote