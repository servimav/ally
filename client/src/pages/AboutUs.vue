<script setup lang='ts'>
import { ROUTE_NAME } from '@/router';
import AdriCQContact from '@/components/widgets/AdriCQContact.vue'

</script>

<template>
    <div class="p-2 space-y-2 text-primary-low">
        <Card class="px-4">
            <div class="text-center">
                <div class="w-24 mx-auto rounded-full">
                    <img src="/vite.svg" />
                </div>
                <h2 class="text-2xl">Ally</h2>
                <p class="font-thin text-xl">Gestor de Enlaces</p>
            </div>
            <div class="mt-4 space-y-4 text-justify">
                <p><span class="font-bold dark:text-yellow-300">Ally</span> brinda la posibilidad de compartir
                    tus enlaces de interés como <RouterLink class="font-bold dark:text-yellow-300"
                        :to="{ name: ROUTE_NAME.MAIN_PAYMENT }">
                        Métodos de Pago</RouterLink> y <RouterLink class="font-bold dark:text-yellow-300"
                        :to="{ name: ROUTE_NAME.MAIN_REFERAL }">
                        Enlaces de Referidos</RouterLink>, todo concentrado y
                    accesible desde un solo lugar.</p>
                <p>También te permite generar <RouterLink class="font-bold dark:text-yellow-300"
                        :to="{ name: ROUTE_NAME.MAIN_MYQR }">
                        Códigos QR</RouterLink> con varias funciones como Llamar, Enviar SMS, Acceder a una Web, etc.
                </p>
                <p>Ally es de uso 100% gratuito hoy, mañana y siempre</p>
                <p class="text-center mt-4">Este proyecto fue desarrollado por <a
                        class="text-green-800 dark:text-yellow-300" href="https://github.com/AdriCQ"
                        target="_blank">AdriCQ</a><!--
                    gracias a <a href="https://www.servimav.com" target="_blank" class="text-green-800">SERVIMAV
                        S.R.L</a> --></p>

                <p class="text-center">Si te gustó y quieres apoyarme no dudes en escribir</p>

                <AdriCQContact />
            </div>
        </Card>
    </div>
</template>
