import axios from "./axios"

/*this is for get all services from backend*/
export const getServicesRequest = () => axios.get("/intranet")

/*this is for make a CRUD from backend  

export const getServiceRequest = (id) => axios.get(`/intranet/${id}`)
export const createServiceRequest = (service) => axios.post("/intranet", service)
export const updateServiceRequest = (id,service) => axios.put(`/intranet/${id}` , service)
export const deleteServiceRequest = (id) => axios.delete(`/intranet/${id}`)
*/