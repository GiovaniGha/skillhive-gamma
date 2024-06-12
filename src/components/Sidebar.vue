<template>
    <div class="bg-base-100 w-14 h-[calc(100vh-68px)] fixed top-[66px] z-10">
        <ul class="flex flex-col gap-6 mt-5">
            <li v-for="(ruta, index) in rutas" :key="index" :title="ruta.titulo" class="flex justify-center">
                <RouterLink :to="ruta.url">
                    <component :is="ruta.icono" class="w-8 h-8"/>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { IconHome, IconShoppingCart, IconPlus, IconMessage, IconBuildingStore, IconChartPie } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

const rutas = ref([
    {titulo: 'Inicio', url: '/', icono: IconHome},
    {titulo: 'Carrito', url: '/', icono: IconShoppingCart},
    {titulo: 'Agregar', url: '/', icono: IconPlus},
    {titulo: 'Mensajes', url: '/', icono: IconMessage},
    {titulo: 'Open comissions', url: '/', icono: IconBuildingStore},
    {titulo: 'Estadisticas', url: '/', icono: IconChartPie}
]);
</script>