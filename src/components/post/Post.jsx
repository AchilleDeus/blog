import React from 'react'
import "./post.css"

export default function Post() {
  return (

   
    <div className="post">
     <img className='postImg' src="/immagini/foto01.jpg" alt="..." />
      
      
     
      
    <div className="postInfo">
   
   <div className="postCats">
  <span className="postCat">Veneto</span>
  <span className="postCat">Sardegna</span>
</div>

<span className="postTitle">le tue migliori vacanze.</span>

<hr />
<span className="postDate">11/08/2024</span>
      </div>

<p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam similique exercitationem eum quae dolor officiis commodi. Blanditiis alias corrupti exercitationem dicta  magni laudantium voluptates
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam similique exercitationem eum quae dolor officiis commodi. Blanditiis alias corrupti exercitationem dicta, magni laudantium voluptates Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam similique exercitationem eum quae dolor officiis commodi. Blanditiis alias corrupti exercitationem dicta, magni laudantium voluptates  </p>

      </div>
 
  )
}

