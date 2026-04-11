import axios from "axios";

export const getForms = ()=>axios.get("/api/master/forms")

export const addForm = (data)=>axios.post("/api/master/forms",data)

export const getApplications = ()=>axios.get("/api/master/applications")

export const getPackaging = ()=>axios.get("/api/master/packaging")

export const getSpecifications = ()=>axios.get("/api/master/specifications")