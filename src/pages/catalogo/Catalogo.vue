<template>
    <div class="flex flex-col">

            <div>
                <Buscar class=""> </Buscar>
            </div>
            
            <div class=" flex">
                <Filtro> </Filtro>
                
                    <div v-if="currentRoute.path === '/catalogo/comisiones'" class="flex flex-wrap gap-2">
                        <ComisionCard></ComisionCard>
                        <ComisionCard></ComisionCard>
                    </div>

                    <div v-if="currentRoute.path === '/catalogo/publicaciones'" class="flex flex-wrap gap-2">
                        <PublicacionCard></PublicacionCard>

                    </div>

                    <div v-if="currentRoute.path === '/catalogo/empleos'" class="flex flex-col gap-2">
                        <EmpleoCard></EmpleoCard>

                    </div>

                    <div v-if="currentRoute.path === '/catalogo/productos'" class="flex flex-wrap gap-2">
                        <ProductoCard
                        :portada="producto.portada"
                        :titulo="producto.titulo"
                        :descripcion_corta="producto.descripcion_corta"
                        :precio="producto.precio"
                        :nombre="usuario.nombre"
                        :foto="usuario.foto"
                      >   
                      </ProductoCard>                     
                    </div>
            </div>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    import Filtro from '../../components/catalogos/Filtro.vue';
    import Buscar from '../../components/catalogos/Buscar.vue';
    import ComisionCard from '../../components/catalogos/ComisionCard.vue';
    import EmpleoCard from '../../components/catalogos/EmpleoCard.vue';
    import ProductoCard from '../../components/catalogos/ProductoCard.vue';
    import PublicacionCard from '../../components/publicaciones/PublicacionCard.vue';

    const route = useRoute();
    const currentRoute = ref(route);

    const producto = ref({});
    const usuario = ref({});

    onMounted(async () => {
  // Simulación de llamada a la API
    producto.value = {
        portada: '/banner.jpg',
        titulo: 'Título del Producto',
        descripcion_corta: 'Descripción del Producto',
        precio: '50.00',
    };

    usuario.value = {
        nombre: 'Nombre del Usuario',
        foto: '/logo.png',
    };
    });
    onMounted(() => {
    console.log(currentRoute.value);
    });
</script>

