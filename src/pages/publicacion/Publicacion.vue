<template>
    <div class="flex flex-col gap-3">
            
            <div class="">
                <div v-if="currentRoute.path === `/publicacion/${id_ruta}/${tipo}`" class="flex flex-wrap gap-2">
                    <ActivoPage
                        :id="id" 
                        :titulo="titulo" 
                        :descripcion="descripcion" 
                        :precio="precio" 
                        :categoria="categoria" 
                        :subcategoria="subcategoria"
                        :archivo="archivo"
                        :nombre="nombre"
                        :ocupacion="ocupacion"
                        :foto="foto"
                        > 
                    </ActivoPage>
                    </div>

                    <div v-if="currentRoute.path === '/publicacion/id_publicacion/publicacion'" class="flex flex-col gap-2">
                        publi
                    </div>

            </div>
    </div>
</template>

<script setup>
   
   import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ActivoPage from '../../components/publicaciones/ActivoPage.vue';
import { getActivoById } from '../../services/ventas-compras-service';

const route = useRoute();
const currentRoute = ref(route);

const id_ruta = route.params.id;
const tipo = route.params.tipo;

const id = ref(null);
const titulo = ref(''); 
const descripcion = ref(''); 
const precio = ref(''); 
const categoria = ref(''); 
const subcategoria = ref(''); 
const archivo = ref(''); 

const nombre = ref(''); 
const ocupacion = ref(''); 
const foto = ref(''); 

const fetchActivo = async () => {
  try {
    const data = await getActivoById(id_ruta);
    if (data) {
      id.value = data.id;
      titulo.value = data.publicacion?.titulo;
      descripcion.value = data.publicacion?.descripcion_corta;
      precio.value = data.precio;
      subcategoria.value = data.publicacion?.subcategoria_nombre;
      archivo.value = data.archivo;
      nombre.value = data.publicacion?.usuario.nombre;
      foto.value = data.publicacion?.usuario.foto;
      console.log('data:', data);
    }
  } catch (error) {
    console.error('Error al obtener el activo:', error);
  }
};

onMounted(fetchActivo);


</script>



