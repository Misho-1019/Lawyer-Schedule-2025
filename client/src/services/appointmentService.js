import request from "../utils/request";

const baseUrl = 'http://localhost:3030/appointments';

export default {
    async getAllClient() {
        const result = await request.get(baseUrl)

        const appointments = Object.values(result)

        return appointments;
    },
    create(appointmentData) {
        return request.post(baseUrl, appointmentData)
    },
    async getAllAdmin() {
        const result = await request.get(`${baseUrl}/admin`)

        const appointments = Object.values(result)

        return appointments
    },
    getOneAdmin(appointmentId) {
        return request.get(`${baseUrl}/admin/${appointmentId}`)
    },
    deleteAdmin(appointmentId) {
        return request.delete(`${baseUrl}/${appointmentId}`)
    },
    edit(appointmentId, appointmentData) {
        return request.patch(`${baseUrl}/${appointmentId}`, appointmentData)
    }
}