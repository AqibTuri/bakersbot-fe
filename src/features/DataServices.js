import http from "./http-common";

class DataServices{
    // Users
    signin(data){
        return http.post(`/users/sigin`, data);
    }
    signup(data){
        return http.post(`/users/signup`, data)
    }
    changePassword(data){
        return http.patch(`/users/update/password`, data, {
            withCredentials: true,
        })
    }
    getUserById(data){
        return http.get(`/users/get/_id/${data}`)
    }
    userForgot(data){
        return http.post(`/users/forget`, data)
    }
    validateOtp(data){
        return http.post(`/users/validate-otp`, data)
    }
    resetPassword(data){
        return http.post(`/users/reset-password`, data)
    }
    logout(data){
        return http.post(`/users/logout`, data)
    }
    sendUsername(data){
        return http.post(`/users/send-username`, data)
    }

    //Payments
    getPaymentLink(){
        return http.get(`/payments/link`)
    }
    validatePayment(token){
        return http.get(`/payments/get/_id/` + token)
    }
}

export default new DataServices();