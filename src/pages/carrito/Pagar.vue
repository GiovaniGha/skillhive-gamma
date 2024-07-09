<template>
    <div>

        <section v-if="tipo === 'carrito'">
            <h1 class="text-center text-2xl font-bold mb-5">Comprar productos del carro</h1>
            <div class="flex gap-4 justify-center px-20">
                <div class="bg-base-200 rounded-md p-4  w-full">
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Vendedor</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                        </thead>

                        <tbody>
                            <!-- row 1 -->
                            <tr v-for="(item, index) in carrito" :key="index">
                                <th>{{ index + 1 }}</th>
                                <td>{{ item.activo.publicacion.usuario.nombre }}</td>
                                <td>{{ item.activo.publicacion.titulo }}</td>
                                <td>{{ item.activo.precio }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class=" w-full">
                    <PayPalButton modo="carrito" />
                </div>
            </div>
        </section>


        <section v-if="tipo === 'activo'">
            <div v-if="activo">
                <ProductoCard 
                    :id="activo.id"
                    :publicacion_id="activo.publicacion.id"
                    :usuario_id="activo.publicacion.usuario.id"
                    :portada="activo.publicacion.portada"
                    :titulo="activo.publicacion.titulo"
                    :descripcion_corta="activo.publicacion.descripcion_corta"
                    :precio="activo.precio"
                    :nombre="activo.publicacion.usuario.nombre"
                    :foto="activo.publicacion.usuario.foto" />
            </div>
            <div>
                <PayPalButton modo="activo" :activoid="id" />
            </div>
        </section>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { obtenerCarrito, getActivoById } from '../../services/ventas-compras-service';
import ProductoCard from '../../components/catalogos/ProductoCard.vue';
import PayPalButton from '../../components/ventas/PayPalButton.vue';

const route = useRoute();
const id = route.params.id;
const tipo = route.path.split('/')[2];

const carrito = ref([]);
const activo = ref(null);

const handlerCargarCarrito = async () => {
    try {
        const data = await obtenerCarrito();
        carrito.value = data;
        console.log(carrito.value);
    } catch (error) {
        console.log(error);
    }
};

const handlerCargarActivo = async () => {
    try {
        const data = await getActivoById(id);
        activo.value = data;
        console.log(activo.value);
    } catch (error) {
        console.log(error);
    }
};

onMounted(async () => {

    if(tipo === 'carrito') {
        await handlerCargarCarrito();
    }

    if(tipo === 'activo') {
        await handlerCargarActivo();
    }

});
</script>