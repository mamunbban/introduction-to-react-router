import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className="user">
            <h4>{id}</h4>
            <p>Title: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>

            <button onClick={handleNavigate}>click me</button>
        </div>
    );
};

export default Post;