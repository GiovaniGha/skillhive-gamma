<template>
    <div>
        <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>

        <section class="w-full rounded-md bg-base-300 p-4 group">
            <article>
                <div class="flex justify-end items-center mb-2">
                    <div class="flex gap-2">
                        <button class="btn btn-circle btn-outline btn-sm">
                            <IconChevronUp />
                        </button>
                        <button class="btn btn-circle btn-outline btn-sm">
                            <IconChevronDown />
                        </button>
                        <button class="btn btn-circle btn-outline btn-sm">
                            <IconEdit />
                        </button>
                    </div>
                </div>
        
                <div>
                    <SeccionProyectos v-if="props.tipo === 'proyectos'" />
                    <SeccionTexto v-else-if="props.tipo === 'texto'" />
                    <SeccionGaleria v-else-if="props.tipo === 'galeria'" />
                </div>
            </article>
        </section>
    </div>
</template>

<script setup>
import { IconChevronUp, IconChevronDown, IconEdit } from '@tabler/icons-vue';
import SeccionProyectos from './SeccionProyectos.vue';
import SeccionTexto from './SeccionTexto.vue';
import SeccionGaleria from './SeccionGaleria.vue';

const props = defineProps({
    title: String,
    tipo: {
        type: String,
        default: 'proyectos'
    }
});


</script>