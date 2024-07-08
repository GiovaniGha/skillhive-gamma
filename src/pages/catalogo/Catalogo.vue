<template>
    <div class="flex flex-col gap-3">

            <div>
                <Buscar :categorias="categorias" :subCategorias="subCategorias" />
            </div>
            
            <div class="">
                
                    <div v-if="currentRoute.path === '/catalogo/comisiones'" class="flex flex-wrap gap-2">
                        <ul class="flex flex-wrap gap-2">
                            <li v-for="comision in comisiones" :key="comision.id" >
                                <ComisionCard
                                    :id="comision.id"
                                    :titulo="comision.titulo"
                                    :descripcion="comision.descripcion"
                                    :precio="comision.precio"
                                    :imagen="comision.portada"
                                />
                              </li>
                        </ul>
                    </div>

                    <div v-if="currentRoute.path === '/catalogo/publicaciones'" class="flex flex-wrap gap-2">
                        <PublicacionCard></PublicacionCard>

                    </div>

                    <div v-if="currentRoute.path === '/catalogo/empleos'" class="flex flex-col gap-2">
                        <EmpleoCard></EmpleoCard>

                    </div>

                    <div v-if="currentRoute.path === '/catalogo/productos'" class="flex  ">
                        <ul class="flex flex-wrap gap-2">
                            <li v-for="activo in activos" :key="activo.id" >
                                <ProductoCard
                                  :id="activo.id"
                                  :publicacion_id="activo.publicacion_id"
                                  :usuario_id="activo.usuario_id"
                                  :portada="activo.portada"
                                  :titulo="activo.titulo"
                                  :descripcion_corta="activo.descripcion_corta"
                                  :precio="activo.precio"
                                  :nombre="activo.nombre"
                                  :foto="activo.foto"
                                />
                              </li>
                        </ul>
                    </div>
            </div>
    </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  import { getAllActivos, getAllComisiones } from '../../services/ventas-compras-service.js';
  import { getCategorias, getSubcategorias } from '../../services/publicaciones-service';

  import ProductoCard from '../../components/catalogos/ProductoCard.vue';
  import ComisionCard from '../../components/catalogos/ComisionCard.vue';
  import PublicacionCard from '../../components/publicaciones/PublicacionCard.vue';
  import EmpleoCard from '../../components/catalogos/EmpleoCard.vue';
  import Buscar from '../../components/catalogos/Buscar.vue';  

  const route = useRoute();
  const currentRoute = ref(route);

  const categorias = ref([]);
  const subCategorias = ref([]);

  const activos = ref([]);
  const comisiones = ref([]);

    const fetchAllActivos = async () => {
        try {
            const response = await getAllActivos();
            activos.value = response.activos.map(activo => ({
                id: activo.id || '',
                precio: activo.precio || '',
                publicacion_id: activo.publicacion?.id || '',
                portada: activo.publicacion?.portada || '',
                titulo: activo.publicacion?.titulo || '',
                descripcion_corta: activo.publicacion?.descripcion_corta || '',
                
                usuario_id: activo.publicacion?.usuario?.id || '',
                nombre: activo.publicacion?.usuario?.nombre || '',
                foto: activo.publicacion?.usuario?.foto || ''
            }));
            console.log('response:: ', response);

            console.log('activos: ' , activos.value);

        } catch (error) {
            console.error('Error al obtener los activos:', error);
        }
    };
    
    const fetchAllComisiones = async () => {
        try {
            const response = await getAllComisiones();
            comisiones.value = response.comisiones.map(comision => ({
                id: comision.id || '',
                titulo: comision.titulo || '',
                descripcion: comision.descripcion || '',
                precio: comision.precio || '',
                imagen: comision.imagen || '',
               
            }));
            console.log('response:: ', response);

            console.log('comisiones: ' , comisiones.value);

        } catch (error) {
            console.error('Error al obtener las comisiones:', error);
        }
    };

    const recibirCategorias = async () => {
  try {
    const response = await getCategorias();
    categorias.value = response;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
  }
};
    const recibirSubcategorias = async () => {
  try {
    const response = await getSubcategorias();
    subCategorias.value = response;
  } catch (error) {
    console.error('Error al obtener subcategorías:', error);
  }
};


  
  onMounted(async () => {
    try {
        await recibirCategorias();
        await recibirSubcategorias();
    } catch (error) {
      console.error('Error al cargar categorías y subcategorías:', error);
    }

    fetchAllActivos();
    fetchAllComisiones();
});
  </script>
  