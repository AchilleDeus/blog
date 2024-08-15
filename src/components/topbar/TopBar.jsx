import React from 'react'
import "./topbar.css"
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

import{Link} from "react-router-dom"



export default function TopBar() {
 
  return (
    <div className='top'>
        
        <div className='topLeft'>
            
            <BiLogoFacebookSquare />
            <BiLogoTwitter />
            <BiLogoWhatsapp />
            <BiLogoTiktok />
            </div>



        <div className='topCenter'>
            <ul className="topList">

            <li className='topListItem'><Link style={{textDecoration:'none'}}to="/"><span className="colore">HOME</span></Link></li>
            <li className='topListItem'><Link style={{textDecoration:'none'}}to="/"><span className="colore">ABOUT</span></Link></li>
            <li className='topListItem'><Link style={{textDecoration:'none'}}to="/"><span className="colore">CONTACT</span></Link></li>
          
            <li className='topListItem'><Link style={{textDecoration:'none'}}to="/write"><span className="colore">WRITE</span></Link></li>
         
           <li className='topListItem'><Link style={{textDecoration:'none'}} to="/login"><span className="colore">LOGOUT</span></Link></li>

           <li className='topListItem'><Link style={{textDecoration:'none'}} to="/register"><span className="colore">REGISTER</span></Link></li>

        
              
      </ul>

         

         
         
      

        </div>
        <img className='topImg' src="./immagini/logoTravelCaffe.png" alt="..." />
      <i className='topSearch'><FaSearch /></i>
        
        
        </div>
  )
}
