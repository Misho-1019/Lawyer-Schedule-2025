import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function ClientGuard() {
    const { isAdmin } = useAuth()

    if (isAdmin) {
        return <Navigate to='/admin/dashboard'/>
    }

    return <Outlet />
}