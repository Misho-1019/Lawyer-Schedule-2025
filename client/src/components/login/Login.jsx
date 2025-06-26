import { useNavigate } from "react-router";

// Login.jsx
export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();

    const loginAction = (formData) => {
        const email = formData.get('email')

        onLogin(email)

        navigate('/')
    }
    return (
        <main className="bg-slate-50 min-h-screen flex items-center justify-center py-16 px-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900">Welcome Back</h2>
                    <p className="text-sm text-gray-600">
                        Log in to manage your appointments with Victor Todorov.
                    </p>
                </div>

                <form className="space-y-4" action={loginAction}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition shadow"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-blue-900 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </main>
    );
}
