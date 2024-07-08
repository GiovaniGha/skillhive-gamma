import {API_BASE_URL } from './config'
import axios from 'axios';
import { ref } from 'vue';


export const endpoints_auth = {

    getAllUsers: () => `/auth/users`,
    getUserbyId: (id) => `/auth/user/${id}`,
    login: () => `/auth/login`,
    registroFreelancer: () => `/auth/registro-freelancer`,
    registroEmpresa: () => `/auth/registro-empresa`,
    confirmarCorreo: (codigo) => `/auth/confirmar-correo/${codigo}`,
}

export const sesionActiva = ref(localStorage.getItem('token') !== null);

export const verificarSesionActiva = () => {
  sesionActiva.value = localStorage.getItem('token') !== null;
};

export const logout = () => {
    localStorage.removeItem('token');
    sesionActiva.value = false;
    console.log(sesionActiva.value)
  };

export const login = async (userData) => {
  try {
        const response = await axios.post(API_BASE_URL + endpoints_auth.login(), userData, {
        validateStatus: function (status) {
        return status < 500;
      }
    });
    console.log('exito');

    if (response.status === 400) {

      console.error('Datos de inicio de sesión incorrectos:', response.data);
      throw new Error('Datos de inicio de sesión incorrectos');
    }
    verificarSesionActiva();
    const token = response.data.token;
    localStorage.setItem('token', token);

    return response.data;
  } catch (error) {
    console.error('Error al ingresar:', error);
    throw error;
  }
};


export const registroFreelancer = async(userData) =>{
    try {
        const response = await axios.post(API_BASE_URL + endpoints_auth.registroFreelancer(), userData, {
            validateStatus: function (status) {
                return status < 500;
              }
            });
            console.log('exito')
            if (response.status === 400) {
              console.error('error de status:', response.data);
            }
            return response.data;
          } catch (error) {
            console.error('Error al registrar:', error);
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