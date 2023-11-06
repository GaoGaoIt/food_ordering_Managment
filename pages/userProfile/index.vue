<template>
  <div>
    <div>
      <div class="tw-flex tw-mt-8 tw-items-baseline tw-gap-4 tw-text-xlc">
        <span class="tw-font-bold tw-text-4xl tw-gray-500">My Profile</span>
      </div>
      <div class="tw-mt-4">
        <q-separator size="2px" class="tw-gray-300 tw-w-full" />
      </div>
    </div>
    <div class="tw-mt-8 tw-justify-between">
      <div class="tw-grid tw-grid-cols-12 tw-gap-4 tw-w-full">
        <div class="tw-col-span-12 md:tw-col-span-6">
          <q-card class="">
            <div class=" tw-bg-blue-500 tw-grid tw-grid-cols-12 tw-p-4 tw-gap-x-4">
              <!-- avatar -->
              <div class="tw-col-span-6">
                <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">

                  <q-avatar size="92px">
                    <q-img src="https://picsum.photos/id/1/200/300" />
                  </q-avatar>

                  <div>
                    <span class="tw-text-white tw-text-center tw-truncate tw-text-lg">chan cheee sam</span>
                  </div>
                </div>
              </div>
              <div class="tw-col-span-6 tw-flex tw-justify-center">
                <div class="tw-flex tw-items-center">
                  <div class="tw-flex tw-flex-col tw-gap-y-4">
                    <span class="tw-font-semibold tw-text-white tw-text-lg">Wallet Amount</span>
                    <span class="tw-text-center tw-text-white tw-text-lg">Rm 320</span>
                  </div>
                </div>
              </div>
              <div class="tw-col-span-12 tw-mt-4">
                <q-btn to="/editProfile" unelevated class="profilePicBtn">Edit Profile</q-btn>
              </div>
            </div>
          </q-card>
        </div>
        <div class="tw-col-span-12 md:tw-col-span-6 tw-w-full">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section> My Wallet</q-item-section>
              <q-item-section side><q-icon name="chevron_right"></q-icon></q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/favorite">
              <q-item-section>My Favorite Food</q-item-section>
              <q-item-section side><q-icon name="chevron_right"></q-icon></q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Payment History</q-item-section>
              <q-item-section side><q-icon name="chevron_right"></q-icon></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Order History</q-item-section>
              <q-item-section side><q-icon name="chevron_right"></q-icon></q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Notification</q-item-section>
              <q-item-section side><q-icon name="chevron_right"></q-icon></q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="logout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

    </div>

  </div>
</template>
  
<style scoped src="./profile.scss"></style>
  
<script setup>
const { signOut } = useAuth();

async function logout() {
  await signOut({ callbackUrl: '/' });
}


</script>
  