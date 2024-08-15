import React from 'react'
import "./singlePost.css"

import { BsPencilSquare } from "react-icons/bs";
import { BsTrash3 } from "react-icons/bs";



export default function SinglePost() {
  return (
    <div className='singlePost'>
        
       <div className="singlePostWrapper">

<img src="../immagini/fotoChioggia01.jpg" 
alt="..." 
className="singlePosImg" />

<h1 className="singlePostTitle">Chioggia meta turistica

<div className="singlePostEdit">

<i className="singlePostIcon "><BsPencilSquare /></i>
<i className="singlePostIcon "><BsTrash3 /></i>

</div>

</h1>
      <div className="singlePostInfo">
<span className='singlePostAuthore'>Author: <b>Name Autor</b></span>
<span className='singlePostDate '>Data: <b>xx/xx/xxxx</b></span>

      </div>

<p className='singlePostDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo itaque recusandae cum, commodi molestias odio explicabo eaque quia deserunt at, ex repellendus numquam neque tempora maxime? Iure amet culpa laudantium placeat facere! Fuga, commodi rem dignissimos illum repellendus numquam blanditiis. Similique fugit laudantium saepe neque ipsum dolore voluptatum, recusandae dicta illo, facilis officiis autem quia odit fuga vel exercitationem architecto? Nihil reprehenderit consequatur debitis aperiam doloremque perferendis libero incidunt. Nobis quis vel perferendis eius nam tempore neque quae odit! Numquam error rem illo impedit temporibus fugit repudiandae, neque quidem facilis exercitationem aut excepturi sit. Amet enim soluta ratione sapiente consectetur.</p>

 </div>
        
   </div>
  )
}
