import { useContext } from "react";
import { Link } from "react-router";
import { UserContext, useUserContext } from "../../context/UserContext";

// Header.jsx
export default function Header() {
    const { email, role } = useUserContext()

    return (
        <header className="bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-3xl font-bold tracking-wide">
                    <span className="text-yellow-400">⚖</span>{" "}
                    <span className="text-white">VT Schedule</span>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6 text-base font-medium">
                    <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">
                        Home
                    </Link>

                    {!email && (
                        <>
                            <Link to="/register" className="hover:text-yellow-300 transition-colors duration-300">
                                Register
                            </Link>
                            <Link to="/login" className="hover:text-yellow-300 transition-colors duration-300">
                                Login
                            </Link>
                        </>
                    )}

                    {email && role === 'client' && (
                        <>
                            <Link to="/user/my-appointments" className="hover:text-yellow-300 transition-colors duration-300">
                                My Appointments
                            </Link>
                            <Link to="/logout" className="hover:text-yellow-300 transition-colors duration-300">
                                Logout
                            </Link>
                        </>
                    )}

                    {email && role === 'admin' && (
                        <>
                            <Link to="/admin/appointments" className="hover:text-yellow-300 transition-colors duration-300">
                                All Appointments
                            </Link>
                            <Link to="/admin/block-time" className="hover:text-yellow-300 transition-colors duration-300">
                                Blocked Time
                            </Link>
                            <Link to="/admin/stats" className="hover:text-yellow-300 transition-colors duration-300">
                                My Board
                            </Link>
                            <Link to="/logout" className="hover:text-yellow-300 transition-colors duration-300">
                                Logout
                            </Link>
                        </>
                    )}
                </nav>

                {/* CTA Button */}
                {/* <div className="hidden md:block">
                    <Link
                        to="/user/book"
                        className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white font-semibold py-2 px-4 rounded-xl transition shadow hover:opacity-90 disabled:opacity-70"
                    >
                        Book Appointment
                    </Link>
                </div> */}
            </div>
        </header>
    );
}
