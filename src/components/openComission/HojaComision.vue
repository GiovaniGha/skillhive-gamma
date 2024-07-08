<template>
    <div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                :src="portada"
                :alt="titulo" />
            </figure>

            <div class="card-body">
              <h2 class="card-title">{{titulo}}</h2>
              <p>{{descripcion}}</p>
              <div class="card-actions justify-end">
                <p class="text-lg"> {{precio}}</p>
                <button class="btn btn-primary btn-md">Editar</button>
              </div>
            </div>
          </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        titulo: {
            type: [String],
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

        portada: {
            type: [String],
            required: true
        },


    })

</script>

