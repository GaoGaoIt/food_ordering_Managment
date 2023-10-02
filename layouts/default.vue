<template>
    <q-layout>
        <q-page-container>
            <q-header>
                <HeaderComponent />
            </q-header>
            <q-drawer v-model="drawer" show-if-above :mini="miniState" @mouseover="miniState = false"
                @mouseout="miniState = true" :width="200" :breakpoint="500" bordered
                :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
            </q-drawer>
            <div class="default-container">
                <slot />
            </div>
        </q-page-container>
    </q-layout>
</template>

<style lang="scss" scoped>
    .default-container{
        @apply tw-mx-auto
    }
</style>
<script setup>
    const drawer = ref(false);
    const miniState = ref(true);
</script>