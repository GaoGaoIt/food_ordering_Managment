
<template>
    <div>

        <div class="login-wrapper">
            <div>
                <div class="login-container">
                    <div class="">
                        <NuxtLink to="/">

                            <q-img class="logo-image" src="@/assets/images/header/rest1.png" spinner-color="white"
                            fit="contain" />
                        </NuxtLink>
                    </div>
                    <form @submit.prevent="" class="login-form">
                        <q-card class="tw-p-4 tw-rounded-full">

                            <div class="login-header">
                                <span class="login-title">{{ $t('register title') }}</span>
                                <!-- <q-btn icon="img:_nuxt/assets/images/header/close_icon.png" unelevated dense @click="$router.go(-1)">
                                </q-btn> -->
                                <NuxtLink class="tw-text-blue-500" to="/login">
                                    <span class="tw-font-bold tw-text-gray-800">{{ $t('have a account') }}</span>
                                    {{
                                        $t('now login')
                                    }}
                                </NuxtLink>
                            </div>
                            <div class="body-header-input">
                                <span class="body-herder-input-title">{{ $t('email') }}</span>
                                <q-input filled dense v-model="userLogin" :placeholder="$t('pls insert email')">

                                </q-input>
                            </div>
                            <div class="body-header-input">
                                <span class="body-herder-input-title">{{ $t('name') }}</span>
                                <q-input filled dense v-model="userLogin" :placeholder="$t('pls insert your name')">

                                </q-input>
                            </div>
                            <div class="body-header-input">
                                <span class="body-herder-input-title">{{ $t('phone number') }}</span>
                            </div>
                            <!-- phone -->
                            <div class="body-header-input">
                                <PhoneComponent
                                    ref="actionOTP"
                                    :showPhoneInput="true"
                                    :showOTPInput="false" />
                            </div>
                            <div class="body-header-input">
                                <!-- <span class="body-herder-input-title">{{ $t('email or phone') }}</span> -->
                                <PasswordComponent :classInput="`form-body`" @update:password="updatePassword"
                                    :showConfirmPassword="true" :performValidation="false" :hint="false" />
                            </div>
                            <div class="form-action">
                                <q-checkbox right-label v-model="checkedRemember" label="Remember" size="sm" />

                                <nuxt-link to="" class="form-action-btn">{{ $t('forgot password') }}
                                </nuxt-link>
                            </div>
                            <div class="login-action">
                                <q-btn :disable="disableButton" class="login-btn" flat size="md" type="submit">
                                    {{ $t('sign up title') }}
                                </q-btn>
                            </div>
                        </q-card>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" src="./register.scss"></style>

<script setup lang="ts">


definePageMeta({
    layout: "auth"
})

const userLogin = ref();
const updatePassword = ref();

const disableButton = ref(true);
const checkedRemember = ref(false);
</script>
