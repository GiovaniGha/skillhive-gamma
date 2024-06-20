<template>
    <div class="flex flex-wrap gap-2 w-fit">
            <PublicacionCard v-for="proyecto in proyectos" :key="proyecto.id" :proyecto="proyecto"></PublicacionCard>
    </div>
</template>

<script setup>
import PublicacionCard from '../../components/publicaciones/PublicacionCard.vue';

const proyectos = [
            { id: 1, nombre: 'Proyecto nombre' },
            { id: 2, nombre: 'Nombre User' },
            { id: 3, nombre: 'Proyecto nombre' },
            { id: 3, nombre: 'Proyecto nombre' },
            { id: 3, nombre: 'Proyecto nombre' },
            { id: 1, nombre: 'Proyecto nombre' },
            { id: 2, nombre: 'Nombre User' },
            { id: 3, nombre: 'Proyecto nombre' },
            { id: 3, nombre: 'Proyecto nombre' },
            { id: 3, nombre: 'Proyecto nombre' }
        ];
</script>
