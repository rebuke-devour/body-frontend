
import {Link, useParams} from "react-router-dom"
import  { useState} from "react"

const SingleBody = ({ body, edit, deleteBody }) => {
    const params = useParams()
    const id = parseInt(params.id)
    
    const Body = body.find((b)=> b.id === id)
    console.log(Body)

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
    <h1>{Body?.name}</h1>
    <h2>{Body?.date_discovered}</h2>
    <h3>{Body?.details}</h3>
    <button onClick={ showModal }>Delete</button>
    <button onClick={() => edit(Body)}>Edit</button>
    <Link to="/">
        <button>Go Back</button>
    </Link>
    <div className="modal" style={show}>

        <div className="modal-content">
            <h1>Are you sure you'd like to delete this?</h1>
            <button onClick={ hideModal }>Close</button>
            <button onClick={() => deleteBody(Body)}>Delete</button>
        </div>
    </div>
</div>
}

export default SingleBody