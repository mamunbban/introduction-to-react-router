import { Link } from "react-router-dom";
import "./User.css"

const User = ({user}) => {
    const {id, name, email,phone} = user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <h2>Email: {email}</h2>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;