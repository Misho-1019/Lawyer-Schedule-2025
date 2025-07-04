import { useEffect, useState } from "react";
import appointmentService from "../../services/appointmentService";
import Appointment from "./appointment/Appointment";

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
                    {appointments.map(appointment => <Appointment key={appointment._id} {...appointment}/>)}
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
