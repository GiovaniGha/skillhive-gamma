import { API_BASE_URL, axios } from "./config";

export const endpoints_ventas_compras = {

    //activos 
    getAllActivos: () => `/ventas-compras-activos/activos`,
    getActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    getActivosUsuario: () => `/ventas-compras-activos/activos/propios/usuario`,

    postActivo: () => `/ventas-compras-activos/activos`,
    postActivosUsuario: () => `/ventas-compras-activos/activos/propios/usuario`,
    
    putActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    putActivosRevision: (id) => `/ventas-compras-activos/publicaciones/${id}/subcategorias`,

    //carrito de compras
    getCarrito: () => `/ventas-compras-activos/carrito`,
    getActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,
    deleteActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`
};

//activos
export const getAllActivos = async () => {
    try {
      const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getAllActivos(), {
        validateStatus: function (status) {
            return status < 500;
        }
      });

      console.log('exito')
      if (response.status === 400) {
        console.error('Datos de activos incorrectos:', response.data);
        throw new Error('Datos de activos incorrectos');
      }
      return response.data;

    } catch (error) {
      console.error('Error fetching activos:', error);
      throw error;
    }
  };
  
  export const getActivoById = async (id) => {
    try {
      const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getActivoById(id), {
        validateStatus: function (status) {
            return status < 500;
        }
      });
      
      console.log('exito')
      if (response.status === 400) {
        console.error('Datos de activo incorrectos:', response.data);
        throw new Error('Datos de activo incorrectos');
      }
      return response.data;
    } catch (error) {
      console.error('Error fetching activo by ID:', error);
      throw error;
    }
  };
  
  export const getActivosUsuario = async () => {
    try {
      const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getActivosUsuario());
      return response.data;
    } catch (error) {
      console.error('Error fetching activos del usuario:', error);
      throw error;
    }
  };
  
  export const postActivo = async (activoData) => {
    try {
      const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.postActivo(), activoData);
      return response.data;
    } catch (error) {
      console.error('Error creating activo:', error);
      throw error;
    }
  };
  
  export const postActivosUsuario = async (activoData) => {
    try {
      const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.postActivosUsuario(), activoData);
      return response.data;
    } catch (error) {
      console.error('Error asociating activo to usuario:', error);
      throw error;
    }
  };
  
  export const putActivoById = async (id, activoData) => {
    try {
      const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putActivoById(id), activoData);
      return response.data;
    } catch (error) {
      console.error('Error updating activo by ID:', error);
      throw error;
    }
  };
  
  export const putActivosRevision = async (id, revisionData) => {
    try {
      const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putActivosRevision(id), revisionData);
      return response.data;
    } catch (error) {
      console.error('Error updating activo revision:', error);
      throw error;
    }
  };
  

  //carrito de compras :P
  export const getCarrito = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_carrito.getCarrito());
        return response.data;
    } catch (error) {
        console.error('Error fetching carrito:', error);
        throw error;
    }
};

export const getActivoCarrito = async (id) => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_carrito.getActivoCarrito(id));
        return response.data;
    } catch (error) {
        console.error(`Error fetching activo ${id} from carrito:`, error);
        throw error;
    }
};

export const deleteActivoCarrito = async (id) => {
    try {
        const response = await axios.delete(API_BASE_URL + endpoints_carrito.deleteActivoCarrito(id));
        return response.data;
    } catch (error) {
        console.error(`Error deleting activo ${id} from carrito:`, error);
        throw error;
    }
};
