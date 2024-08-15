import React from 'react'
import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import { VscAccount } from "react-icons/vsc";

export default function Settings() {
  return (
    <div className='settings'>
        
     
        
        
<div className="settingsWrapper">

<div className="sittingsTitle">
<span className="settingsUpdateTitle">Update Your Account</span>
<span className="settingsDeleteTitle">Delete Account</span>

</div>

<form  className="settingsForm">
<label >Profail Picture</label>

<div className="settingsPP">
<img src="./immagini/fotoFontana01.jpg" alt="..." />


<label htmlFor="fileInput">
<i className="settingsPPIcon">  <VscAccount />     </i>
<input type="file" id="fileInput" style={{display:"none"}} />
</label>
</div>


<label >Username</label>
<input type="text" placeholder='xxxxx' />
<label >Email</label>
<input type="email" placeholder='xxxxx@gmail.com' />
<label >Password</label>
<input type="password" />
<button className="settingsSubmit">Update</button>
</form>
      </div>
      <Sidebar/>
        
        
        </div>
  )
}
