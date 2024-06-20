<template>
    <div class="navbar bg-base-100 fixed top-0 z-10 w-full h-fit">
        <div class="navbar-start">
            <Logo />
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li v-for="ruta in rutas">
                    <RouterLink :to="ruta.url">
                        {{ ruta.nombre }}
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end flex-none gap-2">
            <div class="form-control">
                <input type="text" placeholder="Search" class="input input-bordered input-primary w-24 md:w-auto" />
            </div>
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between" href="/perfil/1">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import Logo from './Logo.vue';
    import { ref } from 'vue';

    const rutas = ref([
        { nombre: 'Home', url: '/' },
        { nombre: 'About', url: '/' },
        { nombre: 'Contact', url: '/' },
    ]);

</script>