<template>
    <div>
        <div>
            <div class="tw-flex tw-mt-8 tw-items-baseline tw-gap-4 tw-text-xl">
                <span class="tw-font-bold tw-text-4xl">Food Cart</span>
                <span>3 items</span>
            </div>
            <div class="tw-mt-4">
                <q-separator size="2px" class="tw-bg-blue-500 tw-w-full" />
            </div>
        </div>
        <div class="tw-mt-8">
            <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-w-full tw-h-full">
                <div class="tw-col-span-12 tw-border md:tw-col-span-8">
                    <div class=" tw-bg-gray-300 tw-p-4 tw-rounded-lg">
                        <q-list bordered class="rounded-borders">
                            <q-expansion-item expand-icon-toggle expand-separator class="tw-bg-white" v-for="tets in 3">
                                <template v-slot:header>
                                    <q-item-section>
                                        <div>
                                            <div class="tw-flex tw-gap-x-4 tw-items-center tw-gap-y-4">
                                                <div>
                                                    <q-img src="https://studyisperfect.online/storage//Products/October 2023/6541136f31639.JPG" fit="cover"
                                                        style="width: 100px; height: 100px;" />
                                                </div>
                                                <div>
                                                    <!-- title -->
                                                    <div class="tw-mb-2">
                                                        <span class="tw-font-bold tw-text-lg">food 1</span>
                                                    </div>
                                                    <div class="tw-mb-2">
                                                        <span class="tw-text-green-300">RM 10 / 1pc</span>
                                                    </div>
                                                    <div class="">
                                                        <div class="tw-flex tw-items-center tw-gap-8">
                                                            <q-btn>+</q-btn>
                                                            <span>1</span>
                                                            <q-btn>-</q-btn>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </q-item-section>


                                    <q-item-section side>
                                        <div>
                                            Rm10
                                        </div>
                                    </q-item-section>
                                </template>

                                <q-card>
                                    <q-card-section>
                                        <q-form>
                                            <q-input type="textarea" label="Mark On Your Food Command" autogrow />
                                        </q-form>
                                    </q-card-section>
                                </q-card>
                            </q-expansion-item>
                            <q-separator />

                        </q-list>
                    </div>
                </div>
                <div class="tw-col-span-12 md:tw-col-span-4">
                    <div class="tw-w-full tw-bg-gray-300 tw-rounded-lg tw-p-4">
                        <!-- title -->
                        <div class="tw-w-full">
                            <span class="tw-font-bold tw-text-lg">Order Summary</span>
                        </div>
                        <div class="tw-mt-16">
                            <div class="tw-w-full tw-flex tw-justify-between">
                                <span>SubTotal</span>
                                <span>Rm 10 </span>
                            </div>
                            <div class="tw-mt-8">
                                <q-checkbox label="Do you agree with the extra delivery fee after payment?" />
                            </div>
                            <div class="tw-w-full tw-mt-12">

                                <q-btn to="/payment" class=" tw-bg-green-700 tw-rounded-lg paymentBtn" unelevated>
                                    <span>Continue To Payment</span>
                                    <q-icon name="trending_flat" />
                                </q-btn>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style src="./orderCart.scss" lang="scss"></style>
<script lang="ts" setup>

</script>