<template>
    <div>
        <div class="card bg-base-100 w-96 shadow-xl">
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="handleFileChange" />

            <div class="card-body">

                <label for="titulo">
                    <input type="text" name="titulo" id="titulo" v-model="comisionData.titulo" placeholder="Título">
                </label>

                <label for="descripcion_corta">
                    <input type="text" name="descripcion_corta" id="descripcion_corta" v-model="comisionData.descripcion_corta" placeholder="Descripción corta">
                </label>

                <label for="precio">
                    <input type="number" name="precio" id="precio" v-model="comisionData.precio" placeholder="Precio">
                </label>

                <button class="btn btn-primary btn-md" @click="addComision">Añadir</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { postComision } from '../../services/ventas-compras-service';

const comisionData = ref({
    portada: null,
    titulo: '',
    descripcion_corta: '',
    precio: ''
});

const router = useRouter();

const handleFileChange = (event) => {
    const file = event.target.files[0];
    comisionData.value.portada = file;
};

const addComision = async () => {
    try {
        const user = localStorage.getItem('user');
        if (!user) {
            alert('Necesitas estar logueado para añadir una comisión.');
            router.push('/login');
            return;
        }

        const formData = new FormData();
        for (const key in comisionData.value) {
            formData.append(key, comisionData.value[key]);
        }

        await postComision(formData);
        alert('Comisión añadida exitosamente');
        router.push('/comisiones');
    } catch (error) {
        console.error('Error al añadir la comisión:', error);
    }
};
</script>
