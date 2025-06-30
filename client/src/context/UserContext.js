import { createContext } from "react";

export const UserContext = createContext({
    id: '',
    username: '',
    email: '',
    token: '',
    role: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null,
}) 