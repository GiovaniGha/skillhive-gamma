<template>
  <div>
    <div v-if="id">
        <h1 >Editar Publicación</h1>

    </div>

    <div v-else>
        <h1 >Crear Publicación</h1>

    </div>

    <section v-if="loaded">

      <PublicacionEditar 
      :id="id" 
      :existePublicacion="existePublicacion" 
      :titulo="titulo" 
      :descripcion_corta="descripcion_corta" 
      :precio="precio" 
      :subcategoria_nombre="subcategoria_nombre" 
      :subcategoria_id="subcategoria_id" />
    </section>

    <section v-else>
      <div>Cargando...</div>
    </section>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import PublicacionEditar from '../../components/publicaciones/PublicacionEditar.vue';

  const id = ref(null);
  const existePublicacion = ref(false); 
  const titulo = ref(''); 
  const descripcion_corta = ref(''); 
  const precio = ref(''); 
  const subcategoria_id = ref(''); 
  const subcategoria_nombre = ref(''); 

  const loaded = ref(true);

  onMounted(() => {
    setTimeout(() => {
      id.value = '1';
      existePublicacion.value = true;
      titulo.value = 'Título de la Publicación';
      descripcion_corta.value = 'Descripción de la Publicación';
      precio.value = '5.00';
      subcategoria_id.value = '123';
      subcategoria_nombre.value = 'Nombre de la Subcategoría';
      loaded.value = true;
    }, 1000); 
  });
</script>
