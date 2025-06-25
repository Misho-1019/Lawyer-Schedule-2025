// src/pages/MyAppointments.jsx
export default function MyAppointments() {
    return (
        <section className="min-h-screen bg-[#F8FAFC] px-4 py-10">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-[#1E3A8A] text-center">
                    My Appointments
                </h2>

                {/* Static mock appointments for now */}
                <div className="space-y-4">
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"
                        >
                            <div>
                                <p className="text-lg font-semibold text-[#1F2937]">
                                    📅 July 15, 2025 at 14:00
                                </p>
                                <p className="text-sm text-gray-500">Status: <span className="text-[#10B981] font-medium">Confirmed</span></p>
                            </div>

                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                            >
                                Cancel
                            </button>
                        </div>
                    ))}
                </div>

                {/* No Appointments Message (to use when data is empty) */}
                {/* 
        <p className="text-center text-gray-400 mt-10">
          You have no appointments yet.
        </p> 
        */}
            </div>
        </section>
    );
}
