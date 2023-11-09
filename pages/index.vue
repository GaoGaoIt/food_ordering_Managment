<template>
    <div>
        <div>
            <div class="tw-flex tw-fixed tw-z-[2000] tw-w-full tw-mx-auto tw-bg-white tw-pr-8">
                <div class="tw-bg-[#D6D6D6] tw-w-full tw-rounded-lg">


                    <q-tabs v-model="tab" align="justify">
                        <q-tab :name="menu.day" class="tw-flex" v-for="menu in menuList">
                            <div class="tw-grid tw-items-center">
                                <span class="tw-font-bold">{{ menu.day }}</span>
                            </div>
                        </q-tab>
                    </q-tabs>
                </div>

            </div>
            <div class="tw-pt-16 ">
                <q-tab-panels v-model="tab" class="tw-p-0">
                    <q-tab-panel :name="menutab.day" v-for="menutab in menuList" >
                        <ProductsComponent :productsList="menutab.products" />
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

interface menuList {
    id: string | null;
    start_date: string | null;
    end_time: string | null;
    products: Array<ProductsCard>[]
}

import { useAuthStore } from '~/stores/AuthStore'
import { ProductsCard } from "~/utilities/types/ProductsCard"


const config = useRuntimeConfig();



const authStore = useAuthStore();
const { data } = useAuth();
authStore.setUser(data.value?.data);


const menuList = ref();
const filterItem = ref([]);

const tab = ref('Monday');
const category = ref('All');


const getProductList = async () => {
    try {
        // Assuming '$fetch' is a function for making API requests, and 'menuList' is defined.
        const menuResponse = await $fetch(`${config.public.apiBase}/Products/menulist`);

        menuList.value = menuResponse.data;
        // console.log(menuList);

    } catch (error) {
        console.error("Error fetching menu list:", error);
        throw error;
    }
}
const getfilterItem = (category) => {
    return menuList.value.filter(product => product.category === category);
}

const filteredProductList = computed(() => {
    if (menuList.value.length === 0) {
        return [];
    }

    if (category.value === "All") {
        return menuList.value;
    }

    return getfilterItem(category.value);
});















onMounted(() => {
    getProductList();
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

const categoryList = ref([
    {
        id: 1,
        category: "All",
    },
    {
        id: 2,
        category: "Noodle"
    },
    {
        id: 2,
        category: "Rice"
    },
    {
        id: 2,
        category: "Set lunch"
    },
]);

</script>