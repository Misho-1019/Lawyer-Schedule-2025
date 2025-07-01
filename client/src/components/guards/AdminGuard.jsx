import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function AdminGuard() {
    const { isAdmin } = useAuth()

    if (!isAdmin) {
        return <Navigate to='/'/>
    }

    return <Outlet />
}