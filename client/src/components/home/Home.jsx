// Home.jsx
export default function Home() {
    return (
        <main className="bg-slate-50 min-h-screen text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-800 text-white py-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                        Schedule Your Legal Appointment with Victor Todorov
                    </h1>
                    <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
                        Trusted legal advice from a dedicated professional. Book online in minutes with confidence.
                    </p>
                    <a
                        href="#"
                        className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white font-bold py-3 px-6 rounded-xl transition shadow hover:opacity-90 disabled:opacity-70"
                    >
                        Book an Appointment
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-14 text-blue-900">
                        Why Choose Victor Todorov?
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3 text-left">
                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">
                                Personalized Service
                            </h3>
                            <p className="text-sm text-gray-600">
                                One-on-one consultations tailored to your unique legal needs—no generic solutions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">
                                Straightforward Booking
                            </h3>
                            <p className="text-sm text-gray-600">
                                Schedule appointments quickly with zero hassle and transparent availability.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">
                                Reliable Reminders
                            </h3>
                            <p className="text-sm text-gray-600">
                                Get timely email reminders so you’re always informed and prepared.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Footer Strip */}
            <section className="bg-gradient-to-br from-emerald-700 via-emerald-500 to-lime-400 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                        Ready to get legal support from Victor Todorov?
                    </h2>
                    <a
                        href="#"
                        className="bg-white text-emerald-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow"
                    >
                        Book Your Appointment Now
                    </a>
                </div>
            </section>
        </main>
    );
}
