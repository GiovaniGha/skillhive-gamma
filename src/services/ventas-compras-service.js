import { API_BASE_URL, axios } from "./config";

export const endpoints_ventas_compras = {

    //activos 
    getAllActivos: () => `/ventas-compras-activos/activos`,
    getActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    getActivosUsuario: () => `/ventas-compras-activos/activos/propios/usuario`,
    getActivoPropio: (id) => `/ventas-compras-activos/activos/propios/usuario/${id}`,

    postActivo: () => `/ventas-compras-activos/activos`,
    
    putActivoById: (id) => `/ventas-compras-activos/activos/${id}`,
    putActivosRevision: (id) => `/ventas-compras-activos/publicaciones/${id}/subcategorias`,

    //carrito de compras
    getCarrito: () => `/ventas-compras-activos/carrito`,
    getActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,
    deleteActivoCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,

    mandarRevision: (id, action) => `/ventas-compras-activos/activos/${id}/a-revision/${action}`,

    // pagos
    pagarActivoCrearOrden: (id) => `/ventas-compras-activos/pagar/crear-orden/activo/${id}`,
    pagarActivoAprobarOrden: (id, orden) => `/ventas-compras-activos/pagar/aprobar-orden/activo/${id}/${orden}`,
    pagarCarritoCrearOrden: () => `/ventas-compras-activos/pagar/crear-orden/carrito`,
    pagarCarritoAprobarOrden: (orden) => `/ventas-compras-activos/pagar/pagar-orden/carrito/${orden}`,

    // Carrito
    obtenerCarrito: () => `/ventas-compras-activos/carrito`,
    agregarAlCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,
    eliminarDelCarrito: (id) => `/ventas-compras-activos/carrito/${id}`,
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

export const getActivoPropio = async (id) => {
  try {
    const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.getActivoPropio(id), {
      headers: {
        'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching activo propio:', error);
    throw error;
  }
}
  
  export const postActivo = async (activoData) => {
    try {
      const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.postActivo(), activoData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-token': localStorage.getItem('token'),
        },
      });
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
      const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.putActivoById(id), activoData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes',
        }
      });
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

export const mandarRevision = async (id, action) => {
    try {
        const response = await axios.put(API_BASE_URL + endpoints_ventas_compras.mandarRevision(id, action), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error mandando activo ${id} a revision:`, error);
        throw error;
    }
};

export const pagarActivoCrearOrden = async (id) => {
    try {
        const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.pagarActivoCrearOrden(id), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error pagando activo ${id} crear orden:`, error);
        throw error;
    }
};

export const pagarActivoAprobarOrden = async (id, orden) => {
    try {
        const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.pagarActivoAprobarOrden(id, orden), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error pagando activo ${id} aprobar orden:`, error);
        throw error;
    }
};

export const pagarCarritoCrearOrden = async () => {
    try {
        const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.pagarCarritoCrearOrden(), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error pagando carrito crear orden:', error);
        throw error;
    }
};

export const pagarCarritoAprobarOrden = async (orden) => {
    try {
        const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.pagarCarritoAprobarOrden(orden), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error pagando carrito aprobar orden ${orden}:`, error);
        throw error;
    }
};

export const obtenerCarrito = async () => {
    try {
        const response = await axios.get(API_BASE_URL + endpoints_ventas_compras.obtenerCarrito(), {
          headers: {
            'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDQ2MjAzLCJleHAiOjE3MjA1MzI2MDN9.jvVoiAEAPLsUYF0_SqEFhwvVcn_ZeRcF4LjRouucmTU'
          }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching carrito:', error);
        throw error;
    }
};

export const agregarAlCarrito = async (id) => {
    try {
        const response = await axios.post(API_BASE_URL + endpoints_ventas_compras.agregarAlCarrito(id), {}, {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error adding activo ${id} to carrito:`, error);
        throw error;
    }
};

export const eliminarDelCarrito = async (id) => {
    try {
        const response = await axios.delete(API_BASE_URL + endpoints_ventas_compras.eliminarDelCarrito(id), {
            headers: {
              'x-token': localStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwNDA1OTM0LCJleHAiOjE3MjA0OTIzMzR9.Dp4FqZNPbJ77RJLUsJInpmhoUpA9IaXj-aarNMRBhes'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error deleting activo ${id} from carrito:`, error);
        throw error;
    }
};
