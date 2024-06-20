import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/login/Login.vue";
import Registro from "./pages/registro/Registro.vue";
import Carrito from "./pages/carrito/Carrito.vue";
import Pagar from "./pages/carrito/Pagar.vue";
import Perfil from "./pages/perfil/Perfil.vue";
import PerfilHome from "./pages/perfil/PerfilHome.vue";
import PerfilActivos from "./pages/perfil/PerfilActivos.vue";
import PerfilPublicaciones from "./pages/perfil/PerfilPublicaciones.vue";
import PerfilServicios from "./pages/perfil/PerfilServicios.vue";
import Publicaciones from "./pages/catalogo/Publicaciones.vue";
import Empleos from "./pages/catalogo/Empleos.vue";
import Comisiones from "./pages/catalogo/Comisiones.vue";
import Productos from "./pages/catalogo/Productos.vue";
import Catalogo from "./pages/catalogo/Catalogo.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            name: "home",
            component: Home, 
        },

        {
            path: "/perfil/:id",
            name: "perfil",
            component: Perfil,
            children: [

                {
                    path: '',
                    name: 'perfil-home',
                    component: PerfilHome
                },

                {
                    path: 'publicaciones',
                    name: 'perfil-publicaciones',
                    component: PerfilPublicaciones
                },

                {
                    path: 'activos',
                    name: 'perfil-activos',
                    component: PerfilActivos
                },

                {
                    path: "servicios", 
                    name: "perfil-servicios",
                    component: PerfilServicios
                }

            ]
        },

        {
            path: "/login",
            name: "login",
            component: Login,
        },

        {
            path: "/registro",
            name: "registro",
            component: Registro,
        },

        {
            path: "/carrito",
            name: "carrito",
            component: Carrito
        },

        {
            path: "/pagar",
            name: "pagar",
            component: Pagar
        },
        
        {
            path: "/catalogo/",
            name: "catalogo",
            component: Catalogo,
            children:[
                {
                    path:'publicaciones',
                    name:'catalogo-publicaciones',
                    component: Publicaciones

                },
                {
                    path:'empleos',
                    name:'catalogo-empleos',
                    component: Empleos
                },
                {
                    path:'comisiones',
                    name:'catalogo-comisiones',
                    component: Comisiones
                },
                {
                    path:'productos',
                    name:'catalogo-productos',
                    component: Productos
                }


            ]
        },
            

    ]
});

export default router;

