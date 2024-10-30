
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
               
                <NavLink to="/">Home</NavLink>
                
                <NavLink to="/users">Users</NavLink>
               
                <NavLink to="/posts">Posts</NavLink>
                
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/contact">Contact</NavLink>

            </nav>
        </div>
    );
};

export default Header;