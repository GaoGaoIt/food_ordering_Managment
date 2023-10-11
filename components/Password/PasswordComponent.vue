<template>
    <div>
        <div class="tw-pb-5">
            <span class="tw-font-bold">{{ $t('password') }}</span>
            <q-input
                v-model="password"
                filled
                dense
                :placeholder="$t('pls insert password')"
                :type="visiblePwd ? 'password' : 'text'"
                @update:modelValue="emitPassword">
                <template v-slot:append>
                    <q-icon
                        :name="visiblePwd ? 'visibility_off' : 'visibility'"
                        @click="visiblePwd = !visiblePwd" />
                </template>
            </q-input>
            <div v-if="hint" class="tw-text-sc-red tw-text-sc-subtitle2">密码必须为8-20位，字元数字混合。</div>
        </div>
        <div v-if="showConfirmPassword">
            <span >{{ $t('confirm password') }}</span>
            <q-input
                v-model="confirmPassword"
                filled
                dense
                :class="classInput"
                :placeholder="$t('confirm password')"
                :type="visibleCfmPwd ? 'password' : 'text'"
                @update:modelValue="emitCfmPassword">
                <template v-slot:append>
                    <q-icon
                        :name="visibleCfmPwd ? 'visibility_off' : 'visibility'"
                        @click="visibleCfmPwd = !visibleCfmPwd" />
                </template>
            </q-input>
        </div>
    
    </div>
</template>

<style src="./PasswordComponent.scss" lang="scss"></style>
<script src="./PasswordComponent.ts" lang="ts">
    
</script>