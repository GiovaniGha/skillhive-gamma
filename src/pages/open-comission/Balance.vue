<template>
    <div>
        <section>
            <ComisionesTabMenu active="comisiones-balance" />

        </section>

        <section>

        </section>
       
    </div>
</template>

<script setup>
    import ComisionesTabMenu from '../../components/openComission/ComisionesTabMenu.vue';



    const props = defineProps({
        title: String,
        tipo: {
            type: String,
            default: 'proyectos'
        }
    });

</script>