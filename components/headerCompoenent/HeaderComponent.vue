<template>
    <nav
        class="tw-flex tw-bg-white tw-justify-between tw-mx-auto tw-fixed tw-z-[2000] tw-w-full tw-h-16 tw-items-center tw-pr-4">
        <div class="">
            <div class="logo-container">
                <a class="tw-flex tw-items-center" href="/">
                    <q-img class="logo-image" src="@/assets/images/header/rest1.png" height="52px" width="52px" /> </a>
            </div>
        </div>
        <div class="tw-flex tw-gap-x-4 tw-pr-4">
            <div class="icon-text">
                <q-btn to="" icon="shopping_cart" unelevated padding="0px" size="md" />
                <div>Order Cart</div>
            </div>

            <div class="icon-text">
                <q-btn to="/notification" icon="payment" unelevated padding="0px" size="md" />
                <div>Payment</div>
            </div>

            <div class="icon-text">
                <q-btn to="/notification" icon="history" unelevated padding="0px" size="md" />
                <div>My Order</div>
            </div>

            <div class="icon-text">
                <q-btn to="/notification" icon="notifications" unelevated padding="0px" size="md" />
                <div>Notification</div>
            </div>

            <div class="icon-text" v-if="!authStore.getUser()">
                <q-btn to="/login" color="blue-7" padding-left="10px" size="md" :label="$t('Login')" />
            </div>

            <div class="icon-text" v-else>
                <q-btn to="/userProfile" icon="person" unelevated padding="0px" size="md" />
                <div>User Profile</div>
            </div>
        </div>
    </nav>
</template>

<!-- <style src="./HeaderComponent.scss" lang="scss"></style> -->
<script setup >

import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();





</script>

<style scoped>
.icon-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;
}

.icon-text i {
    font-size: 24px; 
}
</style>