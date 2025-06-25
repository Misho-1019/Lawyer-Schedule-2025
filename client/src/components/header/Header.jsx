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
                    <a href="#" className="hover:text-yellow-400 transition">Home</a>
                    <a href="#" className="hover:text-yellow-400 transition">Appointments</a>
                    <a href="#" className="hover:text-yellow-400 transition">Contact</a>
                    <a href="#" className="hover:text-yellow-400 transition">Admin</a>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#"
                        className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition shadow"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </header>
    );
}
