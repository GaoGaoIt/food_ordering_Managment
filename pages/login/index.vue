
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
                    <form @submit.prevent="handleSingIn()" class="login-form">
                        <q-card class="tw-p-4 tw-rounded-full">

                            <div class="login-header">
                                <span class="login-title">{{ $t('login title') }}</span>
                                <q-btn icon="img:_nuxt/assets/images/header/close_icon.png" unelevated dense
                                    @click="$router.go(-1)">
                                </q-btn>
                            </div>
                            <div class="body-header-input">
                                <span class="body-herder-input-title">{{ $t('email or phone') }}</span>
                                <q-input  filled dense v-model="userEmail" :placeholder="$t('email or phone')" />


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
                                <q-btn  class="login-btn" flat size="md" type="submit">
                                    {{ $t('login title') }}
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
            <ResponseDialog v-model="dialog" :title="$t(dialogProp.title)" :description="$t(dialogProp.description)"
            :type="dialogProp.type" />
        </div>
    </div>
</template>
<style lang="scss" src="./login.scss"></style>

<script setup lang="ts">

import { useQuasar } from 'quasar';

const $q = useQuasar();
const { signIn } = useAuth(); 

definePageMeta({
    layout: "auth"
})




const disableButton = ref(true);
const checkedRemember = ref(false);
const userPass = ref<String>('');
const userEmail  = ref<string>('');
const dialog = ref<boolean>(false);
const dialogProp = ref({
    title: '',
    description: '',
    type: 'error',
});

const updatePassword = (password:string) => {
    userPass.value = password
}

const validateInput = (title: string, description: string, type: string) => {
    dialog.value = true;
    dialogProp.value.title = title;
    dialogProp.value.description = description;
    dialogProp.value.type = type;
};

async function handleSingIn(){
    $q.loading.show();

    try{
        let credentials = {
            email: userEmail.value,
            password:userPass.value
        };

        await signIn(credentials, {callbackUrl:'/'});
        $q.loading.hide(); 
        setTimeout(() => {
            validateInput('Success', 'Registration was successful', 'success');
        }, 300);
        
    }
    catch(error){
        // console.log(error.data.message);
        $q.loading.hide(); 
        validateInput('Erro', error.data.message, 'error');
        
    }
}
</script>
