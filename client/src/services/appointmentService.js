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
    }
}