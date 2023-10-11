
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
                                <span class="login-title">{{ $t('login title') }}</span>
                                <q-btn icon="img:_nuxt/assets/images/header/close_icon.png" unelevated dense
                                    @click="$router.go(-1)">
                                </q-btn>
                            </div>
                            <div class="body-header-input">
                                <span class="body-herder-input-title">{{ $t('email or phone') }}</span>
                                <q-input filled dense v-model="userLogin" :placeholder="$t('email or phone')">

                                </q-input>
                            </div>
                            <div class="body-header-input">
                                <!-- <span class="body-herder-input-title">{{ $t('email or phone') }}</span> -->
                                <PasswordComponent :classInput="`form-body`" @update:password="updatePassword"
                                    :showConfirmPassword="false" :performValidation="false" :hint="false" />
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
                                <NuxtLink class="signup-link" to="/register">
                                    <span class="signup-text">{{ $t('if new member') }}</span>{{
                                        $t('sign up title')
                                    }}
                                </NuxtLink>

                            </div>
                        </q-card>
                    </form>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" src="./login.scss"></style>

<script setup lang="ts">


definePageMeta({
    layout: "auth"
})

const userLogin = ref();
const updatePassword = ref();

const disableButton = ref(true);
const checkedRemember = ref(false);
</script>
