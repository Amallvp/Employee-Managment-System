import BASE_URL from "./baseUrl"
import { commonStructure } from "./commonStructure"


//admin login

export const adminLoginApi = async (body) => {

   return await commonStructure('POST', `${BASE_URL}/admin/login`, body)
}


export const addEmployeeApi = async (body, headers) => {

   return await commonStructure('POST', `${BASE_URL}/admin/add-employee`, body, headers)
}

export const getAllEmployees = async (sdata) => {

   return await commonStructure('GET', `${BASE_URL}/admin/get-all-employees?search=${sdata}`, {})    // searching data by giving query parameter  
}

export const getEmployee = async (id) => {

   return await commonStructure('GET', `${BASE_URL}/admin/get-employee/${id}`, {})
}

export const deleteEmployeeApi = async (id) => {

   return await commonStructure('DELETE', `${BASE_URL}/admin/delete-employee/${id}`, {})
}

export const editEmployee = async (id, body, headers) => {

   return await commonStructure('PUT', `${BASE_URL}/admin/edit-employee/${id}`, body, headers)
}

export const filterStatus = async (data) => {

   return await commonStructure('GET', `${BASE_URL}/admin/filter?filterData=${data}`,{})
}