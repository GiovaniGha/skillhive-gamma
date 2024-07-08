import axios from "axios";
import { API_BASE_URL } from "./config";

export const endpoints_ventas_compras = {

    //activos 
    getAllActivos: () => `/ventas-compras-activos/activos`,
    getActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    getActivosUsuario: () => `/ventas-compras-activos/activos/propios/usuario`,

    postActivo: () => `/ventas-compras-activos/activos`,
    postActivosUsuario: () => `/ventas-compras-activos/activos/propios/usuario`,
    
    putActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    putActivosRevision: (id) => `/ventas-compras-activos/publicaciones/${id}/subcategorias`,

    //comisiones
    getAllComisiones: () => `/ventas-compras-activos/comisiones`,
    getComisionById: (id) => `/ventas-compras-activos/comisiones/${id}`,
    postComision: () => `/ventas-compras-activos/comisiones`,
    putComisionById: (id) => `/ventas-compras-activos/comisiones/${id}`,
    getComisionesRecibidas: () => `/ventas-compras-activos/comisiones/solicitudes/recibidas`,
    getComisionesRecibidasById: (id) => `/ventas-compras-activos/comisiones/solicitudes/recibidas/${id}`,
    putComisionRecibidaAceptar: (id, action) => `/ventas-compras-activos/comisiones/solicitudes/recibidas/${id}/${action}`,
    putComisionRecibidaCancelar: (id) => `/ventas-compras-activos/comisiones/cancelar/${id}`,
    postComisionRecibida: (id) => `/ventas-compras-activos/comisiones/entregar/${id}`,


    //carrito de compras
    getCarrito: () => `/ventas-compras-activos/carrito`,
    getActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,
    deleteActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`
};

//activos
export const getAllActivos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL + endpoints_ventas_compras.getAllActivos()}?fecha_orden=ASC`, {
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
      const response = await axios.get(`${API_BASE_URL + endpoints_ventas_compras.getActivoById(id)}?fecha_orden=ASC`, {
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
  

  //comisiones
export const getAllComisiones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL + endpoints_ventas_compras.getAllComisiones()}?fecha_orden=ASC`, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comisiones incorrectos:', response.data);
      throw new Error('Datos de comisiones incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching comisiones:', error);
    throw error;
  }
};

export const getComisionById = async (id) => {
  try {
    const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getComisionById(id), {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision incorrectos:', response.data);
      throw new Error('Datos de comision incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching comision by ID ${id}:`, error);
    throw error;
  }
};

export const postComision = async (comisionData) => {
  try {
    const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.postComision(), comisionData, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision incorrectos:', response.data);
      throw new Error('Datos de comision incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error('Error creating comision:', error);
    throw error;
  }
};

export const putComisionById = async (id, comisionData) => {
  try {
    const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putComisionById(id), comisionData, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision incorrectos:', response.data);
      throw new Error('Datos de comision incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error updating comision by ID ${id}:`, error);
    throw error;
  }
};

export const getComisionesRecibidas = async () => {
  try {
    const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getComisionesRecibidas(), {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comisiones recibidas incorrectos:', response.data);
      throw new Error('Datos de comisiones recibidas incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching comisiones recibidas:', error);
    throw error;
  }
};

export const getComisionesRecibidasById = async (id) => {
  try {
    const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getComisionesRecibidasById(id), {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error(`Datos de comision recibida incorrectos para ID ${id}:`, response.data);
      throw new Error('Datos de comision recibida incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error fetching comision recibida by ID ${id}:`, error);
    throw error;
  }
};

export const putComisionRecibidaAceptar = async (id, action) => {
  try {
    const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putComisionRecibidaAceptar(id, action), {}, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision recibida aceptar incorrectos:', response.data);
      throw new Error('Datos de comision recibida aceptar incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error accepting comision recibida by ID ${id}:`, error);
    throw error;
  }
};

export const putComisionRecibidaCancelar = async (id) => {
  try {
    const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putComisionRecibidaCancelar(id), {}, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision recibida cancelar incorrectos:', response.data);
      throw new Error('Datos de comision recibida cancelar incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error canceling comision recibida by ID ${id}:`, error);
    throw error;
  }
};

export const postComisionRecibida = async (id) => {
  try {
    const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.postComisionRecibida(id), {}, {
      validateStatus: function (status) {
        return status < 500;
      }
    });

    if (response.status === 400) {
      console.error('Datos de comision recibida incorrectos:', response.data);
      throw new Error('Datos de comision recibida incorrectos');
    }
    return response.data;
  } catch (error) {
    console.error(`Error posting comision recibida by ID ${id}:`, error);
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
