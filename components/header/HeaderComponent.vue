<template>
    <nav class="tw-flex tw-bg-white tw-justify-between tw-mx-auto tw-fixed tw-z-[2000] tw-w-full">
        <div class="tw-pl-4">
            <div class="logo-container">
                <a class="tw-flex tw-items-center" href="/">
                    <img class="logo-image" src="@/assets/images/header/logo.jpg" height="48px" width="48px" /> </a>
            </div>
        </div>
        <div class="tw-flex tw-items-center tw-gap-x-4 tw-pr-4">
            <q-btn to="" icon="shopping_cart" unelevated padding="0px" size="md" />

            <q-btn to="" icon="notifications" unelevated padding="0px" size="md"/>

            <q-btn to="_nuxt/pages/login/login.vue" icon="person" unelevated padding="0px"  size="md"/>

        </div>
    </nav>
</template>

<!-- <style src="./HeaderComponent.scss" lang="scss"></style> -->
<script setup >


</script>
