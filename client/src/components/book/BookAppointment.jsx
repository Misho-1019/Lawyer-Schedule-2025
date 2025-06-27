export default function BookAppointment() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E0E7FF] to-[#F8FAFC] flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-2xl w-full p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#1E3A8A]">
                    Book an Appointment
                </h2>

                <form className="space-y-6">
                    {/* Date Input */}
                    <div>
                        <label className="block mb-2 font-semibold text-[#FACC15]">
                            Select Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#FACC15] transition"
                        />
                    </div>

                    {/* Time Input */}
                    <div>
                        <label className="block mb-2 font-semibold text-[#FACC15]">
                            Select Time
                        </label>
                        <input
                            type="time"
                            name="time"
                            className="w-full border border-blue-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#FACC15] transition"
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition"
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
