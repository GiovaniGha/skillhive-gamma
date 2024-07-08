import {API_BASE_URL } from './config' 
import axios from 'axios';


export const endpoints_publicaciones = {
    getPublicacionById: (id) => `/gestion-publicaciones/publicaciones/${id}/subcategoria`,
    getAllPublicaciones: () => `/gestion-publicaciones/publicaciones`,
    putEditar: (id) => `/gestion-publicaciones/publicaciones/${id}/publicar-switch/:action`,
    publicarSwitch: (publicacionId, action) => `/gestion-publicaciones/publicaciones/${publicacionId}/publicar-switch/${action}`,
    getCategorias: () => `/gestion-publicaciones/categorias`,
    getSubcategorias: () => `/gestion-publicaciones/subcategorias?catid=3`,
    getEspecialidades: () => `/gestion-publicaciones/especialidades`,
    getSubespecialidades: () => `/gestion-publicaciones/subespecialidades?espid=1`,
};

export const getPublicacionById = async (id) => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_publicaciones.getPublicacionById(id), {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching publicacion by id:', error);
        throw error;
    }
};


export const getAllPublicaciones = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL + endpoints_publicaciones.getAllPublicaciones()}?fecha_orden=ASC`, {

            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching publicacion by id:', error);
        throw error;
    }
};

export const editarPublicacion = async (id, action) => {
    try {
        const response = await axios.put(API_BASE_URL + endpoints_publicaciones.putEditar(id).replace(':action', action), {}, {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error editing publicacion:', error);
        throw error;
    }
};

export const publicarSwitch = async (publicacionId, action) => {
    try {
        const response = await axios.put(API_BASE_URL + endpoints_publicaciones.publicarSwitch(publicacionId, action), {}, {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error switching publicacion state:', error);
        throw error;
    }
};

export const getCategorias = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_publicaciones.getCategorias(), {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching categorias:', error);
        throw error;
    }
};

export const getSubcategorias = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_publicaciones.getSubcategorias(), {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching subcategorias:', error);
        throw error;
    }
};

export const getEspecialidades = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_publicaciones.getEspecialidades(), {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching especialidades:', error);
        throw error;
    }
};

export const getSubespecialidades = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_publicaciones.getSubespecialidades(), {
            validateStatus: function(status) {
                return status < 500;
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching subespecialidades:', error);
        throw error;
    }
};
