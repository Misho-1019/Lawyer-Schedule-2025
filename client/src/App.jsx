import { useState } from 'react'
import './App.css'
import AdminAllAppointments from './components/admin/AllAppointments'
import BlockedTime from './components/blocked/BlockedTime'
import BookAppointment from './components/book/BookAppointment'
import AppointmentConfirmation from './components/confirmation/AppointmentConfirmation'
import AdminDashboard from './components/dashboard/AdminDashboard'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import RescheduleAppointment from './components/reschedule/RescheduleAppointment'
import MyAppointments from './components/user/MyAppointments'
import { Route, Routes } from "react-router";
import { UserContext } from './context/UserContext'

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler }}>
            <div>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>

                {/* <BookAppointment /> */}
                {/* <MyAppointments /> */}
                {/* <AppointmentConfirmation /> */}
                {/* <RescheduleAppointment /> */}
                {/* <AdminDashboard /> */}
                {/* <AdminAllAppointments /> */}
                {/* <BlockedTime /> */}
            </div>
        </UserContext.Provider>
    )
}

export default App
