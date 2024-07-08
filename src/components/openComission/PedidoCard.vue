<template>
    <div class="h-fit p-2 flex gap-2 items-center card card-side bg-base-400 shadow-xl">
        <section> <!--Foto-->
            <div class="avatar">
                <div class="w-7 rounded-full">
                  <img :src="foto" />
                </div>
              </div>
        </section>

        <section class="card-body p-0 px-4 pt-2 flex flex-col gap-2 justify-center w-80"> <!--seccion-->
            <article class="flex gap-2 justify-between"><!--nombre y categorias-->
                <h2 class="card-title text-sm">{{ nombre }}</h2>
                <div>
                    <div class="p-3 badge badge-primary badge-outline">{{categoria}}</div>
                    <div class="p-3 badge badge-primary badge-outline">{{subcategoria}}</div>
                    <div class="p-3 badge badge-primary badge-outline">{{plan}}</div>
                </div>

            </article><!--Descripción y fecha-->
                <div class="flex-col flex gap-2">
                    <p class="line-clamp-2 text-sm text-gray-300">{{ descripcion_corta }}</p>
                    <small class="text-xs">{{ fecha }}</small>
                </div>
            <article>

            </article>
        </section>

        <section>
            <div class="card-actions justify-end items-center">
                <button type="button" @click="agregarCarrito" class="btn btn-primary btn-sm px-2 font-normal text-xs text-white">
                    Ver completo
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-right text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" /></svg>
                </button>
            </div>
        </section>
        
    </div>
    
    

  </template>
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    id: {
      type: [String, Number],
      required: true
    },

    usuario_id: {
      type: [String, Number],
      required: true
    },

    categoria: {
      type: String,
      required: true
    },

    subcategoria: {
      type: String,
      required: true
    },

    descripcion_corta: {
      type: String,
      required: true
    },

    plan: {
      type: [String, Number],
      required: true
    },

    fecha: {
      type: [String, Number],
      required: true
    },

    nombre: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    }
  });
  
  const agregarCarrito = () => {
    alert('Producto añadido al carrito');
  };
  </script>
  
  