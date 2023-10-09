<template>
    <q-layout>
        <q-page-container>

            <HeaderComponent />

            <!-- <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
                    @mouseout="miniState = true" :width="200" :breakpoint="500" bordered
                    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
                </q-drawer> -->

            <div class="default-container">
                <slot />
            </div>
        </q-page-container>
    </q-layout>
</template>

<style scoped>
.default-container{
    @apply  tw-pt-28 tw-mx-4
}
</style>

<script setup>
</script>