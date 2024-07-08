<template>
    <div class="flex flex-col h-full gap-8  p-2">

        <section>
            <ComisionesTabMenu active="comisiones-hojas" />
        </section>

        <div class="h-full">
            <section class="flex flex-col gap-16 justify-center items-center">
                <h2 class="text-5xl">Agrega una nueva hoja de comisión</h2>
                <div>
                        <button type="button" @click="agregarHoja" class="btn btn-lg btn-primary btn-circle">
                            <RouterLink to="/open-comission/crear-hoja">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                            </RouterLink>
                        </button>
    
                </div>
            </section>

        </div>

        
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';

    import ComisionesTabMenu from '../../components/openComission/ComisionesTabMenu.vue';

    import { getAllComisiones, postComision } from '../../services/ventas-compras-service.js';
import { RouterLink } from 'vue-router';

  const hoja = ref([]);
  
  const fetchAllComisiones = async () => {
    try {
        const response = await getAllComisiones();
        console.log('response: ', response); // Verifica la estructura de response aquí

        hoja.value = response.map(hoja => ({
            id: hoja.id || '',
            titulo: hoja.titulo || '',
            descripcion: hoja.descripcion || '',
            imagen: hoja.imagen || '',
            precio: hoja.precio || '',
            subcategoria: hoja.comision_subcategoria?.subcategoria_id?.nombre || '',
            categoria: hoja.comision_subcategoria?.subcategoria?.categoria?.nombre || '',
        }));
        console.log('response: ', response);
        console.log('comisiones: ', hoja.value);
    } catch (error) {
        console.error('Error al obtener las comisiones:', error);
    }
};

  
  onMounted(async () => {
    try {
        await fetchAllComisiones();
    } catch (error) {
      console.error('Error al cargar las comisiones:', error);
    }
    
});
</script>

