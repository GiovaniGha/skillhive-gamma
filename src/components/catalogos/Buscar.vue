<template>
    <div class="bg-banner bg-cover flex flex-col items-center p-2 gap-2">
        <h2 class="text-md  line tracking-wider	">Encuentra lo que necesitas</h2>

        <section class="flex items-center gap-9">
            <select class="select select-bordered select-sm w-full max-w-xs">
                <option disabled selected>Small</option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
              </select>
    
              <select class="select select-bordered select-sm w-full max-w-xs">
                <option disabled selected>Small</option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
              </select>
    
            <section class="flex gap-3  ">
                <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>     
                    <input type="text" class="grow w-56 " placeholder="Ingrese su criterio de busqueda" />
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>     

                </label>  
                <button class="btn btn-primary btn-sm text-xs  font-medium text-white">Buscar</button> 
            </section>


        </section>
        
        
    </div>
</template>

<script setup>

</script>
