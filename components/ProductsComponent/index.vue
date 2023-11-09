<template>
    <div>
      <q-tabs v-model="selectedCategory" align="justify">
        <q-tab name="All">All</q-tab>
        <q-tab :name="category.name" v-for="category in categories" :key="category.name">
          {{ category.name }}
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="selectedCategory" class="tw-mt-16">
        <q-tab-panel name="All">
          <productsCardComponent :products="productsList" />
        </q-tab-panel>
        <q-tab-panel :name="category.name" v-for="category in categories" :key="category.name">
          <productsCardComponent :products="getProductsByCategory(category.name)" />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/AuthStore';
import { ProductsCard } from '~/utilities/types/ProductsCard';

const config = useRuntimeConfig();
const authStore = useAuthStore();
const selectedCategory = ref('All');
const categories = ref([]);

const props = withDefaults(
    defineProps<{
        productsList: Array<ProductsCard>;
    }>(),
    {
        productsList: [],
    }
);
const router = useRouter();

const getCategories = async () => {
    try {
        const response = await $fetch(`${config.public.apiBase}/Products/productCategories`);
        categories.value = response.data;
    } catch (error) {
        console.error('Error fetching categories', error);
    }
};

const getProductsByCategory = (categoryName) => {
    return props.productsList.filter(product => product.category_name === categoryName);
};

const toLogin = () => {
    router.push('/login');
};

onMounted(() => {
    getCategories();
});
</script>
  
<style lang="scss" src="./ProductsComponent.scss"></style>
  