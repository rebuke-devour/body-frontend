import React from "react"
import Post from "../components/post"

const AllBodies = (props) => {
    return props.Body.map((body)=> {
        return <Post key={body.id} post={body}/>
    })
}

export default AllBodies