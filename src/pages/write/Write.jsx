import React from 'react'
import "./write.css"
import { BsPlusLg } from "react-icons/bs";
export default function Write() {
  return (
    <div className='write'>
      <img 
       className='writeImg'
      src="./immagini/fotoRimini01.jpg"
       alt="..." />
        <form  className="writeForm">

<div className="writeFormGroup">
<label htmlFor="fileInput"><div className="writeIcon"><BsPlusLg /></div></label>
    <input type="file"  id="fileInput" style={{display:'none'}}/>
    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
</div>

        <div className="writeFormGroup">

            <textarea placeholder='Tell your story....' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
        </form>
  
        
        </div>

  )
}
