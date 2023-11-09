<template>
    <div class="tw-grid-cols-12 tw-gap-4 tw-grid">
        <div class="tw-grid tw-col-span-12 xl:tw-col-span-3 md:tw-col-span-4" v-for="(product, index) in products"
            :key="index">
            <q-card class="tw-m-2 tw-p-2 tw-rounded-lg">
                <div class="tw-rounded-lg">
                    <q-img :src="`${config.public.imageUrl}/${product.image_url}`" :ratio="16 / 12">
                        <div class="absolute-bottom-right text-subtitle2 tw-rounded-xl">
                            {{ product.restaurant_name }}
                        </div>
                    </q-img>
                </div>

                <q-card-section>
                    <div class="tw-flex tw-justify-between tw-items-center">
                        <span class="tw-text-xl md:tw-text-lg tw-font-poppins tw-font-bold">
                            {{ product.name }}
                        </span>
                        <span class="tw-flex tw-text-lg md:tw-text-lg">Rm {{ product.price }}</span>
                    </div>
                </q-card-section>
                <q-space />
                <q-card-actions>
                    <div class="tw-w-full tw-flex">
                        <div class="tw-w-full">
                            <div class="tw-w-full tw-flex tw-justify-between tw-gap-x-4">
                                <div class="tw-flex">
                                    <q-btn unelevated dense size="lg" @click="changeProductFavorite(index)">
                                        <q-icon
                                            :name="productFavorites[index] ? 'img:_nuxt/assets/images/favorite.svg' : 'img:_nuxt/assets/images/unfavorite.svg'"></q-icon>
                                    </q-btn>
                                    <q-btn unelevated dense szie="lg">
                                        <q-icon name="add_shopping_cart" size="md"></q-icon>
                                    </q-btn>
                                </div>
                                <div class="tw-w-full tw-flex">

                                    <q-btn class="checkoutBtn">
                                        <q-icon name="point_of_sale"></q-icon>
                                        <span>Checkout</span>
                                    </q-btn>
                                </div>

                            </div>
                        </div>
                    </div>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</template>

<style lang="scss" src="./productsCardComponent.scss"></style>
  
<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();
const config = useRuntimeConfig();

const props = defineProps({
    products: Array,
});

const productFavorites = ref([] as boolean[]);

const changeProductFavorite = (productIndex:number) => {
  if (props.products && props.products[productIndex]) {
    productFavorites.value[productIndex] = !productFavorites.value[productIndex];
  }
};

    const tologin = () => {
        // Implement your tologin function here
    };
</script>
  
<style scoped>
/* Add your component-specific styles here */
</style>
  