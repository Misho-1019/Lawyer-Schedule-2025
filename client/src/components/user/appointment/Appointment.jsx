export default function Appointment({_id, date, time, status}) {
    const onDate = new Date(date)

    const formattedDate = onDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div
            className="flex justify-between items-center bg-slate-50 p-5 rounded-xl border border-gray-300 shadow-sm"
        >
            <div>
                <p className="text-lg font-semibold text-slate-800">
                    📅 {formattedDate} at {time}
                </p>
                <p className="text-sm text-gray-600">
                    Status: <span className="text-emerald-600 font-medium">{status}</span>
                </p>
            </div>

            <button
                className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-700 hover:via-red-600 hover:to-red-500 text-white px-5 py-2 rounded-lg text-sm font-semibold transition shadow"
            >
                Cancel
            </button>
        </div>
    )
}