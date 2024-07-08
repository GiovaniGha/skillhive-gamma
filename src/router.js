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
import Catalogo from "./pages/catalogo/Catalogo.vue";
import Publicacion from "./pages/publicacion/Publicacion.vue";
import CrearEditar from "./pages/crear-editar/CrearEditar.vue";
import Confirmacion from "./pages/registro/Confirmacion.vue";
import RegistroEmpresa from "./pages/registro/RegistroEmpresa.vue";
import OpenComission from "./pages/open-comission/OpenComission.vue";
import Hojas from "./pages/open-comission/Hojas.vue";
import Balance from "./pages/open-comission/Balance.vue";
import Pedidos from "./pages/open-comission/Pedidos.vue";
import NotFound from "./pages/NotFound.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            name: "home",
            component: Home,
            props: true 
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
            path: "/registro/",
            name: "registro",
            children: [
                {
                    path: "freelancer",
                    name:"registro-freelancer",
                    component: Registro

                },

                {
                    path: "empresa",
                    name:"registro-empresa",
                    component: RegistroEmpresa

                },

                {
                    path: "confirmacion",
                    name:"confirmacion",
                    component: Confirmacion

                }
            ]
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
                    props: true 
                },
                {
                    path:'empleos',
                    name:'catalogo-empleos',
                    props: true 
                },
                {
                    path:'comisiones',
                    name:'catalogo-comisiones',
                    props: true
                },
                {
                    path:'productos',
                    name:'catalogo-productos',
                    props: true
                }
            ]
        },

        {
            path:"/publicacion/:id/tipo",
            name: 'publicacion',
            component: Publicacion,
            props: true 
        },

        {
            path:"/crear/:tipo",
            name:'crear',
            component: CrearEditar,
            props: true
        },

        {
            path:"/editar/:tipo/:id",
            name:'editar',
            component: CrearEditar,
            props: true
        },

        {
            path:"/open-comission/",
            name:'open-comission',
            component: OpenComission,
            props: true,
            children: [

                {
                    path:"hojas",
                    name:'comisiones-hojas',
                    component: Hojas
                },

                {
                    path:"balance",
                    name:'comisiones-balance',
                    component: Balance

                },
                {
                    path:"pedidos",
                    name:'comisiones-pedidos',
                    component: Pedidos

                },
            ]
        },

        {
            path: "/not-found",
            name: "not-found",
            component: NotFound
        }

        


    ]

    
});

export default router;

