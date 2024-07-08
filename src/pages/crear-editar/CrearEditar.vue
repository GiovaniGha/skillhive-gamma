<template>
    <div>
        <main class="px-20">
            <CrearEditarActivo :modo="primera_ruta" :edicion_id="id"/>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CrearEditarActivo from '../../components/ventas/CrearEditarActivo.vue';

const route = useRoute();
const primera_ruta = route.path.split('/')[1];
const id = route.params.id;

onMounted(async () => {

});
</script>
