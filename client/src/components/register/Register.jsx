import { useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

// Register.jsx
export default function Register() {
    const navigate = useNavigate()
    const { register } = useRegister()
    const { userLoginHandler } = useContext(UserContext)

    const registerHandler = async (formData) => {
        const values = Object.fromEntries(formData)

        const rePassword = formData.get('re-password')

        if (rePassword !== values.passowrd) {
            console.log('Password mismatch!');
            
            return
        }

        const authData = await register(values.username, values.email, values.passowrd)

        userLoginHandler(authData)

        navigate('/')
    }

    return (
        <main className="bg-slate-50 min-h-screen flex items-center justify-center py-16 px-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8 space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-blue-900">Create an Account</h2>
                    <p className="text-sm text-gray-600">
                        Book appointments with Victor Todorov easily and securely.
                    </p>
                </div>

                <form className="space-y-4" action={registerHandler}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            placeholder="you@gmail.com"
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Repeat Password</label>
                        <input
                            type="password"
                            name="re-password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition shadow"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-900 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </main>
    );
}
