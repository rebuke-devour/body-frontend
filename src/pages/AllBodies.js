import React from "react"
import Post from "../components/Post"

const AllBodies = (props) => {
    return props.body.map((post)=> {
        return <Post key={post.id} post={post}/>
    })
}

export default AllBodies