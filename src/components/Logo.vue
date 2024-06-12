<template>
    
    <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" class="w-10"/>
            <p class="text-lg font-bold">
                Skillhive
            </p>
        </div>
    </RouterLink>
    
</template>

<script setup>
    import { RouterLink } from "vue-router";
</script>