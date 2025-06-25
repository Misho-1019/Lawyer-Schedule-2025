// src/pages/RescheduleAppointment.jsx
export default function RescheduleAppointment() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E0E7FF] to-[#F8FAFC] flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#1E3A8A]">
                    Reschedule Appointment
                </h2>

                <form className="space-y-6">
                    {/* Current Appointment Info */}
                    <div className="bg-gray-100 p-4 rounded-lg text-sm">
                        <p><strong>Current Date:</strong> July 15, 2025</p>
                        <p><strong>Time:</strong> 14:00</p>
                    </div>

                    {/* New Date */}
                    <div>
                        <label className="block mb-1 font-semibold text-[#FACC15]">New Date</label>
                        <input
                            type="date"
                            name="newDate"
                            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                        />
                    </div>

                    {/* New Time */}
                    <div>
                        <label className="block mb-1 font-semibold text-[#FACC15]">New Time</label>
                        <input
                            type="time"
                            name="newTime"
                            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
                        >
                            Confirm Reschedule
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
