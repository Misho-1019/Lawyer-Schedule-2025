export default function BookAppointment() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-[#F8FAFC] via-[#E0E7FF] to-[#F8FAFC] flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-2xl w-full p-8 rounded-2xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-center text-[#1E3A8A]">
                    Book an Appointment
                </h2>

                <form className="space-y-6">
                    {/* Date Input */}
                    <div>
                        <label className="block mb-1 font-semibold text-[#FACC15]">
                            Select Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#FACC15] transition"
                        />
                    </div>

                    {/* Time Input */}
                    <div>
                        <label className="block mb-1 font-semibold text-[#FACC15]">
                            Select Time
                        </label>
                        <input
                            type="time"
                            name="time"
                            className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#FACC15] transition"
                        />
                    </div>

                    {/* Submit */}
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
