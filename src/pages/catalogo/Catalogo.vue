<template>
    <div class="flex flex-col">

            <div>
                <Buscar> </Buscar>
            </div>
            
            <div class=" flex">
                <Filtro> </Filtro>
                <RouterView/>
            </div>

    </div>
</template>

<script setup>

import Filtro from '../../components/catalogos/Filtro.vue';
import Buscar from '../../components/catalogos/Buscar.vue';


</script>
