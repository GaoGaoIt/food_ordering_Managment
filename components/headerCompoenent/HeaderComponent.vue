<template>
    <nav class="tw-flex tw-bg-white tw-justify-between tw-mx-auto tw-fixed tw-z-[2000] tw-w-full tw-h-16 tw-items-center tw-pr-4">
      <div>
        <div class="logo-container">
          <a class="tw-flex tw-items-center" href="/">
            <q-img class="logo-image" src="@/assets/images/header/rest1.png" height="52px" width="52px" /> </a>
          </div>
        </div>
        <div class="tw-flex tw-gap-x-4 tw-pr-4">
          <q-btn to="/orderCart" icon="shopping_cart" unelevated padding="0px" size="16px">
          <q-badge color="red" floating rounded label="3"></q-badge>
          </q-btn>
          <!-- Add a q-btn-dropdown for notifications -->
          <q-btn to="/notification" icon="notifications" unelevated padding="0px" size="16px">
            <q-badge color="red" floating rounded label="3"></q-badge>
          </q-btn>
  
          <q-btn to="/login" unelevated padding="0px" size="md" :label="$t('Login')" v-if="!authStore.getUser()" />
          <q-btn to="/userProfile" icon="person" unelevated padding="0px" size="16px" v-else />
        </div>
      </nav>
    </template>
  
    <script setup>
    import { useAuthStore } from '~/stores/AuthStore';
    const authStore = useAuthStore();
  
    const handleNotificationClick = (notificationText) => {
      // Handle notification click, e.g., show a message or navigate to a notification page
      console.log(`Clicked on notification: ${notificationText}`);
    };
    </script>
  