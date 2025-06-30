import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";

export default function Loogut() {
    const { isLoggedOut } = useLogout()

    return isLoggedOut
        ? <Navigate to='/' />
        : null
}