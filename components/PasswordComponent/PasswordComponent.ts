import { ref } from 'vue';

export default {
	props: ['classInput', 'showConfirmPassword', 'performValidation','hint','hintStyle'],
	emits: ['update:password', 'update:cfmPassword', 'update:passwordMatch', 'update:passwordValid'],
	setup(_, { emit }) {
		const visiblePwd = ref(true);
		const visibleCfmPwd = ref(true);
		const password = ref('');
		const confirmPassword = ref('');

		const passwordCriteria = [
			{ label: 'characters', isValid: false },
			{ label: 'symbol', isValid: false },
			{ label: 'capital', isValid: false },
			{ label: 'number', isValid: false },
		];

		const emitPassword = () => {
			emit('update:password', password.value);
		};

		const emitCfmPassword = () => {
			emit('update:cfmPassword', confirmPassword.value);
		};

		const emitPasswordUpdate = () => {
			emit('update:passwordMatch', password.value === confirmPassword.value);
		};

		const isLengthValid = computed(() => password.value.length >= 8);
		const isPunctuationValid = computed(() =>
			/[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password.value)
		);
		const isCapitalValid = computed(() => /[A-Z]/.test(password.value));
		const isNumberValid = computed(() => /[0-9]/.test(password.value));
		const isPasswordEmpty = computed(() => password.value.trim() === '');

		watch([password, confirmPassword], () => {
			passwordCriteria.forEach((criteria) => {
				if (criteria.label === 'included') {
					criteria.isValid = true;
				} else if (criteria.label === 'characters') {
					criteria.isValid = isLengthValid.value;
				} else if (criteria.label === 'symbol') {
					criteria.isValid = isPunctuationValid.value;
				} else if (criteria.label === 'capital') {
					criteria.isValid = isCapitalValid.value;
				} else if (criteria.label === 'number') {
					criteria.isValid = isNumberValid.value;
				}
			});
			emitPassword(password.value);
			emitCfmPassword(confirmPassword.value);

			emitPasswordUpdate();
		});

		const isPasswordValid = computed(() => {
			emit('update:passwordValid', passwordCriteria.every((criteria) => criteria.isValid));
		});

		const performValidation = ref(false);

		watch(password, (newValue) => {
			performValidation.value = newValue.trim() !== '';
			emit('update:passwordValid', passwordCriteria.every((criteria) => criteria.isValid));
		});

		return {
			visiblePwd,
			visibleCfmPwd,
			password,
			confirmPassword,
			emitPassword,
			emitCfmPassword,
			passwordCriteria,
			isLengthValid,
			isPunctuationValid,
			isCapitalValid,
			isNumberValid,
			isPasswordEmpty,
			isPasswordValid,
			emitPasswordUpdate,
		};
	},
};
