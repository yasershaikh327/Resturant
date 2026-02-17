import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-yellow-400">AI Restaurant</h1>
            <div className="space-x-6">
                <Link to="/" className="hover:text-yellow-400">Home</Link>
                <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
                <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
                <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
            </div>
        </nav>
    );
}
