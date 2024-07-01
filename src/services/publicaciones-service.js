import { API_BASE_URL, axios } from "./config";

export const endpoints_publicaciones = {

    getAllPublicaciones: () => `/publicaciones`,
    getPublicacionById: (id) => `/publicaciones/${id}`,
    getPublicacionCategoria: (id) => `/publicaciones/${id}/subcategorias`,
    postSubcategoria: (id) => `/publicaciones/${id}/subcategorias`,
    putEditar: (id) => `/publicaciones/${id}/publicar-switch/:action`,
    //no sé
    publicarSwitch: (publicacionId, action) => `/publicaciones/${publicacionId}/publicar-switch/${action}`

};

export const getAllPublicaciones = async() => {
    try {
        const response = await axios.get(API_BASE_URL+endpoints_publicaciones.getAllPublicaciones());
        return response.data
        
    } catch (error) {
        console.error('Error al mostrart todas las publicaciones: ', error);
        throw error;
    }
};

export const getPublicacionById = async(id) => {
    try {
        const response = await axios.get(API_BASE_URL+endpoints_publicaciones.getPublicacionById(id));
        return response.data
    } catch (error) {
        console.error('Error al mostrar la publicacion: ', error);
        throw error;
    }
};


export const getPublicacionCategoria = async(id) =>{
    try {
        const response = await axios.get(API_BASE_URL + endpoints_auth.getPublicacionCategoria(id));
        return response.data;
      } catch (error) {
        console.error('Error al obtener publicacion :', error);
        throw error;
      }
};

export const postPublicacionCategoria = async(id) =>{
    try {
        const response = await axios.post(API_BASE_URL + endpoints_auth.postPublicacionCategoria(id));
        return response.data;
      } catch (error) {
        console.error('Error al obtener publicacion :', error);
        throw error;
      }
};
//no sé 
export const publicarSwitchPublicacion = async (publicacionId, action) => {
    try {
        const response = await axios.put(API_BASE_URL + endpoints_publicaciones.publicarSwitch(publicacionId, action));
        return response.data;
    } catch (error) {
        console.error(`Error al cambiar el estado de publicación para la publicación ${publicacionId}:`, error);
        throw error;
    }
};