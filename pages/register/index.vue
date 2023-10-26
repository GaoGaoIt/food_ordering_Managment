<template>
    <div>
        <div class="login-wrapper">
            <div>
                <div class="login-container">
                    <div>
                        <NuxtLink to="/">
                            <q-img class="logo-image" src="@/assets/images/header/rest1.png" spinner-color="white"
                                fit="contain" />
                        </NuxtLink>
                    </div>
                    <form @submit.prevent="register" class="login-form">
                        <q-card class="tw-p-4 tw-rounded-full">
                            <div class="login-header">
                                <span class="login-title">{{ $t('register title') }}</span>
                                <NuxtLink class="tw-text-blue-500" to="/login">
                                    <span class="tw-font-bold tw-text-gray-800">{{ $t('have an account') }}</span>
                                    {{ $t('now login') }}
                                </NuxtLink>
                            </div>
                            <div class="body-header-input">
                                <span class="body-header-input-title">{{ $t('email') }}</span>
                                <q-input filled dense v-model="formData.email" :placeholder="$t('pls insert email')" />
                            </div>
                            <div class="body-header-input">
                                <span class="body-header-input-title">{{ $t('name') }}</span>
                                <q-input filled dense v-model="formData.name" :placeholder="$t('pls insert your name')" />
                            </div>
                            <div class="body-header-input">
                                <span class="body-header-input-title">{{ $t('phone number') }}</span>
                            </div>
                            <!-- phone -->
                            <div class="body-header-input">
                                <PhoneComponent ref="tel" @update:tel="updateTel" :showPhoneInput="true"
                                    :showOTPInput="false" />
                            </div>
                            <div class="body-header-input">
                                <PasswordComponent :classInput="`form-body`" @update:password="updatePassword"
                                    @update:passwordMatch="updatePasswordMatch" :showConfirmPassword="true"
                                    :performValidation="true" :hint="true" @update:cfmPassword="updateCfmPassword"
                                    @update:passwordValid="updatePasswordValid" />
                            </div>
                            <div class="login-action">
                                <q-btn class="login-btn" flat size="md" type="submit">
                                    {{ $t('sign up title') }}
                                </q-btn>
                            </div>
                        </q-card>
                    </form>
                </div>
            </div>
        </div>
        <ResponseDialog v-model="dialog" :title="$t(dialogProp.title)" :description="$t(dialogProp.description)"
            :type="dialogProp.type" />
    </div>
</template>
  
<style lang="scss" src="./register.scss"></style>
  
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref, reactive } from 'vue';

const isPasswordMatch = ref<boolean>(false);
const isPasswordValid = ref<boolean>(false);
const { signUp } = useAuth(); 
const $q = useQuasar();

const dialog = ref(false);

const dialogProp = ref({
    title: '',
    description: '',
    type: 'error',
});

definePageMeta({
    layout: 'auth',
});

const formData = reactive({
    name: '',
    email: '',
    tel: '',
    password: '',
    cfmPassword: '',
});

const updateTel = (tel: string) => {
    formData.tel = tel.replace(/[^0-9]/g, '');
};

const updatePassword = (password: string) => {
    formData.password = password;
};

const updateCfmPassword = (cfmPassword: string) => {
    formData.cfmPassword = cfmPassword;
};

const updatePasswordMatch = (passwordMatch: boolean) => {
    isPasswordMatch.value = passwordMatch;
};

const updatePasswordValid = (passwordValid: boolean) => {
    isPasswordValid.value = passwordValid;
};

const validateInput = (title: string, description: string, type: string) => {
    dialog.value = true;
    dialogProp.value.title = title;
    dialogProp.value.description = description;
    dialogProp.value.type = type;
};



async function register() {
    $q.loading.show();
    const formValid = validateForm();
    if (!formValid) {
        $q.loading.hide();
        return;
    }

    try {
        let credentials = {
            name: formData.name,
            email: formData.email,
            tel: formData.tel,
            password: formData.password,
        };

        const user = await signUp(credentials, { callbackUrl: '/' });


        // Registration was successful
        $q.loading.hide();


        validateInput('Success', 'Registration was successful', 'success');

        // You can reset the form or redirect the user to another page as needed



    } catch (error) {
        $q.loading.hide();
        console.error('Error message:', error.data.message);

        // Show an error dialog for registration failure
        validateInput('Error', `Registration failed: ${error.data.message}`, 'error');
    }
}



const validateForm = () => {
    const emptyFields = [];

    if (formData.name === '') {
        emptyFields.push('name');
    }
    if (formData.email === '') {
        emptyFields.push('email');
    }
    if (formData.tel == undefined) {
        emptyFields.push('phone_number');
    }
    if (formData.password === '') {
        emptyFields.push('password');
    }
    if (formData.cfmPassword === '') {
        emptyFields.push('confirm password');
    }

    if (emptyFields.length > 0) {
        const errorMessage = `Input fields are blank: ${emptyFields.join(', ')}`;
        validateInput('Input fields are blank', errorMessage, 'error');
        return false;
    }

    if (!isPasswordMatch.value) {
        validateInput('Password does not match', 'Please make sure the passwords match', 'error');
        return false;
    }

    if (!isPasswordValid.value) {
        validateInput('Invalid password', 'Please enter a valid password', 'error');
        return false;
    }

    return true;
};
</script>
  