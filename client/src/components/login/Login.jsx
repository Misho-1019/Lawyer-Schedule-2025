import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email('Invalid email format!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!')
})

// Login.jsx
export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin();
    const { userLoginHandler } = useUserContext()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const loginHandler = async (data) => {
        try {
            const authData = await login(data.email, data.password)

            userLoginHandler(authData)

            toast.success('Successfull login!', {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })

            navigate('/')
        } catch (error) {
            toast.error(error.message || 'Login failed!', {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })
        }
    };

    const onError = (errors) => {
        const firstError = Object.values(errors)[0]

        if (firstError?.message) {
            toast.error(firstError.message, {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })
        }
    }

    return (
        <main className="bg-gradient-to-r from-slate-100 to-slate-200 min-h-screen flex items-center justify-center py-16 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-10 space-y-6 border border-slate-200">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Welcome Back</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Log in to manage your appointments with Victor Todorov.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(loginHandler, onError)} noValidate>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            {...register('email')}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            {...register('password')}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white font-semibold py-2 px-4 rounded-xl transition shadow hover:opacity-90 disabled:opacity-70"
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-blue-900 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </main>
    );
}
