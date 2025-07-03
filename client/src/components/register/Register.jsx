import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
    username: yup.string().required('Username is required!'),
    email: yup.string().email('Invalid email format!').required('Email is required!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password must match!').required('Confirm password is required!'),
})

// Register.jsx
export default function Register() {
    const navigate = useNavigate();
    const { register: registerUser } = useRegister();
    const { userLoginHandler } = useUserContext()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const registerHandler = async (data) => {
        try {
            const authData = await registerUser(data.username, data.email, data.password);
    
            userLoginHandler(authData);

            toast.success('Successfull registration!', {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })
    
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'Registration failed!', {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })
        }
    };

    const onError = (formError) => {
        const firstError = Object.values(formError)[0];

        if (firstError?.message) {
            toast.error(firstError.message, {
                position: 'top-center',
                autoClose: 2000,
                theme: 'dark',
            })
        }
    }

    return (
        <main className="bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen flex items-center justify-center py-16 px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-10 space-y-6 border border-slate-200">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-blue-900">Create an Account</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Book appointments with Victor Todorov easily and securely.
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(registerHandler, onError)} noValidate>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            {...register('username')}
                            placeholder="John Doe"
                            required
                        />
                    </div>

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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Repeat Password</label>
                        <input
                            type="password"
                            name="re-password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            {...register('confirmPassword')}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-lime-400 text-white font-semibold py-2 px-4 rounded-xl transition shadow hover:opacity-90"
                    >
                        {isSubmitting ? 'Processing...' : 'Register'}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-900 font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}
