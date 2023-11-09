<template>
    <div class="tw-grid-cols-12 tw-gap-4 tw-grid">
        <div class="tw-grid tw-col-span-12 xl:tw-col-span-3 md:tw-col-span-4" v-for="product in products">
            <q-card class="tw-m-2 tw-p-2 tw-rounded-lg">
                <div class="tw-rounded-lg">
                    <q-img :src="`${config.public.imageUrl}/${product.image_url}`" :ratio="16 / 9" />
                </div>

                <div class="tw-bg-gray-400 infoContainer tw-mt-4  tw-h-[160px]">
                    <q-card-section class="infoTitle">
                        <div class="tw-flex tw-justify-between tw-items-center">
                            <span class="tw-text-lg md:tw-text-lg tw-font-poppins tw-font-bold">
                                {{ product.name }}
                            </span>
                            <span class=" tw-flex tw-text-lg md:tw-text-lg">Rm {{ product.price }}</span>
                        </div>
                        <div class="tw-text-lg md:tw-text-lg">
                            {{ product.restaurant_name }}
                            {{ product.category_name }}
                        </div>
                    </q-card-section>
                    <q-card-actions class="cardAction tw-items-center tw-mt-4">
                        <div class="tw-flex tw-gap-2">
                            <q-btn dense unelevated round>
                                <q-icon name="favorite" color="red" size="md"></q-icon>
                            </q-btn>
                            <q-btn dense unelevated round>
                                <q-icon name="shopping_cart" color="black" size="md"></q-icon>
                            </q-btn>
                        </div>
                        <div>
                            <q-btn unelevated color="blue" v-if="!authStore.getUser()" class="tw-p-4 tw-w-full tw-w-22">
                                <span class="tw-mx-auto" @click="tologin">Login</span>
                            </q-btn>
                            <q-btn unelevated dense color="blue" v-else>
                                <span class="tw-text-md ">Checkout</span>
                            </q-btn>
                        </div>
                    </q-card-actions>
                </div>
            </q-card>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '~/stores/AuthStore';

const config = useRuntimeConfig();
const authStore = useAuthStore();

const props = defineProps({
    products: Array,
});

const tologin = () => {
    // Implement your tologin function here
};
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  