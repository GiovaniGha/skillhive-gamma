<template>
    <div>
        <section>
            <div class="relative">
                <!-- banner -->
                <figure class="h-64 w-full">
                    <img src="https://cdn.pixabay.com/photo/2016/08/03/09/04/universe-1566161_1280.jpg" alt="banner" class="w-full h-full object-cover">
                </figure>

                <!-- avatar -->
                <div class="glass w-64 h-60 p-2 rounded-md absolute top-0 bottom-0 left-0 right-0 m-auto">
                    <div class="flex flex-col items-center gap-2">
                        <!-- avatar -->
                        <div>
                            <div class="avatar online">
                                <div class="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user">
                                </div>
                            </div>
                        </div>

                        <!-- nombre y ocupacion -->
                        <div>
                            <h1 class="text-2xl font-bold text-center">Nombre apellido</h1>
                            <p class="text-center">Ocupacion</p>
                        </div>

                        <!-- botones de seguir y chat -->
                        <div class="flex justify-center gap-4">
                            <button class="btn btn-primary">Seguir</button>
                            <button class="btn btn-primary btn-outline">Chat</button>
                        </div>
                    </div>

                    <div class="absolute top-1 right-1">
                        <button class="btn btn-ghost">
                            <IconDotsVertical />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div>
            <RouterView />
        </div>        
    </div>
</template>

<script setup>
import { IconDotsVertical } from '@tabler/icons-vue';
import { RouterView } from 'vue-router';


</script>