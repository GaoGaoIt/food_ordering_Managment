<template>
    <div class="tw-grid tw-col-span-12 md:tw-col-span-4 lg:tw-col-span-3">
        <q-card class="tw-pb-4">
            <q-img height="200px" width="300px" src="https://th.bing.com/th/id/R.8b468e45b14ea3ffddaa98f5eb43c93b?rik=FhsYpsuQ0hgY7A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-uX37avGuzrg%2fUaYaLp_QB2I%2fAAAAAAAAM68%2fJi_JXQiuZKA%2fs1600%2f2.jpg&ehk=GQIM%2bHqRLd3pDPfSl0CfRVOTtL72YuxOcwQx1Czii5c%3d&risl=&pid=ImgRaw&r=0">
                <div class="absolute-bottom text-subtitle1 text-center price" @click="$router.push('/productDetails')">
                RM 8
                </div>
            </q-img>
            <q-card-section>
                <div class="tw-flex">
                    <span class="tw-text-xl md:tw-text-2xl tw-font-poppins tw-font-bold">糯米鸡 马来西亚</span>
                </div>
                <div class="text-subtitle2">by John Doe</div><br>
                <q-rating v-model="stars" :max="5" size="32px" />
            </q-card-section>
            
            <q-card-section class="tw-flex tw-justify-between tw-items-center">
                <div class="tw-flex tw-gap-2">
                    <q-btn dense unelevated round>
                        <q-icon name="favorite" color="red" size="md"></q-icon>
                    </q-btn>
                    <q-btn dense unelevated round >
                        <q-icon name="shopping_cart" color="black" size="md"></q-icon>
                    </q-btn>
                </div>
                <div>
                    <q-btn unelevated dense  color="blue">
                        <span class="tw-text-md">Checkout</span>
                    </q-btn>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>
<style src="./ProductsComponent.scss"></style>
<script setup>

</script>