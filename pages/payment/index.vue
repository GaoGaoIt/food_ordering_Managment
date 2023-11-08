<template>
    <div>
      <div class="tw-mt-8">
        <!-- Big Gray Column -->
        <q-card class="tw-rounded-lg tw-shadow-md">
          <q-card-section>
            <div class="tw-bg-gray-200 tw-p-4 tw-rounded-lg">
              <div class="tw-grid tw-grid-cols-6 tw-gap-4">
                <!-- Left side (Food Order Details) -->
                <div class="tw-col-span-4">
                  <!-- Food Card content goes here -->
                  <!-- Example content for Food Card -->
                  <div class="tw-bg-yellow-50 tw-flex tw-gap-x-4 tw-items-center tw-gap-y-4">
                    <div>
                      <q-img src="food_image_url" fit="cover" style="width: 100px; height: 100px;" />
                    </div>
                    <div class="tw-flex tw-justify-between tw-items-center tw-w-full">
                      <div>
                        <div class="tw-mb-1">
                          <span class="tw-font-bold tw-text-lg">Food 1</span>
                        </div>
                        <div class="tw-mb-1">
                          <span class="tw-font-bold tw-text-gray-400 tw-text-sm">special instructions</span>
                        </div>
                        <div>
                          <div class="tw-mb-1">
                            <span class="tw-text-green-600">RM 10</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span class="tw-text-black-400 tw-text-lg tw-p-4">Qty: 1</span> <!-- Added quantity -->
                      </div>
                    </div>
  
                    <!-- Add more food card details here -->
                  </div>
                </div>
                <!-- Vertical Line (to separate Food and Payment) -->
                <div class="tw-border-l-2 tw-border-gray-500 tw-h-full tw-col-span-1 tw-mt-1"></div>
                <!-- Right side (Payment) -->
                <div class="tw-col-span-1">
                  <!-- Payment Card content goes here -->
                  <!-- Example content for Payment Card -->
                  <div class="tw-font-bold tw-text-lg tw-mt-1">Payment</div>
                  <div class="tw-mt-8">
                    <div class="tw-flex tw-justify-between tw-items-center">
                      <span>Total price</span>
                      <span class="tw-font-bold tw-text-2xl">RM 83</span>
                    </div>
                    <!-- Add more payment card details here -->
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  