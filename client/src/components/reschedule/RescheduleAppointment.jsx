// src/pages/RescheduleAppointment.jsx
export default function RescheduleAppointment() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-50 flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-lg w-full p-10 rounded-2xl shadow-xl border border-slate-200">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
                    Reschedule Appointment
                </h2>

                <form className="space-y-6">
                    {/* Current Appointment Info */}
                    <div className="bg-slate-100 p-4 rounded-lg text-sm text-gray-700">
                        <p><strong>Current Date:</strong> July 15, 2025</p>
                        <p><strong>Time:</strong> 14:00</p>
                    </div>

                    {/* New Date */}
                    <div>
                        <label className="block mb-1 font-medium text-blue-900">New Date</label>
                        <input
                            type="date"
                            name="newDate"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                            required
                        />
                    </div>

                    {/* New Time */}
                    <div>
                        <label className="block mb-1 font-medium text-blue-900">New Time</label>
                        <input
                            type="time"
                            name="newTime"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition hover:opacity-90"
                        >
                            Confirm Reschedule
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
