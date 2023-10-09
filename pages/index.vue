<template>
    <div class="tw-bg-[#FDEDEE] tw-mx-auto">
        <div class="tw-grid tw-grid-cols-12 tw-gap-4">

            <div class="tw-col-span-12 md:tw-col-span-4" v-for="item, itemKey in categoryItem" :key="itemKey">
                <q-btn class="items-center tw-w-full tw-h-full" :to="item.link" size="xl">
                    <img :src="item.image" alt="item.title" />
                    <span class="tw-mt-4 tw-text-lg sm:tw-text-md">{{ item.title }}</span>
                </q-btn>
            </div>
        </div>
    </div>
</template>
  
<style>
.item_image {
    @apply tw-min-h-full
}
</style>

<script setup lang="ts">
import order_menu from '~/assets/images/header/logo.jpg'
import self_serve from '~/assets/images/header/order.png'
import shopping_cart from '~/assets/images/header/shopping_cart_image.png'
const categoryItem = ref([
    {
        link: "",
        image: order_menu,
        title: "Restaurants Order Menu",
    },
    {
        link: "",
        image: self_serve,
        title: "Order What You Need",
    },
    {
        link: "",
        image: shopping_cart,
        title: "My Order",
    },
])
</script>