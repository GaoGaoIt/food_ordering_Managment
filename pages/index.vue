<template>
    <div>
        <div class="">
            <div class="tw-flex tw-fixed tw-z-[2000] tw-w-full tw-mx-auto tw-bg-white tw-pr-8">
                <div class="tw-bg-[#D6D6D6] tw-w-full tw-rounded-lg">

                    <q-tabs v-model="tab" align="left" no-caps narrow-indicator>
                        <q-tab :name="day.name" class="tw-flex" v-for="day in  dayList">
                            <div class="tw-flex tw-items-center">
                                <span class="tw-font-bold">{{ day.name }}</span>
                            </div>
                        </q-tab>
                    </q-tabs>
                </div>
            </div>
            <div class="tw-pt-16 ">
                <q-tab-panels v-model="tab" swipeable animated class="tw-p-0" v-for="day in  dayList">
                    <q-tab-panel :name="day.name">
                        <div >                      
                            <q-tabs v-model="categoryTab" align="left" no-caps narrow-indicator>
                                <q-tab :name="category.category" class="tw-flex" v-for=" category in  categoryList">
                                    <div class="tw-flex tw-items-center">
                                        <span class="tw-font-bold">{{ category.category }}</span>
                                    </div>
                                </q-tab>
                            </q-tabs>
                        </div>
                        <div class="tw-bg-blue-500 tw-w-full tw-h-full tw-mt-4">
                            <q-tab-panels v-model="categoryTab">
                                <q-tab-panel :name="category.category " v-for=" category in  categoryList">
                                    <ProductsComponent :productsList="productsList" />
                                </q-tab-panel>
                            </q-tab-panels>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
    </div>
</template>

<style>
.content-container {
    @apply tw-grid tw-grid-cols-12;

}

.q-tab-panel {
    @apply tw-p-0 !important;
}
</style>

<script setup lang="ts">

import { useAuthStore } from '~/stores/AuthStore'
import { ProductsCard } from "~/utilities/types/ProductsCard"


const config = useRuntimeConfig();



const authStore = useAuthStore();
const { data } = useAuth();
authStore.setUser(data.value?.data);

const emptyProductsCard: ProductsCard = {

    Products_name: null,
    Products_price: null,
    image_url: null,
    Products_category_id: null,
    Product_start_date: null,
    Product_end_date: null,
};

const productsList = ref<ProductsCard[]>([emptyProductsCard]);

const getproductsList = async () => {
    const productList_response = await $fetch(`${config.public.apiBase}/Products/AllProducts`);
    productsList.value = productList_response.data;
}




const tab = ref('Monday');
const categoryTab  =ref('All');
onMounted(() => {
    getproductsList();
});

const dayList = ref([
    {
        id: 1,
        name: "Monday"
    },
    {
        id: 2,
        name: "Tuesday"
    },
    {
        id: 3,
        name: "Wednesday"
    },
    {
        id: 4,
        name: "Thursday"
    },
    {
        id: 5,
        name: "Friday"
    },
]);

const categoryList  =ref([
    {
        id:1,
        category : "All",
    },
    {
        id:2,
        category:"Noodle"
    },
    {
        id:2,
        category:"Rice"
    },
    {
        id:2,
        category:"Set lunch"
    },
]);

</script>