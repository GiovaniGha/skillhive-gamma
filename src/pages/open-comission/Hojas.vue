<template>
    <div>

        <section>
            <ComisionesTabMenu active="comisiones-hojas" />
        </section>

        <section class="flex flex-col gap-4">
            <h2 class="text-6xl">Agrega una nueva hoja de comisión</h2>
            <div>
                <label for="input" class="file-input file-input-ghost w-full max-w-xs file-input-lg" >
                    <input type="file" />
                    <button class="btn btn-md btn-primary">
                         + 

                    </button>
                </label>

            </div>

        </section>
    </div>
</template>

<script setup>
    import ComisionesTabMenu from '../../components/openComission/ComisionesTabMenu.vue';

</script>

