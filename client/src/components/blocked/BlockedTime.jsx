export default function BlockedTime() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-2xl font-bold text-primary mb-6">Manage Blocked Time</h1>

                {/* Form to Block New Time */}
                <div className="bg-white p-6 rounded-2xl shadow mb-10">
                    <h2 className="text-lg font-semibold text-gray-800 mb-5">Block a Time Slot</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                <input
                                    type="time"
                                    className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Reason (optional)</label>
                            <input
                                type="text"
                                placeholder="Vacation, Court, Personal..."
                                className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary transition"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg font-semibold transition"
                            >
                                Block Time
                            </button>
                        </div>
                    </form>
                </div>

                {/* List of Blocked Times */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-5">Currently Blocked Slots</h2>
                    <ul className="divide-y divide-gray-100">
                        {[
                            { date: '2025-06-26', time: '10:00', reason: 'Court appearance' },
                            { date: '2025-06-27', time: '13:30', reason: 'Lunch with client' },
                        ].map((slot, index) => (
                            <li key={index} className="flex items-center justify-between py-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        {slot.date} at {slot.time}
                                    </p>
                                    <p className="text-sm text-gray-500">{slot.reason}</p>
                                </div>
                                <button
                                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-1 rounded-lg text-sm shadow font-semibold transition"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
