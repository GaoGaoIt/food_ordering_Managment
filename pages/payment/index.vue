<template>
        <div>
          <div class="tw-flex tw-mt-8 tw-items-baseline tw-gap-4 tw-text-xlc">
            <span class="tw-font-bold tw-text-4xl tw-gray-500">Payment</span>
          </div>
          <div class="tw-mt-4">
            <q-separator size="2px" class="tw-gray-300 tw-w-full" />
          </div>
        </div>
    <div class="tw-mt-8">
      <!-- Big Gray Column -->
      <div class="tw-rounded-lg tw-shadow-md">
        <div class="tw-bg-gray-200 tw-p-4 tw-rounded-lg">
          <div class="tw-grid tw-grid-cols-12 tw-gap-4">
            <div class="tw-col-span-12 md:tw-col-span-6 tw-p-4">
              <!-- Food Card content goes here -->
              <div v-for="test in 8" class="tw-bg-yellow-50 tw-items-center tw-p-4 tw-mb-4 tw-rounded"> <!-- 添加 tw-rounded 类给颜色区域 -->
                <!-- Repeat this section for each item -->
                <div class="tw-flex tw-justify-between tw-items-center">
                  <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-1 lg:tw-grid-cols-1">
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
                    <span class="tw-grid tw-grid-cols-1 md:tw-grid-cols-1 lg:tw-grid-cols-1 tw-text-black-400 tw-text-lg tw-p-4">Qty: 1</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="tw-col-span-12 md:tw-col-span-6">
              <!-- Use a media query to hide the vertical line when the screen is small -->
              <div class="tw-border-l-2 tw-border-gray-500 tw-h-full tw-p-4"> <!-- 不添加 tw-rounded 类给线条，使线条没有圆角 -->
                <div class="tw-pl-5 tw-bg-yellow-50 tw-p-5 tw-rounded"> <!-- 添加 tw-rounded 类给颜色区域，使颜色区域有圆角 -->
                  <!-- Payment Card content goes here -->
                  <!-- Example content for Payment Card -->
                  <div class="tw-mt-8 tw-text-center tw-font-bold tw-text-lg tw-mt-1">Payment</div>
                  <div class="tw-mt-8 tw-text-center">
                    <!-- Duit Now QR Code (Centered) -->
                    <div class="tw-flex tw-justify-center tw-items-center tw-mt-8">
                      <q-img src="@/assets/images/header/duitnow_qr_code.png" style="width: 300px; height: 400px;" />
                    </div>
                    <div>
                      <span class="tw-font-bold tw-text-lg">Total price</span>
                    </div>
                    <div>
                      <span class="tw-font-bold tw-text-sm">RM 83</span>
                    </div>
                    <!-- Add more payment card details here -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  