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
import Logout from './components/logout/Logout'
import usePersistedState from './hooks/usePersistedState'

function App() {
    const [authData, setAuthData] = usePersistedState('auth', {});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData)
    }

    const userLogoutHandler = () => {
        setAuthData({})
    }

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/user/book' element={<BookAppointment />} />
                <Route path='/user/my-appointments' element={<MyAppointments />} />
                <Route path='/user/confirmation' element={<AppointmentConfirmation />} />
                <Route path='/user/reschedule' element={<RescheduleAppointment />} />
                <Route path='/admin/dashboard' element={<AdminDashboard />} />
                <Route path='/admin/all-appointments' element={<AdminAllAppointments />} />
                <Route path='/admin/block-time' element={<BlockedTime />} />
            </Routes>

            {/* <BookAppointment /> */}
            {/* <MyAppointments /> */}
            {/* <AppointmentConfirmation /> */}
            {/* <RescheduleAppointment /> */}
            {/* <AdminDashboard /> */}
            {/* <AdminAllAppointments /> */}
            {/* <BlockedTime /> */}
        </UserContext.Provider>
    )
}

export default App
