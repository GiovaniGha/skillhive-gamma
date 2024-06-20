

<template>
    <div class="relative group h-56 w-56 transition-opacity overflow-hidden">
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="object-cover w-full h-full">
    
        <div class="absolute transition-opacity inset-0 bg-black group-hover:bg-opacity-50 bg-opacity-0 group-hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] pointer-events-none"></div>
    
        <div class="absolute transition-all bottom-2 -left-40 group-hover:translate-x-44 w-full">
    
            <div class="flex gap-2 items-center">
                <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-full w-12">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user">
                    </div>
                </div> 
    
                <div class="flex flex-col">
                    <h2 class="font-bold">Nombre user</h2>
                    <small class="text-sm">Ocupacion</small>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script setup>

</script>