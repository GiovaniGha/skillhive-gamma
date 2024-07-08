<template>
     <div class="bg-base-100 w-14 h-[calc(100vh-66px)] fixed top-[66px] z-10 left-0">
        <ul class="flex flex-col gap-8 mt-6">
            <li v-for="(ruta, index) in rutas" :key="index" :title="ruta.titulo" class="flex justify-center">
                <RouterLink :to="ruta.url">
                    <component :is="ruta.icono" class="w-7 h-8"/>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { IconHomeFilled, IconShoppingCartFilled, IconCirclePlusFilled, IconMessage, IconCashBanknoteFilled, IconChartPieFilled } from '@tabler/icons-vue';
import { RouterLink } from 'vue-router';

const rutas = ref([
    {titulo: 'Inicio', url: '/', icono: IconHomeFilled},
    {titulo: 'Carrito', url: '/carrito', icono: IconShoppingCartFilled},
    {titulo: 'Agregar', url: '/', icono: IconCirclePlusFilled },
    //{titulo: 'Mensajes', url: '/', icono: IconMessage},
    {titulo: 'Open comissions', url: '/open-comission', icono: IconCashBanknoteFilled},
    {titulo: 'Estadisticas', url: '/', icono: IconChartPieFilled}
]);
</script>