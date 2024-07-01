<template>
    <div class="h-full flex gap-4 ml-2 overflow-hidden">
        <form @submit.prevent="enviarDatos" class="flex flex-col items-center gap-2 ">

            <article class="">
                <h3 class="text-secondary ml-6">Genera Ingresos con tu trabajo</h3>
                <h1 class="text-3xl">Crea una nueva cuenta</h1>
            </article>

            <!--columnas de datos-->

            <!--Datos generales-->
            <section class="flex gap-14 items-center">
                <div class="flex flex-col gap-6"> 
                    <article class="flex flex-col gap-1 m-1"><!--correo-->
                        <small>Correo electronico</small>
                        <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user text-gray-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>                            
                            <input type="email" v-model="userData.correo" class="text-xs grow  " placeholder="correo@correo.com" />
                        </label>
                    </article>

                    <article class="flex flex-col gap-1 m-1 mb-3"><!--Nombre-->
                        <small>Nombre</small>
                        <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                            <input type="text" v-model="userData.nombre" class="text-xs grow " placeholder="Ej: Juan" />
                        </label>
                    </article>
    
                    <article class="flex flex-col gap-1 m-1 mb-3"><!--apellido-->
                        <small>Apellido</small>
                        <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                            <input type="text" v-model="userData.apellido" class="text-xs grow " placeholder="Ej: Sánchez" />
                        </label>
                    </article>



                    <label for="" class="flex gap-2 "> 
                        <input type="checkbox" v-model="check" name="" id="" class="checkbox checkbox-xs checkbox-primary">
                        <small class="text-xs">Estoy de acuerdo con las <RouterLink to="/privacidad" class="link "> politicas de privacidad</RouterLink> </small>
                    </label>
                </div>
    
                <!--Datos contraseña-->
                <div>
                    <article class="flex flex-col gap-1 m-1 mb-3">
                        <small>Contraseña</small>
                        <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user text-gray-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>                            
                            <input type="password" class="text-xs grow " placeholder="************" />
                        </label>
                    </article>

                    <ul class="text-xs list-disc mx-5 my-4 flex flex-col gap-1 text-gray-200">
                        <li>2 números</li>
                        <li>12 caracteres</li>
                        <li>1 caracter especial</li>
                    </ul>
    
                    <article class="flex flex-col gap-1 m-1 mb-3">
                        <small>Contraseña</small>
                        <label class="input input-bordered input-primary input-sm bg-primary/10 flex items-center gap-2">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user text-gray-300"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>                            
                            <input type="password" v-model="userData.password" class="text-xs grow " placeholder="************" />
                        </label>
                    </article>

                </div>
            </section>

            <!--Botones cambiar y registrar-->
            <section class="flex gap-4 mt-2">
                <!-- <button class="btn btn-sm btn-primary text-xs  font-medium">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
                    <RouterLink to="empresa">Cambiar tipo de cuenta</RouterLink>
                </button> -->

                <button type="submit" class="btn btn-sm btn-primary text-xs  font-medium">
                    Registrarse
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                </button>            
            </section>


            
            <!--Botones git y google-->
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

            <small class="mt-4"> ¿Ya tienes cuenta? <RouterLink to="/login" class="link text-secondary" >Inicia sesión</RouterLink></small>
        </form>

        <!--Seccion de la derecha con la imagen de fondo-->
        <section class="bg-primary-content w-full overflow-hidden flex items-center justify-center">
            <div class="flex flex-col gap-4">    
                <h2 class="text-8xl font-bold tracking-wider "> Skill</h2>
                <h2 class="text-8xl font-bold tracking-wider "> Hive</h2>

            </div>
        </section>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink, useRouter } from 'vue-router';
    import { login } from '../../services/auth-service';
    
    const router = useRouter(); 

    const userData = ref({
        correo: '',
        nombre: '',
        apellido: '', 
        password: '' 
    });

    const enviarDatos = async () => {
        console.log(userData.value); 

        try {
            const response = await login(userData.value);
            console.log('Respuesta del servidor:', response);
            setTimeout(() => {
                router.push('/confirmacion');
                
            }), 1000

        } catch (error) {

            console.error('Error al enviar el formulario:', error);

        }
    }


</script>

