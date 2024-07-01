<template>
    <div class="mr-40">
        <form action="" class="w-max fixed h-full flex flex-col gap-4 bg-dark-500 p-2">
            <h6 class="text-md text-white">Filtros</h6>
    
            <section class="flex  flex-col border-b-dark-400 border-b-2 pb-2 gap-1">
                <h6 class="text-sm text-white">Tipo</h6>
                <label class="text-xs   text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" /> Artículo
                </label>

                <label class="text-xs text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" />Imagen
                </label>

                
            </section>
    
            <section class="flex flex-col gap-1 border-b-dark-400 border-b-2 pb-2">
                <h6 class="text-sm text-white">Estado</h6>
                <label class="text-xs text-white"> 
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" />Temporal
                </label>
                <label class="text-xs text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" />Permanente
                </label>
            </section>
    
            <section class="flex flex-col gap-1 border-b-dark-400 border-b-2 pb-2">
                <h6 class="text-sm text-white">Modalidad</h6>
                <label class="text-xs text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" />Remoto
                </label>
                <label class="text-xs text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" checked />Oficina
                </label>
                <label class="text-xs text-white">
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-xs mr-1" />Mixto
                </label>
            </section>
            
            
            <section class="flex flex-col gap-1 border-b-dark-400 border-b-2 pb-2">
                <div class="relative mb-6">
                    <h3 class="text-sm">Fecha</h3>
                    <label for="labels-range-input" class="sr-only">Labels range</label>
                    <input id="labels-range-input" type="range" value="1000" min="100" max="10000" class="range range-primary range-xs w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700">
                    <span class="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6">Max ($10,000)</span>
                </div>    
            </section>
        </form>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    }
}
</script>
