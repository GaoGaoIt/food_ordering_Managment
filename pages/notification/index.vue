
<template>
    <div>
        <div class="tw-w-full tw-h-full tw-p-4 tw-bg-[#FDEDEE]">
            <!-- top bavigation header -->
            <div class="tw-flex tw-justify-between tw-items-center">
                <div class="tw-flex tw-gap-x-4">
                    <q-btn icon="arrow_back_ios_new" unelevated dense size="sm" to="/" />
                    <span>{{ $t('notification') }}</span>
                </div>
                <div>
                    <q-btn class="" icon="tune" unelevated dense size="sm" />
                </div>
            </div>
            <div class="tw-pt-4">
                <q-list class="tw-flex tw-flex-col tw-gap-y-2">

                    <q-slide-item class="tw-rounded-full" v-for="notification in notifications" :key="notification.id">
                        <template v-slot:left>
                            <q-icon name="done" />
                        </template>
                        <template v-slot:right>
                            <q-icon name="alarm" />
                        </template>

                        <q-item>
                            <q-item-section avatar>
                                <q-avatar>
                                    <q-img :src="notification.userImage">

                                    </q-img>
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label lines="1" class="">
                                    <div class="tw-font-bold">
                                        {{ notification.type }}
                                    </div>
                                    <q-separator vertical size="1px" color="black" />
                                    <div>
                                        {{ notification.description }}
                                    </div>
                                </q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                <q-item-label lines="1" class="">
                                    <div class="tw-font-bold">
                                        {{ notification.status }}
                                    </div>
                                    <q-separator vertical size="1px" color="black" />
                                    <div>
                                        <span>{{ $dayjs(new Date(notification.timestamp)).locale('en').fromNow() }}</span>
                                    </div>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-slide-item>
                </q-list>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./notification.scss"></style>
<script setup lang="ts">

const notifications = ref([
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "PENDING",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:51:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "PENDING",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "PENDING",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Order",
        status: "Done",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "PENDING",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "Done",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "PENDING",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
    {
        id: 1,
        userImage: "https://picsum.photos/200?random=2",
        description: "test",
        type:"Payment",
        status: "Done",
        orderStatus: "DONE",
        transactionStatus: "PENDING",
        timestamp: "2023-10-12 11:40:00 "
    },
])

</script>