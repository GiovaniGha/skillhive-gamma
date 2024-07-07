<template>
    <div class="flex gap-2 justify-evenly h-full">
        <section class="flex flex-col p-6 bg-base-200">
            <ul>
                <li v-for="productos in producto" v-bind="productos.id">
                    <ProductoCard
                    :id="producto.id"
                    :usuario_id="producto.usuario_id"
                    :portada="producto.portada"
                    :titulo="producto.titulo"
                    :descripcion_corta="producto.descripcion_corta"
                    :precio="producto.precio"
                    :nombre="producto.nombre"
                    :foto="producto.foto"
                  >   
                  </ProductoCard>                     
                </li>
            </ul>

        </section>


        <div class="flex justify-center items-center">
            <section class="w-fit fixed px-8 py-8 rounded-lg bg-base-300 flex flex-col gap-2 items-end">
                <h2>código de descuento</h2>
                
            <div class="">
                <label class="input input-bordered py-5 input-primary input-sm flex items-center gap-2">
                    <input type="text" class="grow" placeholder="**********" />
                    <button type="button" class="btn btn-xs px-3 text-white font-normal btn-primary">
                        Aplicar
                    </button>
                </label>
            </div>

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

    import ProductoCard from '../../components/catalogos/ProductoCard.vue';

    import { getActivoById } from '../../services/ventas-compras-service.js';

    const total_neto = ref(0);
    const impuesto = ref(0);
    const total_impuesto = ref(0);

    const producto = ref([]);

  
  const recibirActivo = async (id) => {
    try {
      const response = await getActivoById(id);
      producto.value = {
        id: response.id || '',
        usuario_id: response.usuario_id || '',
        portada: response.portada || '',
        titulo: response.titulo || '',
        descripcion_corta: response.descripcion_corta || '',
        precio: response.precio || '',
        nombre: response.usuario_id?.nombre || '',
        foto: response.usuario_id?.foto || '',
      };
    } catch (error) {
      console.error('Error al obtener el activo:', error);
    }
  };

  const calcularNeto = () => {
  const netoCalculado = producto.value.reduce((total, item) => total + (parseFloat(item.precio) || 0), 0);                            ; 
  return netoCalculado;
};

// const calcularImpuesto = () => {
//   const tasaImpuesto = 0.; 
//   return total_neto.value * tasaImpuesto;
// };

// const calcularTotal = () => {
//   return total_neto.value + impuesto.value;
// };

onMounted(async () => {
  const id = 2;
  try {
    await recibirActivo(id);
    total_neto.value = calcularNeto();

  } catch (error) {
    console.error('Error en onMounted:', error);
  }
});
</script>