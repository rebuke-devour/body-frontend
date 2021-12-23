import { Link } from "react-router-dom";

const Post = ({ post }) => {

    ///////////////////////////
    // Style Objects
    ///////////////////////////
    const div = {
      textAlign: "center",
      border: "3px solid",
      margin: "10px auto",
      width: "80%",
      
    };
  
    return (

      <div className="box-shadow: 0 1px 3px 0 rgba(255, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);" style={div}>
         
        <Link to={`/post/${post?.id}`}>
          <h1>{post?.name}</h1>
        </Link>
        <h2>{post?.date_discovered}</h2>
        <h3>{post?.details}</h3>
      </div>
    );
  };
  
  export default Post;