// src/pages/MyAppointments.jsx
export default function MyAppointments() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-50 px-4 py-12">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                    My Appointments
                </h2>

                {/* Static mock appointments for now */}
                <div className="space-y-6">
                    {[1, 2].map((_, i) => (
                        <div
                            key={i}
                            className="flex justify-between items-center bg-slate-50 p-5 rounded-xl border border-gray-300 shadow-sm"
                        >
                            <div>
                                <p className="text-lg font-semibold text-slate-800">
                                    📅 July 15, 2025 at 14:00
                                </p>
                                <p className="text-sm text-gray-600">
                                    Status: <span className="text-emerald-600 font-medium">Confirmed</span>
                                </p>
                            </div>

                            <button
                                className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:via-red-600 hover:to-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow"
                            >
                                Cancel
                            </button>
                        </div>
                    ))}
                </div>

                {/* No Appointments Message (uncomment when needed) */}
                {/*
                <p className="text-center text-gray-400 mt-10">
                    You have no appointments yet.
                </p>
                */}
            </div>
        </section>
    );
}
