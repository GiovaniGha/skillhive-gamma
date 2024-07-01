import { API_BASE_URL, axios } from "./config";


export const endpoints_auth = {

    getAllUsers: () => `/users`,
    getUserbyId: (id) => `/user/${id}`,
    login: () => `/login`,
    registroFreelancer: () => `/registro-freelancer`,
    registroEmpresa: () => `/registro-empresa`,
    confirmarCorreo: (codigo) => `/confirmar-correo/${codigo}`,
}


export const login = async(userData) => { 
  try {
      const response = await axios.post(API_BASE_URL + endpoints_auth.login(),userData);
      return response.data;
    } catch (error) {
      console.error('Error al ingresar:', error);
      throw error;
    }
  };


export const registroFreelancer = async(userData) =>{
    try {
        const response = await axios.post(API_BASE_URL + endpoints_auth.registroFreelancer(), userData);
        return response.data;
      } catch (error) {
        console.error('Error de registro:', error);
        throw error;
      }
};


export const registroEmpresa = async(userData) =>{
    try {
        const response = await axios.post(API_BASE_URL + endpoints_auth.registroEmpresa(), userData);
        return response.data;
      } catch (error) {
        console.error('Error de registro:', error);
        throw error;
      }
};

export const confirmarCorreo = async(codigo) =>{
    try {
        const response = await axios.get(API_BASE_URL + endpoints_auth.confirmarCorreo(codigo));
        return response.data;
      } catch (error) {
        console.error('Error de confirmación:', error);
        throw error;
      }
};


export const getAllUsers = async (id) => {
    try {
    const response = await axios.get(API_BASE_URL + endpoints_auth.getAllUsers());
    return response.data;
    } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
    }
};


export const getUserbyId = async (id) => {
    try {
    const response = await axios.get(API_BASE_URL + endpoints_auth.getUserbyId(id));
    return response.data;
    } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
    }
};