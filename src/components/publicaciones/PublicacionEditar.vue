<template>
    <div class="flex h-full flex-col-reverse lg:flex-row gap-2 p-2">
  
      <section class="lg:w-2/5 p-5 bg-base-400 rounded-md overflow-hidden">
  
        <!-- Datos de la publicación -->
        <section class="flex flex-col gap-2 mb-5">
          <div class="flex flex-col gap-2">
            <label for="input"> Título del Recurso </label>
            <input v-model="titulo" type="text" placeholder="Ingrese el título" class="input input-md input-primary" />
          </div>


          <article class="flex flex-col gap-2 mb-2 ">
            <label for="input"> Descripción</label>
            <input v-model="descripcion_corta" type="text" class="input input-md input-primary w-full h-32" />
          </article>
  
          <div class="flex flex-col gap-2">
            <label for="input"> Precio </label>
            <input v-model="precio" type="text" placeholder="$$$" class="input input-sm input-primary" />
          </div>
        </section>
        <!-- Categorias -->
        <section class="mb-5">
          <div class="flex flex-col gap-2">
            <label for="input"> Etiquetas </label>
            <input v-model="etiquetas" type="text" placeholder="añada una etiqueta" class="input input-md input-secondary" />
          </div>
        </section>
      </section>
  
      <article class="h-auto w-screen flex flex-col items-center justify-center lg:w-3/5 p-2 bg-base-300 rounded-md gap-2">
        <h2 class="text-3xl">Añade tus archivos</h2>
        <button class="btn btn-circle btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        </button>
      </article>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  import { putActivoById } from '../../services/ventas-compras-service.js';
  
    const props = defineProps({
    id: {
        type: Object,
        required: true,
    },

    existePublicacion: {
        type: Boolean,
        required: true,
    },

    titulo: {
        type: String,
        default: '',
    },

    descripcion_corta: {
        type: String,
        default: '',
    },

    precio: {
        type: String,
        default: '',
    },

    subcategoria_id: {
        type: String,
        default: '',
    },

    subcategoria_nombre: {
        type: String,
        default: '',
    }
    
    });

    const titulo = ref('');
    const descripcion_corta = ref('');
    const precio = ref('');
    const subcategoria_nombre = ref('');

    const fetchActivo = async () => {
    try {
        const data = await putActivoById(props.id);
        if (props.existePublicacion) {
        titulo.value = data.titulo;
        descripcion_corta.value = data.descripcion_corta;
        precio.value = data.precio;
        subcategoria_nombre.value = data.subcategoria_nombre;
        }
    } catch (error) {
        console.error('Error al obtener el activo:', error);
    }
    };

    watch(() => props.existePublicacion, (existe) => {
    if (existe) {
        titulo.value = props.titulo;
        descripcion_corta.value = props.descripcion_corta;
        precio.value = props.precio;
        subcategoria_nombre.value = props.subcategoria_nombre;
    } else {
        titulo.value = '';
        descripcion_corta.value = '';
        precio.value = '';
        subcategoria_nombre.value = '';
    }
    });

    onMounted(fetchActivo);
</script>
  