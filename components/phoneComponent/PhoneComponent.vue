<template>
    <!-- <div id="recaptcha-container"></div> -->
	<div class="phone-wrapper" v-if="showPhoneInput">
		<MazPhoneNumberInput v-model="phone.tel" :preferred-countries="['MY', 'SG', 'CH']" :defaultCountryCode="'MY'"
			@update:modelValue="emitTel"
			@update="handlePhoneNumberChange" 
			:success="results?.isValid"
			:placeholder="`${$t('example')} : 123456789`"
			size="sm"
			:noFlags="true"
			:value="results?.isValid ? updatePhoneTel : phone.tel"
			:translations="{
				countrySelector: {
					placeholder: `${$t('select country code')}`,
					searchPlaceholder: `${$t('search placeholder')}`,
				},
				phoneInput: {
					example: `${$t('example')}: `
				}
			}" />
	</div>
	<!-- <div v-if="showOTPInput" class="phone-otp">
		<q-input filled dense v-model="phone.otp" label="Enter OTP" @update:modelValue="emitOTP">
		</q-input> 
	</div> -->
</template>

<style src="./PhoneComponent.scss"></style>
<script src="./PhoneComponent.ts"></script>