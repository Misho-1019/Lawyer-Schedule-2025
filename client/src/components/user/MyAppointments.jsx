import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import Appointment from "./appointment/Appointment";
import { Link } from "react-router";

// src/pages/MyAppointments.jsx
export default function MyAppointments() {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        appointmentService.getAllClient()
            .then(setAppointments)
    }, [])

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-100 to-slate-50 px-4 py-12">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">
                    My Appointments
                </h2>

                {/* Static mock appointments for now */}
                <div className="space-y-6">
                    {appointments.length > 0
                        ? appointments.map(appointment => <Appointment key={appointment._id} {...appointment} />)
                        : <div className="text-center mt-10">
                            <p className="text-gray-500 text-lg mb-4">You have no appointments yet.</p>
                            <p className="text-gray-600 text-lg mb-6">Make your appointment now and consult with Victor Todorov at your convenience.</p>
                            <Link
                                to="/user/book"
                                className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white font-bold py-3 px-6 rounded-xl transition shadow hover:opacity-90 disabled:opacity-70"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
