
import {Link, useParams} from "react-router-dom"
import  { useState } from "react"

const SingleBody = ({ posts, edit, deleteBody }) => {
    const params = useParams()
    const id = parseInt(params.id)
    
    const post = posts.find((p)=> p.id === id)
    console.log(post)

// == Style Object == //
const div = {
    textAlign: "center",
    border: "3px solid blue",
    width: "80%",
    margin: "30px auto"
}
const [show, setShow] = useState({ display:"none" })

const showModal = () => {
    setShow({display:"flex"})
}

const hideModal = ()=> {
    setShow({display:"none"})
}

return <div style={div}>
    <h2>{post?.id}</h2>
    <h1>{post?.name}</h1>
    <h2>{post?.date_discovered}</h2>
    <h3>{post?.details}</h3>
    <button className="bg-gray-400  p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-red-600" onClick={ showModal }>Delete</button>
    <button className="bg-gray-400  p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-red-600" onClick={() => edit(post)}>Edit</button>
    <Link to="/">
        <button className="bg-gray-400  p-3 pl-4 pr-4 rounded-lg font-bold transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-red-600" >Go Back</button>
    </Link>
    <div className="modal" style={show}>

        <div className="modal-content">
            <h1>Are you sure you'd like to delete this?</h1>
            <button onClick={ hideModal }>Close</button>
            <button onClick={() => deleteBody(post)}>Delete</button>
        </div>
    </div>
</div>
}

export default SingleBody