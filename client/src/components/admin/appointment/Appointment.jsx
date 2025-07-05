export default function Appointment({
    _id,
    email,
    username,
    date,
    time,
    status,
}) {
    const onDate = new Date(date)

    const formattedDate = onDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <tr className="hover:bg-gray-50 transition">
            <td className="px-4 py-3 text-sm text-gray-700">{username}</td>
            <td className="px-4 py-3 text-sm text-gray-500">{email}</td>
            <td className="px-4 py-3 text-sm">{formattedDate}</td>
            <td className="px-4 py-3 text-sm">{time}</td>
            <td className="px-4 py-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium
                                            ${status === 'confirmed' ? 'bg-emerald-100 text-emerald-700'
                        : status === 'pending' ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'}`}>
                    {status}
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
    )
}