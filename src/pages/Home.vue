<template>
    <div>
        <section>
            <h1>Inicio</h1>
            <div>
                tags!
            </div>
        </section>

        <section>
            <div>
                <h2>Publicaciones más populares</h2>
                <a href=""> vermas</a>
                <h3>JDKSAL</h3>

            </div>

            <div >
                <PublicacionCard  v-for="proyecto in proyectos" :key="proyecto.id"> </PublicacionCard>
            </div>
            <hr>
        </section>

        <section>
            <div>
                <h2>Recursos más populares</h2>
            </div>

            <div>

            </div>
        </section>

        <section>
            <h2>Todo</h2>
            <div> </div>
        </section>

    </div>
</template>

<script setup>
    import PublicacionCard from '../components/publicaciones/PublicacionCard.vue';

    const proyectos = [
    {
        id: 1,
        nombre: 'Proyecto nombre',

    },
    {
        id: 2,
        nombre: 'Nombre User',

    },
    {
        id: 3,
        nombre: 'Proyecto nombre',

    }
];
</script>