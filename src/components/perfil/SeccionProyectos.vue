<template>
    <div class="flex gap-1">
        <SeccionProyectosCard v-for="proyecto in proyectos" :key="proyecto.id" />
    </div>
</template>

<script setup>
import SeccionProyectosCard from './SeccionProyectosCard.vue';

const proyectos = [
    {
        id: 1,
        nombre: 'Proyecto nombre',
        descripcion: 'If a dog chews shoes whose shoes does he choose?',
        fechaInicio: '01/01/2021',
        fechaFin: '01/01/2022'
    },
    {
        id: 2,
        nombre: 'Proyecto nombre',
        descripcion: 'If a dog chews shoes whose shoes does he choose?',
        fechaInicio: '01/01/2021',
        fechaFin: '01/01/2022'
    },
    {
        id: 3,
        nombre: 'Proyecto nombre',
        descripcion: 'If a dog chews shoes whose shoes does he choose?',
        fechaInicio: '01/01/2021',
        fechaFin: '01/01/2022'
    }
];
</script>