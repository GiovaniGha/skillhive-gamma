<template>
    <div @click="irActivo" class="h-fit cursor-pointer w-80">
      <div class="card h-fit card-side bg-base-400 shadow-xl">
        <figure class="h-40 bg-slate-200 w-3"><img :src="portada"  :alt="titulo"/></figure>
        <div class="card-body p-0 px-4 pt-2 flex flex-col gap-1 justify-center w-80">
          <h2 class="card-title text-sm">{{ titulo }}</h2>
          <section class="flex gap-2 items-center">
            <div class="avatar">
              <div class="w-7 rounded-full">
                <img :src="foto" />
              </div>
            </div>
            <small class="text-xs">{{ nombre }}</small>
          </section>
          <section class="flex justify-between">
            <div class="rating rating-sm flex gap-1 items-center">
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
            </div>
            <div class="p-3 badge badge-primary badge-outline">5.0</div>
          </section>
          <section>
            <p class="line-clamp-2 text-sm text-gray-300">{{ descripcion_corta }}</p>
          </section>
          <div class="card-actions">
            <p>$ {{ precio }}</p>
            <button type="button" @click="agregarCarrito" class="btn btn-primary btn-xs px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus text-white">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12.5 17h-6.5v-14h-2" />
                <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useRouter } from 'vue-router';

  
  const router = useRouter();

  const props = defineProps({
  
    id: {
      type: [String, Number],
      required: true
    },
    publicacion_id: {
      type: [String, Number],
      required: true
    },
    usuario_id: {
      type: [String, Number],
      required: true
    },
    portada: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion_corta: {
      type: String,
      required: true
    },
    precio: {
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

  const irActivo = () => {
        alert('jahsha');
        router.push(`/publicacion/props.id/activo`);

    }
  </script>
  
  