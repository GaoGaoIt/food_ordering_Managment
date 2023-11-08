<template>
  <div>
    <div class="tw-mt-8 tw-text-xl">
      <div class="tw-flex tw-items-center tw-justify-between">
        <span class="tw-font-bold tw-text-4xl">Favorite</span>
        <div class="tw-flex tw-gap-4">
          <q-btn class="tw-rounded rounded-10 tw-text-sm" color="primary" icon="sort" size="12px" />
          <q-btn class="tw-rounded rounded-10 tw-text-sm" icon="sort_by_alpha" size="12px" />
          <q-btn class="tw-rounded rounded-10 tw-text-sm" color="primary" label="my orders" size="14px"/>
        </div>
      </div>
    </div>
    <div class="tw-mt-4">
      <q-separator size="2px" class="tw-bg-blue-500 tw-w-full" />
    </div>

    <!-- Container with space around the cards -->
    <div v-for="test in 4" class="tw-mt-4">
      <!-- Grid view for Food Cards -->
      <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4">
        <!-- Repeat for 8 cards -->
        <!-- Card 1 (Left) -->
        <div class="tw-bg-white tw-shadow-md tw-rounded-lg tw-flex">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 160px; max-width: 160px"></q-img>
          <div class="tw-ml-4 tw-text-xl">
            <div class="tw-text-lg tw-p-2">
              <p class="tw-font-semibold-sm">Food Name 1</p>
              <p class="tw-text-sm">Restaurant 1</p>
            </div>
          </div>
          <q-icon name="favorite" color="red" size="50px" class="tw-ml-auto tw-pr-5 self-center"/>
        </div>
        
        <!-- Card 1 (Right) -->
        <div class="tw-bg-white tw-shadow-md tw-rounded-lg tw-flex">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 160px; max-width: 160px"></q-img>
          <div class="tw-ml-4 tw-text-xl">
            <div class="tw-text-lg tw-p-2">
              <p class="tw-font-semibold-sm">Food Name 1</p>
              <p class="tw-text-sm">Restaurant 1</p>
            </div>
          </div>
          <q-icon name="favorite" color="red" size="50px" class="tw-ml-auto tw-pr-5 self-center"/>
        </div>
      </div>
    </div>
  </div>
</template>
