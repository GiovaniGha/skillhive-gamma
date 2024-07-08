<template>
    <div>
        <h1 class="text-xl text-center mb-5">{{ modo === 'crear' ? 'Crear' : 'Editar' }} Activo</h1>

        <main>

            <section class="bg-base-200 p-4 rounded-md mb-5" v-if="activoEdicionCargado">
                <h2 class="mb-2">Estados de la publicacion</h2>
                <!-- botones para bulicar o regresar a borrador -->
                <div class="flex gap-4 items-center">
                    <button class="btn btn-success" :disabled="activoEdicion.publicacion.publicado || !activoEdicion.aprobado" @click="() => publicarHandler('on')">Publicar</button>
                    <button class="btn btn-ghost" :disabled="!activoEdicion.publicacion.publicado" @click="() => publicarHandler('off')">Regresar a borrador</button>
                    <div v-if="!activoEdicion.aprobado">
                        <p class="text-error">Su publicacion no ha sido aprobada</p>
                    </div>
                    <div v-if="activoEdicion.publicacion.publicado">
                        <p class="text-success">Su publicacion esta publicada</p>
                    </div>
                    <div v-if="!activoEdicion.publicacion.publicado">
                        <p class="text-warning">Su publicacion no esta publicada</p>
                    </div>
                </div>
                <hr class="my-2">
                <!-- Botones para mandar a revision o cancelar envio a revision -->
                <div class="flex gap-4 items-center"> 
                    <button class="btn btn-success" :disabled="activoEdicion.enRevision" @click="() => mandarRevisionHandler('enviar')">Enviar a revision</button>
                    <button class="btn btn-ghost" :disabled="!activoEdicion.enRevision" @click="() => mandarRevisionHandler('cancelar')">Cancelar revision</button>
                    <div v-if="activoEdicion.enRevision">
                        <p class="text-warning">Su activo esta en revision</p>
                    </div>
                    <div v-if="!activoEdicion.enRevision">
                        <p class="text-success">Su activo no esta en revision</p>
                    </div>
                </div>
            </section>

            <form class="flex flex-col gap-5 bg-base-200 p-4 rounded-md mb-5" @submit.prevent="submit">
                <!-- Portada -->
                <div class="flex flex-col">
                    <label for="portada">Portada</label>
                    <input type="file" class="file-input input-bordered w-full" id="portada" name="portada" accept="image/*" ref="portada" />
                </div>

                <!-- titulo -->
                <div>
                    <input type="text" class="input w-full input-bordered" id="titulo" name="titulo" placeholder="Titulo" v-model="activoData.titulo">
                </div>

                <!-- descripcion_corta -->
                <div>
                    <textarea class="textarea textarea-bordered w-full" id="descripcion_corta" name="descripcion_corta" placeholder="Descripcion corta" v-model="activoData.descripcion_corta">
                    </textarea>
                </div>

                <!-- precio -->
                <div>
                    <input type="text"  class="input w-full input-bordered" id="precio" name="precio" placeholder="Precio" v-model="activoData.precio" />
                </div>

                <!-- Categoria - solo creacion -->
                <div v-if="modo !== 'editar'">
                    <select class="select select-bordered w-full" v-model="categoriaSeleccionada" @change="changeCategoria"> 
                        <option disabled selected>Categoria</option>
                        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nombre }}</option>
                    </select>
                </div>

                <!-- Subcategorias - solo creacion -->
                <div v-if="modo !== 'editar'">
                    <select class="select select-bordered w-full" multiple v-model="activoData.subcategorias">
                        <option disabled selected>Subcategorias</option>
                        <option v-for="subcategoria in subcategorias" :key="subcategoria.id" :value="subcategoria.id">{{ subcategoria.nombre }}</option>
                    </select>
                </div>

                <!-- Recursos actuales - solo en edicion -->
                <section v-if="activoEdicionCargado">
                    <h2 class="text-lg">Recursos actuales</h2>
                    <p>Seleciona para eliminar</p>
                    <div class="flex gap-5">
                        <ul>
                            <li v-for="recurso in activoEdicion.archivos" :key="recurso.id">
                                <label>
                                    <input type="checkbox" :value="recurso.id" v-model="recursosEliminarIds">
                                    <a :href="recurso.archivo" target="_blank">
                                        <template v-if="esImagen(recurso.archivo)">
                                            <img :src="recurso.archivo" alt="Imagen" style="max-width: 50px; max-height: 50px;">
                                        </template>
                                        <template v-else>
                                            {{ 'Archivo' }}
                                        </template>
                                    </a>
                                </label>
                            </li>
                        </ul>
                    </div>
                </section>

                <!-- Recursos -->
                <div class="flex flex-col">
                    <label for="recursos">Recursos</label>
                    <input type="file" class="file-input w-full input-bordered" id="recursos" name="recursos" multiple accept="image/*" ref="recursos" />
                </div>

                <!-- button -->
                <button :class="{'btn btn-primary': !disabled, 'btn btn-primary loading': disabled}" :disabled="disabled">{{ modo === 'crear' ? 'Crear' : 'Editar' }}</button>
            </form>


            
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getCategorias, getSubcategorias, publicarSwitch } from '../../services/publicaciones-service';
import { getActivoPropio, postActivo, putActivoById, mandarRevision } from '../../services/ventas-compras-service';
import { useRouter } from 'vue-router';

const props = defineProps({
    modo: {
        type: String,
        required: true,
    },
    edicion_id: {
        type: Number,
        required: false
    },
});

const router = useRouter();

const portada = ref(null);

const recursos = ref(null);

const categoriaSeleccionada = ref(null);

const categorias = ref([]);

const subcategorias = ref([]);

const disabled = ref(false);

const activoEdicion = ref(null);
const activoEdicionCargado = ref(false);

const recursosEliminarIds = ref([]);

const activoData = ref({
    titulo: '',
    descripcion_corta: '',
    precio: '',
    subcategorias: [],
});

const mandarRevisionHandler = async (action) => {
    try {
        const data = await mandarRevision(props.edicion_id, action);
        console.log('Activo enviado a revision');
        activoEdicion.value.enRevision = action === 'enviar';
    } catch (error) {
        console.log('Error al editar activo');
        return;
    }
};

const publicarHandler = async (action) => {
    try {
        const data = await publicarSwitch(props.edicion_id, action);
        console.log('Activo publicado');
        activoEdicion.value.publicacion.publicado = action === 'on';
    } catch (error) {
        console.log('Error al editar activo');
        return;
    }
};

const esImagen = (archivo) => {
    return archivo.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) !== null;
};

const changeCategoria = async (e) => {
    const id = e.target.value;
    subcategorias.value = await getSubcategorias(id);
};

const submit = async () => {
    disabled.value = true;

    if(props.modo === 'editar') {
        const formData = new FormData();

        formData.append('titulo', activoData.value.titulo);
        formData.append('descripcion_corta', activoData.value.descripcion_corta);
        formData.append('precio', activoData.value.precio);
        if(portada.value.files[0] !== undefined) {
            console.log('agregue portada');
            formData.append('portada', portada.value.files[0]);
        }

        const recursosFiles = recursos.value.files;
        for (let i = 0; i < recursosFiles.length; i++) {
            formData.append('recursos', recursosFiles[i]);
        }

        if(recursosEliminarIds.value.length > 0) {
            formData.append('recursosElimiarIds', Object.values(recursosEliminarIds.value));
        }

        try {
            const data = await putActivoById(props.edicion_id, formData);
            console.log('Activo editado');
        } catch (error) {
            console.log('Error al editar activo');
            disabled.value = false;
            return;
        }

        disabled.value = false;
    }

    const formData = new FormData();
    formData.append('portada', portada.value.files[0]);
    const recursosFiles = recursos.value.files;
    for (let i = 0; i < recursosFiles.length; i++) {
        formData.append('recursos', recursosFiles[i]);
    }
    formData.append('titulo', activoData.value.titulo);
    formData.append('descripcion_corta', activoData.value.descripcion_corta);
    formData.append('precio', activoData.value.precio);
    formData.append('categoria', categoriaSeleccionada.value);
    const subcategoriasParse = activoData.value.subcategorias.map(id => Number(id));
    formData.append('subcategorias', JSON.stringify(subcategoriasParse));

    try {
        const data = await postActivo(formData);
        
        console.log('Activo creado');
         
    } catch (error) {
        console.log('Error al crear activo');
        disabled.value = false;
        return;
    }

    disabled.value = false;
};

const cargarCategorias = async () => {
    categorias.value = await getCategorias();
};

const cargarActivoEdicion = async () => {
    try {
        activoEdicion.value = await getActivoPropio(props.edicion_id);
        activoEdicionCargado.value = true;
    } catch (error) {
        router.push({ name: 'not-found' });
        return;
    }
    
    console.log(activoEdicion.value, activoEdicionCargado.value);
    activoData.value.titulo = activoEdicion.value.publicacion.titulo;
    activoData.value.descripcion_corta = activoEdicion.value.publicacion.descripcion_corta;
    activoData.value.precio = activoEdicion.value.precio;
};

onMounted(() => {
    cargarCategorias();

    if(props.modo === 'editar' && props.edicion_id) {
        cargarActivoEdicion();
    } 
});

</script>