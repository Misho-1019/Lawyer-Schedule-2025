import { Route, Routes } from "react-router";
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
import Logout from './components/logout/Logout'
import { UserProvider } from './providers/UserProvider'
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";
import AdminGuard from "./components/guards/AdminGuard";
import ClientGuard from "./components/guards/ClientGuard";
import { ToastContainer } from "react-toastify";
import UpdatePage from "./components/update/UpdatePage";

function App() {

    return (
        <UserProvider>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />

                <Route element={<AuthGuard />}>
                    <Route path='/logout' element={<Logout />} />
                    <Route element={<AdminGuard />}>
                        <Route path='/admin/stats' element={<AdminDashboard />} />
                        <Route path='/admin/appointments' element={<AdminAllAppointments />} />
                        <Route path='/admin/block-time' element={<BlockedTime />} />
                        <Route path='/admin/update' element={<UpdatePage />} />
                    </Route>
                    <Route element={<ClientGuard />}>
                        <Route path='/user/book' element={<BookAppointment />} />
                        <Route path='/user/my-appointments' element={<MyAppointments />} />
                        <Route path='/user/confirmation' element={<AppointmentConfirmation />} />
                        <Route path='/user/reschedule' element={<RescheduleAppointment />} />
                    </Route>
                </Route>
                <Route element={<GuestGuard />} >
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>

            {/* <BookAppointment /> */}
            {/* <MyAppointments /> */}
            {/* <AppointmentConfirmation /> */}
            {/* <RescheduleAppointment /> */}
            {/* <AdminDashboard /> */}
            {/* <AdminAllAppointments /> */}
            {/* <BlockedTime /> */}
            <ToastContainer />
        </UserProvider>
    )
}

export default App
