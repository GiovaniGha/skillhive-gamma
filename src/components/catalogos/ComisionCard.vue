<template>
    <div class=" card w-56 bg-base-400 shadow-xl border border-gray-700">
        <figure>
            <img :src="imagen" :alt="titulo" class="mb-2" />
        </figure>
        <div class="card-body p-3 ">
            <h2 class="card-title text-sm mb-1">{{ titulo }}</h2>
            <p class="text-xs line-clamp-4 text-gray-400 mb-2">{{ descripcion }}</p>
            <div class="card-actions justify-between flex items-center mt-2">
                <p class="text-sm">{{ precio }}</p>
                <button class="btn btn-primary btn-sm text-white font-normal ml-2">Ver más</button>
            </div>
        </div>
    </div>    
</template>

<script setup>
  import { defineProps } from 'vue';

    const props = defineProps({

        titulo: {
            type: [String, Number],
            required: true
        },

        descripcion: {
            type: [String],
            required: true
        },

        precio: {
            type: [String, Number],
            required: true
        },

        imagen: {
            type: [String],
            required: true
        },
    });
</script>