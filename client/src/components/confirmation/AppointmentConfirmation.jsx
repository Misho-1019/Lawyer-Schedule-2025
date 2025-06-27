// src/pages/AppointmentConfirmation.jsx
export default function AppointmentConfirmation() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E0E7FF] to-[#F8FAFC] flex items-center justify-center px-4 py-16">
            <div className="bg-white max-w-md w-full p-8 rounded-3xl shadow-xl text-center border border-gray-100">
                <div className="text-5xl mb-5 text-emerald-500 animate-bounce">🎉</div>
                <h2 className="text-3xl font-extrabold mb-3 text-blue-900">
                    Appointment Booked!
                </h2>
                <p className="text-gray-700 mb-8">
                    You have booked an appointment with <strong>Victor Todorov</strong>.
                </p>

                <div className="bg-gray-100 p-5 rounded-xl text-sm mb-8 shadow-inner">
                    <p><strong>Date:</strong> July 15, 2025</p>
                    <p><strong>Time:</strong> 14:00</p>
                </div>

                <a
                    href="/my-appointments"
                    className="inline-block bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
                >
                    View My Appointments
                </a>
            </div>
        </section>
    );
}
