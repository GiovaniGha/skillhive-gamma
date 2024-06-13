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
    {name: 'perfil-home',label: 'Home',},
    {name: 'perfil-publicaciones',label: 'Publicaciones',},
    {name: 'perfil-activos',label: 'Activos',},
    {name: 'perfil-servicios',label: 'Servicios',}
];

const isActive = (tab) => tab.name === props.active;
</script>