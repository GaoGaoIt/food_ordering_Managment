<template>
    <div>
      <div class="row-background">
        <div class="row">
          <div class="day"><q-btn label="monday"></q-btn></div>
          <div class="day"><q-btn label="tuesday"></q-btn></div>
          <div class="day"><q-btn label="wednesday" color="blue"></q-btn></div>
          <div class="day"><q-btn label="thursday"></q-btn></div>
          <div class="day"><q-btn label="friday"></q-btn></div>
          <div class="day"><q-btn label="saturday"></q-btn></div>
          <div class="day"><q-btn label="sunday"></q-btn></div>
        </div>
      </div>
  
      <div class="tw-fixed tw-z-[2000] tw-w-full tw-mx-auto tw-bg-white">
        <q-tabs class="" v-model="tab" align="justify" narrow-indicator>
          <q-tab name="menu" class="tw-flex">
            <div class="tw-flex tw-items-center">
              <q-icon name="restaurant_menu" size="md" />
              <span>Menu</span>
            </div>
          </q-tab>
          
          <q-tab name="drink" class="tw-flex">
            <div class="tw-flex tw-items-center">
              <q-icon name="img:_nuxt/assets/images/drink.png" size="md" />
              <span>Drink</span>
            </div>
          </q-tab>

          <q-tab name="dessert" class="tw-flex">
            <div class="tw-flex tw-items-center">
              <q-icon name="img:_nuxt/assets/images/dessert.png" size="md" />
              <span>Dessert</span>
            </div>
          </q-tab>
        </q-tabs>
      </div>
  
      <div class="tw-pt-16">
        <q-tab-panels v-model="tab" swipeable animated class="tw-p-0">
          <q-tab-panel name="menu">
            <div class="text-h6">Foods</div>
            <div class="">
              <ProductsComponent :productsList="productsList" />
            </div>
          </q-tab-panel>
  
          <q-tab-panel name="drink">
            <div class="text-h6">Drink</div>
            <div class="content-container tw-flex tw-gap-4 tw-mt-4">
              <!-- <ProductsComponent v-for="test in 12" /> -->
            </div>
          </q-tab-panel>
        </q-tab-panels>
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




const tab = ref('menu');
onMounted(() => {
    getproductsList();
});



</script>

<style scoped>
.row-background {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around; 
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .day {
    flex: 1;
    background-color: #FFFFFF;
    text-align: center;
    font-weight: bold;
    padding: 50px;
  }
</style>






