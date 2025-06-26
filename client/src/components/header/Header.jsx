import { Link } from "react-router";

// Header.jsx
export default function Header() {
    return (
        <header className="bg-blue-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-2xl font-semibold tracking-wide">
                    <span className="text-yellow-400">⚖</span> LawFirmApp
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium">
                    <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                    {/* <Link to="#" className="hover:text-yellow-400 transition">Contact</Link> */}
                    <Link to="/register" className="hover:text-yellow-400 transition">Register</Link>
                    <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>

                    <Link to="user/my-appointments" className="hover:text-yellow-400 transition">My Appointments</Link>
                    
                    <Link to="/admin/appointments" className="hover:text-yellow-400 transition">All Appointments</Link>
                    <Link to="/admin/blocked" className="hover:text-yellow-400 transition">Blocked Time</Link>
                    <Link to="/admin/stats" className="hover:text-yellow-400 transition">My Board</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        to="/user/book"
                        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition shadow"
                    >
                        Book Appointment
                    </Link>
                </div>
            </div>
        </header>
    );
}
