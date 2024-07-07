<template>
    <div class="flex justify-center items-center bg-slate-900 h-full ">
        <form @submit.prevent="enviarDatos" class="items-center rounded-xl border-2 border-gray-400/10 shadow-lg bg-base-400/60 gap-4 flex flex-col py-6 px-24">
            <h1 class="text-3xl">Iniciar Sesión </h1>

            <!--Datos del formulario-->
            <section class="flex flex-col gap-4">

                <article class="flex flex-col m-1 gap-2">
                    <small>Correo electronico</small>
                    <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user text-gray-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                        <input type="email" v-model="userData.correo" class="text-xs grow" placeholder="correo@correo.com" />
                    </label>
                </article>

                <article class="flex flex-col m-1 gap-2">
                    <small>Contraseña</small>
                    <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-password text-gray-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 10v4" /><path d="M10 13l4 -2" /><path d="M10 11l4 2" /><path d="M5 10v4" /><path d="M3 13l4 -2" /><path d="M3 11l4 2" /><path d="M19 10v4" /><path d="M17 13l4 -2" /><path d="M17 11l4 2" /></svg>                        
                        <input type="password" v-model="userData.password" class="text-xs grow  " placeholder="***********" />
                    </label>
                </article>
                
            </section>

            <div v-if="id" class="flex flex-col items-center">
                <p>Iniciando</p>
                <span class="loading loading-spinner loading-lg"></span>

            </div>
        
            <!--Botones para iniciar sesión-->
            <button type="submit" class="btn btn-primary btn-sm w-fit font-normal text-white ">Iniciar Sesión</button>

            <!--Iniciar con git y google-->
            <section class="flex gap-4 mt-2">
                <button class="btn btn-md font-medium text-xs">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>                        
                    GitHub
                </button>                
                
                <button class="btn btn-md text-xs  font-medium">
                    Google
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" /></svg>                        
                </button>
            </section>

            <small class="text-xs">¿No tienes cuenta?  <RouterLink to="/registro/freelancer" class="link text-secondary"> ¡Registrate ahora!</RouterLink> </small>
        </form>

    </div>
</template>

<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { login } from '../../services/auth-service';
    import { ref } from 'vue';

    const router = useRouter();
    const id = ref();
    const userData = ref( {
        correo: '',
        password: ''
    });


    const enviarDatos = async () => {
        console.log('Datos del usuario:', userData.value);

        try {
            const response = await login(userData.value);
            console.log('Respuesta del servidor:', response);
            id.value = response.usuario.id_usuario;

            console.log( 'usuario id: ', id.value)
            if (id.value) {
                setTimeout(() => {
                router.push(`/home/${id}`);
            }, 2000);

            } else {
                alert('Los datos ingresados no son correctos');
            }
        }catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        }
    };
</script>

