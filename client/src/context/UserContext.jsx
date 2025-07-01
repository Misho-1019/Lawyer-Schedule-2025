import { createContext, useContext } from "react";

export const UserContext = createContext({
    id: '',
    username: '',
    email: '',
    token: '',
    role: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
}) 

export function useUserContext() {
    const data = useContext(UserContext)

    return data
}