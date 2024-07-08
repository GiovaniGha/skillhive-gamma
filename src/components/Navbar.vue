<template>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <Logo />
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal gap-2 px-2">
          <li v-for="ruta in rutas" :key="ruta.url">
            <RouterLink :to="ruta.url">
              {{ ruta.nombre }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end flex-none gap-2">
        <div  class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered input-primary w-24 md:w-auto" />
        </div>
        <div v-if="sesionActiva.value" class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <!-- Imagen del avatar -->
            </div>
          </div>
          <ul class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between" href="/perfil/1">
                Perfil
                <span class="badge">Nuevo</span>
              </a>
            </li>
            <li>
              <RouterLink to="/login" @click="handleLogout">Cerrar Sesión</RouterLink>
            </li>
            <li>
              <RouterLink to="/politicas">Politicas de privacidad</RouterLink>
            </li>
          </ul>
        </div> 
        
        <div v-else class=" flex items-center">
            <button type="button" class=" btn btn-primary btn-md text-white text-xs font-normal">
                <RouterLink to="/login" class="flex items-center gap-1">
                    Iniciar sesión
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" /></svg>
                </RouterLink>
            </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue';
    import { ref } from 'vue';
    import { logout, sesionActiva } from '../services/auth-service';
    import { useRouter } from 'vue-router';
  
    const router = useRouter();
  
    const handleLogout = () => {
      logout(); 
      router.push('/login'); // Redirige a la página de inicio de sesión después de cerrar sesión
    };
  
    const rutas = ref([
      { nombre: 'Home', url: '/' },
      { nombre: 'Catálogo', url: '/catalogo/productos' },
      { nombre: 'Comisiones', url: '/catalogo/comisiones' },
    ]);
  </script>
  