<template>
  <div>
    <div class="tw-mt-8 tw-text-xl">
      <div class="tw-flex tw-items-center tw-justify-between">
        <span class="tw-font-bold tw-text-4xl">Favorite</span>
      </div>
    </div>
    <div class="tw-mt-4">
      <q-separator size="2px" class="tw-bg-blue-500 tw-w-full" />
    </div>

    <!-- Container with space around the cards -->
    <div class="tw-mt-4">
      <div class="tw-grid tw-grid-cols-12 tw-gap-4">
        <div class="tw-col-span-12 md:tw-col-span-6" v-for="(product, index) in favoriteData">
          <q-card class="" flat bordered>
            <q-card-section horizontal class="tw-gap-4">
              <q-img class="col-4" :src="`${config.public.imageUrl}/${product.product.image_url}`" :ratio="4/3"/>

              <div class="tw-w-full tw-flex tw-items-center">
                <div class="tw-flex-col">
                  <div>
                    <span class="tw-font-poppins tw-text-xl tw-font-semibold">{{ product.product.name }}</span>
                  </div>
                  <div>
                    <span>Rm{{ product.product.price }}</span>
                  </div>
                </div>
              </div>
              <q-card-actions>
                <q-btn class="reOrderBtn" unelevated flat>
                  ReOrder
                </q-btn>
              </q-card-actions>
            </q-card-section>

          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./favorite.scss"></style>


<script setup lang="ts">

import { useAuthStore } from '~/stores/AuthStore';
import { ref, onMounted } from 'vue';


const { token, status: authStatus } = useAuth();
const config = useRuntimeConfig();

const favoriteData = ref([]);
const productData = ref([]);


const getUserProductFavorite = async () => {
  try {
    if (authStatus.value === "authenticated") {
      const response = await $fetch(`${config.public.apiBase}/getFavorite`, {
        headers: {
          Authorization: token.value || null
        }
      });

      favoriteData.value = response.data;
    }
  } catch (error) {
    console.error('Error fetching user product favorites:', error);
  }
};








onMounted(() => {
  getUserProductFavorite();
})


</script>
