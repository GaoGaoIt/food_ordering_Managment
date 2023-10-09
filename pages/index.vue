<template>
    <div class="tw-bg-[#FDEDEE] tw-mx-auto">
        <div class="tw-grid tw-grid-cols-12 tw-gap-4">

            <div class="tw-col-span-12 md:tw-col-span-4" v-for="item, itemKey in categoryItem" :key="itemKey">
                <q-btn class="items-center tw-w-full tw-h-full" :to="item.link" size="xl">
                    <img :src="item.image" class="item_image"/>
                    <span class="tw-mt-4 tw-text-lg sm:tw-text-md">{{ item.title }}</span>
                </q-btn>
            </div>
        </div>
    </div>
</template>
  
<style>
    .item_image{
        @apply tw-min-h-full
    }
</style>

<script setup>
    const categoryItem  = ref([
        {
            link:"",
            image:"_nuxt/assets/images/header/logo.jpg",
            title:"Restaurants Order Menu"
        },
        {
            link:"",
            image:"_nuxt/assets/images/header/order.png",
            title:"Order What Your Need"
        },
        {
            link:"",
            image:"_nuxt/assets/images/header/shopping_cart_image.png",
            title:"My Order"
        },
    ])
</script>