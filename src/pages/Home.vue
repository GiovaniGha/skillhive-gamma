<template>
    <div class="w-full">
        <section class="flex flex-col">
            <h1 class="text-2xl">Inicio</h1>
        </section>

        <section class="flex flex-col gap-1 mt-2 border-b-2 border-b-primary pb-3 ">
            <div class="flex justify-between items-center">
                <h2>Publicaciones más populares</h2>
                <button class="btn"> <RouterLink to="/catalogo/publicaciones"> Ver más </RouterLink></button>
            </div>

            <div class="flex flex-wrap overflow-y-hidden" style="max-height: calc(2 * 14rem + 1rem);">
                <ul class="flex flex-wrap gap-2 overflow-y-hidden">
                    <li v-for="publicacion in publicaciones" :key="publicacion.id" >
                        <PublicacionCard
                          :id="publicacion.id"
                          :publicacion_id="publicacion.publicacion_id"
                          :usuario_id="publicacion.usuario_id"
                          :portada="publicacion.portada"
                          :titulo="publicacion.titulo"
                          :descripcion_corta="publicacion.descripcion_corta"
                          :precio="publicacion.precio"
                          :nombre="publicacion.nombre"
                          :foto="publicacion.foto"
                        />
                      </li>
                </ul>
            </div>
        </section>

        <section class="flex flex-col w-full overflow-x-auto mt-2 border-b-2 border-b-primary/40 pb-4 ">
            <div class="flex justify-between items-center">
              <h2>Recursos más populares</h2>
              <button class="btn"> <RouterLink to="/catalogo/productos"> Ver más </RouterLink></button>
            </div>
          
            <div class="flex overflow-auto">
              <ul class="flex gap-2 overflow-x-auto">
                <li v-for="activo in activos" :key="activo.id" class="flex-auto">
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
          </section>
          

          <section class="flex flex-col gap-1 mt-3">
            <div class="flex justify-between items-center">
                <h2>Más recientes</h2>
            </div>

            <div class="flex flex-wrap  ">
                <ul class="flex flex-wrap gap-2 overflow-y-hidden">
                    <li v-for="publicacion in publicaciones" :key="publicacion.id" >
                        <PublicacionCard
                          :id="publicacion.id"
                          :publicacion_id="publicacion.publicacion_id"
                          :usuario_id="publicacion.usuario_id"
                          :portada="publicacion.portada"
                          :titulo="publicacion.titulo"
                          :descripcion_corta="publicacion.descripcion_corta"
                          :precio="publicacion.precio"
                          :nombre="publicacion.nombre"
                          :foto="publicacion.foto"
                        />
                      </li>
                </ul>
            </div>
        </section>

    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { RouterLink } from 'vue-router';

    import ProductoCard from '../components/catalogos/ProductoCard.vue'
    import PublicacionCard from '../components/publicaciones/PublicacionCard.vue';
    import { getAllPublicaciones } from '../services/publicaciones-service';
    import { getAllActivos } from '../services/ventas-compras-service';
    
    
    const publicaciones = ref([]);
    const activos = ref([]);


    const fetchPublicaciones = async () => {
    try {
        const response = await getAllPublicaciones();
        
        // Verificar si 'publicaciones' existe en la respuesta
        if (response && Array.isArray(response.publicaciones)) {
            // Mapear las publicaciones si existe la propiedad 'publicaciones'
            publicaciones.value = response.publicaciones.map(publicacion => ({
                id: publicacion.id || '',
                portada: publicacion?.portada || '',
                titulo: publicacion?.titulo || '',
                usuario_id: publicacion?.usuario?.id || '',
                nombre: publicacion?.usuario?.nombre || '',
                foto: publicacion?.usuario?.foto || '',
                ocupacion: publicacion?.usuario?.ocupacion || '',
            }));
            
            console.log('Publicaciones:', publicacion.value);
        } else {
            console.error('El objeto de respuesta no contiene una propiedad válida de publicaciones:', response);
        }
    } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
    }
};
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
            console.log('response de activos: ', response);

        } catch (error) {
            console.error('Error al obtener los activos:', error);
        }
    };

    onMounted(async () => {
        try {
            await fetchAllActivos();
            await fetchPublicaciones();
        } catch (error) {
            console.error('Error al cargar publicaciones y activos:', error);

        }
    })

</script>