import request from "../utils/request";

const baseUrl = 'http://localhost:3030/appointments';

export default {
    create(appointmentData) {
        return request.post(baseUrl, appointmentData)
    }
}