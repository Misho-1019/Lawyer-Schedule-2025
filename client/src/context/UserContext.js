import { createContext } from "react";

export const UserContext = createContext({
    id: '',
    username: '',
    email: '',
    token: '',
    userLoginHandler: () => null
}) 