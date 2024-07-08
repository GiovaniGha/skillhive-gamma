<template>
    <div>
        <div id="paypal-button-container"></div>
    </div>
</template>

<script setup>
import { loadScript } from '@paypal/paypal-js';
import { pagarActivoAprobarOrden, pagarActivoCrearOrden, pagarCarritoAprobarOrden, pagarCarritoCrearOrden } from '../../services/ventas-compras-service';
const clientId = 'Af-KeVSnMaIgm6spr9223JyPelwI82TukW7G4TzdBtXRrQ2txx1AUkFuIDamOqpn8OHlmw1PC2EY6CYR';

const props = defineProps({
    modo: { // debe ser 'activo' o 'carrito'
        type: String,
        required: true
    },
    activoid: {
        type: Number,
        required: false
    }
});

loadScript({clientId: clientId}).then(( paypal ) => {
    paypal
        .Buttons({
            fundingSource: paypal.FUNDING.PAYPAL,

            createOrder: async function(data, actions) {
                console.log('createOrder');
                if(props.modo === 'activo') {
                    try {
                        const resp = await pagarActivoCrearOrden(props.activoid);
                        return resp.orden;
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    try {
                        const resp = await pagarCarritoCrearOrden();
                        return resp.orden;
                    } catch (error) {
                        console.error(error);
                    }
                }
            },

            onApprove: async function(data, actions) {
                if(props.modo === 'activo') {
                    try {
                        const resp = await pagarActivoAprobarOrden(props.activoid, data.orderID);
                        return resp;
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    try {
                        const resp = await pagarCarritoAprobarOrden(data.orderID);
                        return resp;
                    } catch (error) {
                        console.error(error);
                    }
                }
            },

            onCancel: function(data, actions) {
                console.log('onCancel');
            },
            onError: function(err) {
                console.log('onError');
            }
        })
        .render('#paypal-button-container')
        .catch((error) => {
            console.error('Buttons not rendered! Error details:');
            console.error(error);
        })
});
</script>