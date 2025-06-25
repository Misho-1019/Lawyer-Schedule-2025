// src/pages/AppointmentConfirmation.jsx
export default function AppointmentConfirmation() {
    return (
        <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-16">
            <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center border border-gray-100">
                <div className="text-4xl mb-4 text-[#10B981]">🎉</div>
                <h2 className="text-2xl font-bold mb-2 text-[#1E3A8A]">
                    Appointment Booked!
                </h2>
                <p className="text-gray-600 mb-6">
                    You have booked an appointment with <strong>Victor Todorov</strong>.
                </p>

                <div className="bg-gray-100 p-4 rounded-lg text-sm mb-6">
                    <p><strong>Date:</strong> July 15, 2025</p>
                    <p><strong>Time:</strong> 14:00</p>
                </div>

                <a
                    href="/my-appointments"
                    className="inline-block bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition"
                >
                    View My Appointments
                </a>
            </div>
        </section>
    );
}
