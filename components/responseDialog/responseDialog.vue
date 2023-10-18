<template>
    <q-dialog v-model="dialog">
        <q-card class="tw-p-6 tw-rounded-full">
            <div v-if="type === 'error'">
                <client-only >
                    <Vue3Lottie :animation-data="errorJson" :height="200" :width="200" />
                </client-only>
                <div class="">
                    <div class="tw-flex tw-justify-center">
                        <span class="tw-text-red-600 tw-font-bold tw-text-lg">{{ title }}</span>
                    </div>
                    <div>
                        <span class="tw-text-md">{{ description }}</span>
                    </div>
                </div>
            </div>
            <div v-else-if="type === 'success'">
                <client-only>
                    <Vue3Lottie :animation-data="successJson" :height="200" :width="200" />
                </client-only>

            </div>
        </q-card>
    </q-dialog>
</template>
  
<script>
import { ref } from 'vue';
import successJson from '~/lottie/success.json';
import errorJson from '~/lottie/error.json';

export default {
    props: ['title', 'description', 'type'],
    setup() {
        const dialog = ref(false);

        return {
            dialog,
            errorJson,
            successJson
        }
    }
}
</script>
