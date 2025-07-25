import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import appointmentService from "../../services/appointmentService";

export default function UpdatePage() {
    const { appointmentId } = useParams()
    const navigate = useNavigate()
    const [appointment, setAppointment] = useState({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        appointmentService.getOneAdmin(appointmentId)
            .then(setAppointment)
    }, [appointmentId])
    
    const formattedDate = appointment.date ? new Date(appointment.date).toISOString().split('T')[0] : '';

    const formAction = async (formData) => {
        const appointmentData = Object.fromEntries(formData);

        await appointmentService.edit(appointmentId, appointmentData)

        navigate('/admin/appointments')
    }

    useEffect(() => {
        if (appointment) {
            setStatus(appointment.status?.toLowerCase() || 'pending')
        }
    }, [appointment])

    if(!appointment) return <p>Loading...</p>
        
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-50 flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-xl w-full p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                    Update Appointment
                </h2>

                <form className="space-y-6" action={formAction}>
                    {/* Date */}
                    <div>
                        <label className="block mb-2 font-semibold text-yellow-500">New Date</label>
                        <input
                            type="date"
                            name="date"
                            className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-yellow-400 transition"
                            defaultValue={formattedDate}
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label className="block mb-2 font-semibold text-yellow-500">New Time</label>
                        <input
                            type="time"
                            name="time"
                            className="w-full border border-blue-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-yellow-400 transition"
                            defaultValue={appointment.time}
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block mb-2 font-semibold text-yellow-500">Status</label>
                        <select
                            name="status"
                            className="w-full border border-blue-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-yellow-400 transition"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
