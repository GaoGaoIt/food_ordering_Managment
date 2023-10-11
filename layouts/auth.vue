<template>
    <q-layout>
        <q-page-container>
            <div class="default-container">
                <slot />
            </div>
        </q-page-container>
    </q-layout>
</template>
<style>
.default-container{
    @apply tw-h-full;
}
</style>