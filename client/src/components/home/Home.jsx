// Home.jsx
export default function Home() {
    return (
        <main className="bg-slate-50 min-h-screen text-gray-800">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Schedule Your Legal Appointment with Victor Todorov
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        Trusted legal advice from a dedicated professional. Easy, online booking.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg text-base font-semibold shadow transition"
                    >
                        Book an Appointment
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-blue-900">
                        Why Choose Victor Todorov?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3 text-left">
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Personalized Service</h3>
                            <p className="text-sm text-gray-600">
                                Experience one-on-one consultations tailored to your unique legal needs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Straightforward Booking</h3>
                            <p className="text-sm text-gray-600">
                                Schedule appointments quickly and easily, with no unnecessary steps.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Reliable Reminders</h3>
                            <p className="text-sm text-gray-600">
                                Receive timely email reminders so you never miss your appointment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer Strip */}
            <section className="bg-emerald-500 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Ready to get legal support from Victor Todorov?
                    </h2>
                    <a
                        href="#"
                        className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                    >
                        Book Your Appointment Now
                    </a>
                </div>
            </section>
        </main>
    );
}
