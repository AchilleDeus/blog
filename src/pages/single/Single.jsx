 import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import { useParams } from 'react-router-dom'
export default function Single() {

  const {Id}= useParams()
  return (
    <div className="single">
<h1>{Id}</h1>
       <SinglePost/>
        <Sidebar/>
       
        
        
        </div>
  )
}
