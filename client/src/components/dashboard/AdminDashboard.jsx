import { useEffect, useState } from "react";
import { Link } from "react-router";
import { isSameDay, parseISO } from "date-fns";
import appointmentService from "../../services/appointmentService";

// AdminDashboard.jsx
export default function AdminDashboard() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        appointmentService.getAllAdmin()
            .then(setAppointments)
    }, [])

    const confirmed = appointments.filter(appointment => appointment.status === 'confirmed')
    const pending = appointments.filter(appointment => appointment.status === 'pending')
    const cancelled = appointments.filter(appointment => appointment.status === 'cancelled')
    const completed = appointments.filter(appointment => appointment.status === 'completed')

    const todayAppointments = appointments.filter(appointment => isSameDay(new Date(), parseISO(appointment.date)))

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-50 px-6 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl font-extrabold text-blue-900 mb-8">
                    Welcome, Victor Todorov
                </h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-gradient-to-r from-blue-600 to-blue-400">
                        <p className="text-gray-600 text-sm uppercase tracking-wide">Total Appointments</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{appointments.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-gradient-to-r from-yellow-400 to-yellow-300">
                        <p className="text-gray-600 text-sm uppercase tracking-wide">Pending</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2 bg-yellow-100">{pending.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-gradient-to-r from-emerald-600 to-emerald-400">
                        <p className="text-gray-600 text-sm uppercase tracking-wide">Confirmed</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2 bg-emerald-100">{confirmed.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-gradient-to-r from-red-600 to-red-400">
                        <p className="text-gray-600 text-sm uppercase tracking-wide">Cancelled</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2 bg-red-100">{cancelled.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-gradient-to-r from-red-600 to-red-400">
                        <p className="text-gray-600 text-sm uppercase tracking-wide">Completed</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2 bg-emerald-100">{completed.length}</p>
                    </div>
                </div>

                {/* Today’s Appointments */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-blue-900">Today's Appointments</h2>
                        <Link to="/admin/appointments" className="text-sm text-blue-600 hover:underline font-medium">View All</Link>
                    </div>

                    <ul className="divide-y divide-gray-200">
                        {todayAppointments.map(appointment =>
                            <li key={appointment._id} className="py-4 flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-700">{appointment.email}</p>
                                    <p className="text-sm text-gray-500">{appointment.time}</p>
                                </div>
                                <span
                                    className={`px-4 py-1 rounded-full text-sm font-semibold
                  ${appointment.status === 'Confirmed'
                                            ? 'bg-emerald-100 text-emerald-700'
                                            : appointment.status === 'Pending'
                                                ? 'bg-yellow-100 text-yellow-700'
                                                : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {appointment.status}
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
