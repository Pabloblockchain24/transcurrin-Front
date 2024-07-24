/*import axios*/
import axios from "./axios";

/*login user*/
export const loginRequest = (user) => axios.post(`/login`, user);

/*send mail contact form*/
export const sendMailRequest  = (data) => axios.post("/sendMail", data)

/*send mail reset password*/
export const sendMailReset  = (data) => axios.post("/sendMailReset", data)

/* verify token*/
export const verifyTokenRequest = () => axios.get("/verify")


// export const registerRequest = (user) => axios.post(`/register`, user);
// export const verificarCorreo = (data) => axios.post("/verifyEmail", data)