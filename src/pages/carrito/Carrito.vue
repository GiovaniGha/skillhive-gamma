<template>
    <div class="flex gap-2 justify-center items-center h-full">
        <section class=" bg-base-200">
            <ProductoCard> </ProductoCard>

        </section>


        <section class="w-fit px-4 py-8 rounded-lg bg-base-300 flex flex-col gap-2 items-end">
            <h2>código de descuento</h2>

            <div class="">
                <label class="input input-bordered py-5 input-primary input-sm flex items-center gap-2">
                    <input type="text" class="grow" placeholder="**********" />
                    <button type="button" class="btn btn-xs px-3 text-white font-normal btn-primary">
                        Aplicar
                    </button>
                </label>
            </div>

            <div class=" w-full border-b-2">
                <article class="flex justify-between m-2">
                    <h4> Total neto: </h4>
                    <p> $999</p>
                </article>

                <article class="flex justify-between m-2">
                    <h4> Total neto: </h4>
                    <p> $999</p>
                </article>

                <article class="flex justify-between m-2">
                    <h4> Total neto: </h4>
                    <p> $999</p>
                </article>
            </div>

            <button type="button" class="btn btn-sm text-white font-normal btn-primary">
                Pagar
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
            </button>

        </section>
    </div>
</template>

<script setup>
    import ProductoCard from '../../components/catalogos/ProductoCard.vue';


</script>