<template>
    <div class="absolute top-0 left-0 w-screen h-screen z-10 bg-black/80 overflow-y-scroll lg:px-20 px-10 py-10">

        <div class="flex flex-col-reverse lg:flex-row gap-2 items-start">
            <section class="w-full lg:w-2/5 p-2 bg-base-200 rounded-md">
                <div>
                    <!-- Usuario -->
                    <section class="flex justify-between mb-5">
                        <RouterLink :to="{ name: 'perfil' }" class="flex items-center">
                            <div class="avatar mr-2">
                                <div class="w-20 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user">
                                </div>
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold">Nombre apellido</h1>
                                <p>Ocupacion</p>
                            </div>
                        </RouterLink>

                        <div class="flex items-center">
                            <button class="btn btn-primary mr-2">Seguir</button>
                            <button class="btn btn-primary btn-outline">Chat</button>
                        </div>
                    </section>

                    <!-- Datos de la publicacion -->
                    <section class="mb-5">
                        <div class="flex items-center gap-2">
                            <h2 class="mb-2 text-2xl">Titulo de la publicacion</h2>
                            <button class="btn btn-primary btn-sm">
                                <IconThumbUp class="w-5" />
                                Like
                            </button>
                        </div>
                        <article class="mb-2 opacity-70">
                            <p class="font-light text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem reiciendis, enim vero tempora ullam doloribus tempore aspernatur similique. Quibusdam obcaecati aut eligendi nulla adipisci iusto facere consequatur optio neque blanditiis.</p>
                            <p class="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempora?</p>
                        </article>
                    </section>

                    <!-- Categorias -->
                    <section class="mb-5">
                        <div class="badge badge-neutral">Programming</div>
                        <div class="badge badge-neutral">Art</div>
                        <div class="badge badge-neutral">Design</div>
                        <div class="badge badge-neutral">Software</div>
                        <div class="badge badge-neutral">Mondongo</div>
                    </section>

                    <!-- Comentarios -->
                    <section>
                        <h2 class="mb-2 text-2xl">Comentarios</h2>
                        <div class="flex gap-2 mb-5">
                            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full">
                            <button class="btn btn-primary">Enviar</button>
                        </div>
                        <div class="flex flex-col gap-4">
                            <Comentario />
                            <Comentario />
                            <Comentario />
                        </div>
                    </section>
                </div>
            </section>

            <main class="w-full lg:w-3/5 p-2 bg-base-200 rounded-md">
                <PublicacionActivo />
            </main>
        </div>

    </div>
</template>

<script setup>
import { IconThumbUp } from "@tabler/icons-vue";
import { RouterLink } from "vue-router";
import Comentario from "./Comentario.vue";
import PublicacionActivo from "./PublicacionActivo.vue";

</script>