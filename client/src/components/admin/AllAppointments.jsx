export default function AdminAllAppointments() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-2xl font-bold text-primary mb-6">All Appointments</h1>

                {/* Table */}
                <div className="bg-white rounded-2xl shadow overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-primary text-white rounded-t-2xl">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Client</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Time</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                                <th className="px-4 py-3 text-right text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: 'Alice Johnson', email: 'alice@mail.com', date: '2025-06-28', time: '10:30', status: 'pending' },
                                { name: 'Bob Smith', email: 'bob@mail.com', date: '2025-06-29', time: '14:00', status: 'confirmed' },
                                { name: 'Charlie Green', email: 'charlie@mail.com', date: '2025-06-30', time: '09:00', status: 'cancelled' }
                            ].map((appt, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 text-sm text-gray-700">{appt.name}</td>
                                    <td className="px-4 py-3 text-sm text-gray-500">{appt.email}</td>
                                    <td className="px-4 py-3 text-sm">{appt.date}</td>
                                    <td className="px-4 py-3 text-sm">{appt.time}</td>
                                    <td className="px-4 py-3">
                                        <span className={`
                                            px-3 py-1 rounded-full text-xs font-medium
                                            ${appt.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700'
                                                : appt.status === 'pending' ? 'bg-yellow-100 text-yellow-700'
                                                    : 'bg-red-100 text-red-700'}
                                        `}>
                                            {appt.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex justify-end space-x-2">
                                            <button
                                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm px-4 py-1 rounded-lg shadow font-semibold transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm px-4 py-1 rounded-lg shadow font-semibold transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
