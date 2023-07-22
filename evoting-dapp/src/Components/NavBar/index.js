import "./style.css";

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <ul className="links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/User">User</Link>
            </li>
            <li>
                <Link to="/Admin">Admin</Link>
            </li>
        </ul>
    )
}