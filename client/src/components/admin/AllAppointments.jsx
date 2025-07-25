import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import Appointment from "./appointment/Appointment";

export default function AdminAllAppointments() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        appointmentService.getAllAdmin()
            .then(setAppointments)
    }, [])

    const handleDelete = async (id) => {
        await appointmentService.deleteAdmin(id)
        setAppointments(prev => prev.filter(appointment => appointment._id !== id))
    }

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
                            {appointments.length > 0
                                ? (appointments.map(appointment => <Appointment key={appointment._id} {...appointment} onDelete={handleDelete} />))
                                : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-10 text-gray-400">
                                            <div className="flex flex-col items-center justify-center space-y-2">
                                                <span className="text-4xl">📅</span>
                                                <p className="text-lg font-medium">No appointments yet</p>
                                                <p className="text-sm text-gray-500">
                                                    Once someone books, appointments will appear here.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
