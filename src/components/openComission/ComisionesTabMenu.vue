<template>
    <section class="my-2">
        <div role="tablist" class="tabs tabs-boxed">
            <RouterLink v-for="(tab, index) in tabs" :key="index" :to="{ name: tab.name }" :class="['tab', { 'tab-active': isActive(tab) }]">
                {{ tab.label }}
            </RouterLink>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    active: {
        type: String,
        default: 'perfil-home'
    }
});

const tabs = [
    {name: 'comisiones-hojas',label: 'Hojas de Comisiones',},
    {name: 'comisiones-pedidos',label: 'Pedidos',},
];

const isActive = (tab) => tab.name === props.active;

</script>