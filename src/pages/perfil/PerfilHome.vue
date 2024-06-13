<template>
    <div>

        <PerfilTabMenu />

        <main>

            <!-- Cabecera -->
            <div>
                <button class="btn">
                    <IconSection class="w-6"/>
                    Agregar
                </button>
            </div>

            <!-- Secciones container -->
            <div class="flex flex-col-reverse lg:flex-row gap-2">  

                <!-- contenedor de secciones -->
                <article class="lg:w-2/3 w-full p-2 flex flex-col gap-10">
                    <Seccion title="Algunos de mis proyectos"/>
                    <Seccion title="Sobre mi" tipo="texto"/>
                    <Seccion title="Algo de mi arte " tipo="galeria"/>
                </article>
                
                <!-- contenedor de bio -->
                <article class="lg:w-1/3 w-full p-2">
                    <div class="glass p-4 rounded-md">
                        <h2 class="font-bold text-lg">Bio</h2>
                        <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                    </div>
                </article>

            </div>

        </main>

    </div>
</template>

<script setup>
import { IconSection } from '@tabler/icons-vue';
import PerfilTabMenu from '../../components/perfil/PerfilTabMenu.vue';
import Seccion from '../../components/perfil/Seccion.vue';
</script>