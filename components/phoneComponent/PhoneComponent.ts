import { ref, reactive } from 'vue';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';


export default {
	props: ['showPhoneInput', 'showOTPInput'],
	emits: ['update:tel', 'update:otp', 'getOTP', 'sendFirebaseToken:token'],
	setup(_, { emit }) {
		const phone = reactive({
			tel: '',
			otp: '',
		});

		
		const results = ref();
		const updatePhoneTel = ref();


		function handlePhoneNumberChange(result:number) {
				results.value = result;
				updatePhoneTel.value = results.value?.nationalNumber;
		}

		// const authStore = useAuthStore();
		// const emitTel = () => {
		// 	const phoneNumber = results?.value.e164;
		// 	emit('update:tel', phoneNumber);
		// };

		// const emitOTP = () => {
		// 	emit('update:otp', phone.otp);
		// };

		// const emitGetOTP = () => {
		// 	emit('getOTP');
		// };




			
		return {
			phone,
			MazPhoneNumberInput,
			results,
			updatePhoneTel,
			handlePhoneNumberChange
		}
	},
};
