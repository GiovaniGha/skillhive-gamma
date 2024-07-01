<template>
    <div class="flex justify-center p-6 bg-banner bg-cover h-full ">
        <form @submit.prevent="enviarCodigo" class="border-2 border-gray-400/10 shadow-lg bg-base-400/60 gap-10 rounded-md flex flex-col py-8 px-14">
            <article class=" flex flex-col gap-4">
                <h1 class="text-3xl font-bold">¡Bienvenido a SkillHive!</h1>
                <p class="text-sm w-96">Para confirmar la creación de la cuenta, ingresa el código enviado a tu correo electronico </p>
            </article>

            <div class="flex gap-6">
                <article class="flex flex-col gap-6">
                    <label for="input" class="input input-md input-primary input-bordered bg-primary/50 flex items-center gap-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-number-123"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 10l2 -2v8" /><path d="M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" /><path d="M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5" /></svg>
                        Ingrese el código
                        <input type="text" v-model="codigo" class="grow">
                    </label>

                    <article class=" flex justify-end">
                        <button type="submit" class="btn btn-primary btn-sm w-fit text-white font-normal"> 
                            Seguir
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                        </button>
                    </article>

                    <div v-if="!validar">
                        <span  class="loading loading-dots loading-lg"></span>
                    </div>

                    <div v-else>
                        <p class="text-lg "> {{mensaje}}</p>
                    </div>
                </article>
 
                <img src="/public/logo.png" alt="" width="300">
            </div>

        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { confirmarCorreo } from '../../services/auth-service';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();

    const codigo = ref('');
    const mensaje = ref('');
    const validar = ref(false);
    const enviarCodigo = async () => {
        try {
            const response = await confirmarCorreo(codigo);
            console.log('Respuesta del servidor:', response);

            mensaje.value = response.mensaje;
            validar.value = response.validar;
            
            if (validar.value) {
                setTimeout(() => {
                    mensaje.value = '¡Código confirmado con exito! Redirigiendo al login';
                    router.push('/login');                
                }),2000
            }

        } catch (error) {
             alert('Error al enviar el código');

            console.error('Error al enviar el código:', error);
        }
    }
</script>

