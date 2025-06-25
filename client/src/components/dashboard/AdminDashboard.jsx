// AdminDashboard.jsx
export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-2xl font-bold text-primary mb-6">Welcome, Victor Todorov</h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-primary">
                        <p className="text-gray-600 text-sm">Total Appointments</p>
                        <p className="text-xl font-semibold text-gray-900">120</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-emerald-500">
                        <p className="text-gray-600 text-sm">Confirmed</p>
                        <p className="text-xl font-semibold text-gray-900">78</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-yellow-400">
                        <p className="text-gray-600 text-sm">Pending</p>
                        <p className="text-xl font-semibold text-gray-900">24</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow border-l-4 border-red-500">
                        <p className="text-gray-600 text-sm">Cancelled</p>
                        <p className="text-xl font-semibold text-gray-900">18</p>
                    </div>
                </div>

                {/* Today’s Appointments */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Today's Appointments</h2>
                        <a href="#" className="text-sm text-primary hover:underline">View All</a>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {[
                            { name: 'John Doe', time: '10:00', status: 'Confirmed' },
                            { name: 'Anna Smith', time: '11:30', status: 'Pending' },
                            { name: 'David Green', time: '14:00', status: 'Confirmed' }
                        ].map((appt, i) => (
                            <li key={i} className="py-3 flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-700">{appt.name}</p>
                                    <p className="text-sm text-gray-500">{appt.time}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${appt.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                                        appt.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-red-100 text-red-700'}`}>
                                    {appt.status}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
