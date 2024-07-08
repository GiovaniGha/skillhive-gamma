<template>
    <div>
        <section>
            <ComisionesTabMenu active="comisiones-pedidos" />

        </section>

        <section>
            <ul class="flex flex-col gap-2">
                <li v-for="comision in comisiones" :key="comision.id" >
                    <PedidoCard
                        :id="comision.id"
                        :fecha="comision.fecha"
                        :comision_id="comision.comision_id"
                        :subcategoria="comision.subcategoria"
                        :categoria="comision.categoria"
                        :descripcion_corta="comision.descripcion_corta"
                        :usuario_solicitante_id="comision.usuario_solicitante_id"
                        :nombre="comision.nombre"
                        :foto="comision.foto"
                    />
                  </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
    import ComisionesTabMenu from '../../components/openComission/ComisionesTabMenu.vue';
    import PedidoCard from '../../components/openComission/PedidoCard.vue';
    import { ref, onMounted } from 'vue';

    import { getAllComisiones } from '../../services/ventas-compras-service.js';

  const comision = ref([]);
  
  const fetchAllComisiones = async () => {
    try {
        const response = await getAllComisiones();
        console.log('response: ', response); // Verifica la estructura de response aquí

        comision.value = response.map(comision => ({
            id: comision.id || '',
            fecha: comision.created_at || '',
            comision_id: comision?.id || '',
            subcategoria: comision.comision_subcategoria?.subcategoria_id?.nombre || '',
            categoria: comision.comision_subcategoria?.subcategoria?.categoria?.nombre || '',
            descripcion_corta: comision.publicacion?.descripcion_corta || '',
            usuario_solicitante_id: comision.usuario?.usuario?.id || '',
            nombre: comision.usuario?.usuario?.nombre || '',
            foto: comision.usuario?.usuario?.foto || ''
        }));
        console.log('response: ', response);
        console.log('comisiones: ', comision.value);
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




