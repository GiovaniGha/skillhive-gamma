<template>
    <div class="flex gap-2 h-full w-full justify-center flex-row-reverse">
        <section class="w-full bg-base-400/50">
            <h2 class="text-5xl">skillhive</h2>
        </section>

        <section class="flex flex-col bg-base-400/50 p-2 ">
            <article>
                <div>
                    <figure> <img :src="foto" :alt="titulo" ></figure>
                </div>

                <div>
                    <h3 class="text-sm">{{nombre}}</h3>
                </div>
            </article>

            <article>
                <h2 class="font-medium text-sm">{{titulo}}</h2>
                <p class="text-gray-300 text-xs">{{descripcion}}</p>
                <p class="text-gray-300 text-xs">{{precio}}</p>


                <div>
                    <div class="badge badge-secondary badge-outline">{{subcategoria}}</div>
                </div>
            </article>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: [Number],
    required: true
  },
  titulo: {
    type: [String],
    required: true
  },
  descripcion: {
    type: [String],
    required: true
  },

  precio: {
    type: [String, Number],
    required: true
  },
  categoria: {
    type: [String],
    required: true
  },
  subcategoria: {
    type: [String],
    required: true
  },
  archivo: {
    type: [String],
    required: true
  },
  nombre: {
    type: [String],
    required: true
  },
  ocupacion: {
    type: [String],
    required: true
  },

  foto: {
    type: [String],
    required: true
  },
});

const titulo = ref(props.titulo);
const descripcion = ref(props.descripcion);
const precio = ref(props.precio);
const categoria = ref(props.categoria);
const subcategoria = ref(props.subcategoria);
const archivo = ref(props.archivo);
const nombre = ref(props.nombre);
const ocupacion = ref(props.ocupacion);
const foto = ref(props.foto);



</script>

