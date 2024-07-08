<template>
    <div class="flex gap-2 justify-evenly h-full">
        <section class="flex flex-col p-6 bg-base-200">
            <ul v-if="productos.length > 0">
                <li v-for="producto in productos" v-bind="producto.id">
                    <ProductoCard
                    :id="producto.activo.id"
                    :usuario_id="producto.activo.publicacion.usuario.id"
                    :portada="producto.activo.publicacion.portada"
                    :titulo="producto.activo.publicacion.titulo"
                    :descripcion_corta="producto.activo.publicacion.descripcion_corta"
                    :precio="producto.activo.precio"
                    :nombre="producto.activo.publicacion.usuario.nombre"
                    :foto="producto.activo.publicacion.usuario.foto"
                  >   
                  </ProductoCard>                     
                </li>
            </ul>

        </section>


        <div class="flex justify-center items-center">
            <section class="w-fit fixed px-8 py-8 rounded-lg bg-base-300 flex flex-col gap-2 items-end">
            
              <!-- <h2>código de descuento</h2> -->
              <!-- <div class="">
                  <label class="input input-bordered py-5 input-primary input-sm flex items-center gap-2">
                      <input type="text" class="grow" placeholder="**********" />
                      <button type="button" class="btn btn-xs px-3 text-white font-normal btn-primary">
                          Aplicar
                      </button>
                  </label>
              </div> -->

              <div class=" w-full border-b-2 ">
                  <article class="flex justify-between m-2">
                      <h4> Total neto: </h4>
                      <p>$ {{ total_neto }}</p>
                  </article>
                  
                  <!-- <article class="flex justify-between m-2">
                      <h4> Impuesto: </h4>
                      <p> $ {{ impuesto }}</p>
                  </article>
                  
                  <article class="flex justify-between m-2">
                      <h4> Total mas impuesto: </h4>
                      <p> $ {{ total_impuesto }}</p>
                  </article> -->
              </div>
              
              <button type="button" class="btn btn-sm text-white font-normal btn-primary">
                  Pagar
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
              </button>

            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { obtenerCarrito } from '../../services/ventas-compras-service';
import ProductoCard from '../../components/catalogos/ProductoCard.vue';

const total_neto = ref(0);
const impuesto = ref(0);
const total_impuesto = ref(0);

const productos = ref([]);

  
const recibirActivos = async () => {
  try {
    const data = await obtenerCarrito();
    console.log(data);

    productos.value = data.map((item) => ({
      ...item
    }));
    console.log(productos.value);
  } catch (error) {
    console.error('Error en recibirActivos:', error);
  }
};

const calcularNeto = () => {
  const netoCalculado = productos.value.reduce((total, item) => total + (parseFloat(item.precio) || 0), 0);                            ; 
  return netoCalculado;
};

onMounted(async () => {
  try {
    await recibirActivos();
    total_neto.value = calcularNeto();

  } catch (error) {
    console.error('Error en onMounted:', error);
  }
});
</script>