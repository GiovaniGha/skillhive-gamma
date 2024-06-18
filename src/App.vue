<template>
    
    <div class="flex flex-col min-h-screen">
        <Navbar />
        <div class="flex flex-1 mt-[66px] ml-[3.5rem]">
            <Sidebar />
            <main class="flex-1 p-4">
                <!-- Contenido principal -->
                <RouterView />
            </main>
        </div>
    </div>

</template>

<script setup>
    import Navbar from './components/Navbar.vue';
    import Sidebar from './components/Sidebar.vue';
    import { RouterView } from 'vue-router'; 
</script>