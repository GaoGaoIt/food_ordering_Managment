<template>
    <div class="tw-grid-cols-12 tw-gap-4 tw-grid">
        <div class="tw-grid tw-col-span-12 xl:tw-col-span-3 md:tw-col-span-4" v-for='(product, index) in  productsList'>

            <q-card class="tw-m-2">
                <q-img :src="`${config.public.imageUrl}/${product.image_url}`" :ratio="16 / 9">
                    <div class="absolute-top-right text-subtitle2 tw-rounded-md">
                        Rm {{ product.Products_price }}
                    </div>
                </q-img>

                <q-card-section>
                    <div class="tw-flex">
                        <span class="tw-text-xl md:tw-text-2xl tw-font-poppins tw-font-bold">
                            {{ product.Products_name }}
                        </span>
                    </div>
                    <div class="text-subtitle2"></div>
                </q-card-section>

                <q-card-section class="tw-flex tw-justify-between tw-items-center">
                    <div class="tw-flex tw-gap-2">
                        <q-btn dense unelevated round>
                            <q-icon name="favorite" color="red" size="md"></q-icon>
                        </q-btn>
                        <q-btn dense unelevated round>
                            <q-icon name="shopping_cart" color="black" size="md"></q-icon>
                        </q-btn>
                    </div>
                    <div>
                        <q-btn unelevated  color="blue" v-if="!authStore.getUser()" class="tw-p-4 tw-w-full tw-w-22">
                            <span class="tw-mx-auto" to="/login" >Login</span>
                        </q-btn>
                        <q-btn unelevated dense color="blue" v-else>
                            <span class="tw-text-md ">Checkout</span>
                        </q-btn>

                    </div>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<style src="./ProductsComponent.scss"></style>
<script setup lang="ts">
import { useAuthStore } from '~/stores/AuthStore';
import { ProductsCard } from '~/utilities/types/ProductsCard';


const config = useRuntimeConfig();

const authStore = useAuthStore();

const props = withDefaults(
    defineProps<{
        productsList: Array<ProductsCard>;
    }>(),
    {
        productsList: [],
    }
);

onMounted(() => {

})
</script>