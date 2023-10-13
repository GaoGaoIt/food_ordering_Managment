<template>
    <nav class="tw-flex tw-bg-white tw-justify-between tw-mx-auto tw-fixed tw-z-[2000] tw-w-full tw-h-16 tw-items-center tw-pr-4">
        <div class="">
            <div class="logo-container">
                <a class="tw-flex tw-items-center" href="/">
                    <q-img class="logo-image" src="@/assets/images/header/rest1.png" height="52px" width="52px" /> </a>
            </div>
        </div>
        <div class="tw-flex tw-gap-x-4 tw-pr-4">
            <q-btn to="" icon="shopping_cart" unelevated padding="0px" size="md" />

            <q-btn to="/notification" icon="notifications" unelevated padding="0px" size="md"/>

            <q-btn to="" icon="person" unelevated padding="0px"  size="md"/>
            <q-btn to="/login"  unelevated padding="0px"  size="md" :label="$t('Login')"/>

        </div>
    </nav>
</template>

<!-- <style src="./HeaderComponent.scss" lang="scss"></style> -->
<script setup >


</script>
