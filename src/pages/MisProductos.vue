<template>
    <div>
        <h1 class="text-center text-2xl">Activos comprados</h1>

        <div v-if="activosComprados.length > 0" class="flex flex-col gap-2">

            <div class="flex gap-4" v-for="producto in productos" :key="producto.id" v-bind="producto.id">
                <div >
                    <ProductoCard 
                        :id="producto.activo.id"
                        :usuario_id="producto.activo.publicacion.usuario.id"
                        :portada="producto.activo.publicacion.portada"
                        :titulo="producto.activo.publicacion.titulo"
                        :descripcion_corta="producto.activo.publicacion.descripcion_corta"
                        :precio="producto.activo.precio"
                        :nombre="producto.activo.publicacion.usuario.nombre"
                        :foto="producto.activo.publicacion.usuario.foto" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { obtenerActivosComprados } from '../services/ventas-compras-service';
import ProductoCard from '../components/catalogos/ProductoCard.vue';

const activosComprados = ref([]);

const handlerObtenerComprados = async () => {
    try {
        const data = await obtenerActivosComprados()
        activosComprados.value = data;
        console.log(activosComprados.value);
    } catch (error) {
        console.log(error);
    }
};

const esImagen = (archivo) => {
    return archivo.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) !== null;
};

onMounted(async () => {
    await handlerObtenerComprados();
});

</script>