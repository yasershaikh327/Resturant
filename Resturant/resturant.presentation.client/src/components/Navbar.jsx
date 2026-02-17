import { Link } from "react-router-dom";
import "../styles/main.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>AI Restaurant</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
            </div>
        </div>
    );
}
