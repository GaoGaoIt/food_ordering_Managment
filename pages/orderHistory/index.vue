<template>
    <div class="tw-mt-8 tw-text-xl">
      <div class="tw-flex tw-items-center tw-justify-between">
        <span class="tw-font-bold tw-text-5xl" style="font-family: 'Newsreader', serif;">Order History</span>
      </div>
      <div class="tw-mt-4">
        <q-separator size="2px"/>
      </div>
  
      <!-- Order History Section -->
    <div v-for="order in orderHistory" :key="order.orderNumber" class="tw-mt-6 tw-grid tw-grid-cols-12 tw-gap-4">
    <!-- Left Section: Order Details Grid -->
    <div class="tw-col-span-12 tw-grid tw-grid-cols-12 tw-gap-4">
      <!-- Order Number -->
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;"><strong>Order Number:</strong></div>
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;">{{ order.orderNumber }}</div>
      <div class="tw-col-span-4 tw-grid tw-grid-cols-1 tw-gap-4">
        <button class="tw-btn"></button>
      </div>
      
      
  
      <!-- Order Date -->
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;"><strong>Order Date:</strong></div>
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;">{{ order.orderDate }}</div>
      <div class="tw-col-span-4 tw-grid tw-grid-cols-1 tw-gap-4">
        <button class="tw-bg-green-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-h-10 tw-btn" @click="viewOrder(order.orderNumber)">View Order</button>
      </div>

      <!-- Order Price -->
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;"><strong>Order Price:</strong></div>
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;">{{ order.orderPrice }}</div>
      <div class="tw-col-span-4 tw-grid tw-grid-cols-1 tw-gap-4">
        <button class="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-h-10 tw-btn" @click="commentOrder(order.orderNumber)">Comment</button>
      </div>
      
      <!-- Status -->
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;"><strong>Status:</strong></div>
      <div class="tw-col-span-4 tw-text-2xl" style="font-family: 'Newsreader', serif;">{{ order.status }}</div>
      <div class="tw-col-span-4 tw-grid tw-grid-cols-1 tw-gap-4">
        <button class="tw-bg-red-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-h-10 tw-btn" @click="cancelOrder(order.orderNumber)">Cancel Order</button>
      </div>
    </div>
    <div class="tw-mt-4 tw-col-span-12">
      <q-separator size="2px" />
    </div>
  </div>
</div>  
  </template>

<script>
export default {
  data() {
    return {
      orderHistory: [
        {
          orderNumber: '001',
          orderDate: '2023-11-13',
          orderPrice: 'RM 50.00',
          status: 'Pending',
        },
        {
          orderNumber: '002',
          orderDate: '2023-11-14',
          orderPrice: 'RM 83.00',
          status: 'Delivered',
        },
        {
          orderNumber: '003',
          orderDate: '2023-11-15',
          orderPrice: 'RM 65.00',
          status: 'Processing',
        },
        {
          orderNumber: '004',
          orderDate: '2023-11-16',
          orderPrice: 'RM 92.00',
          status: 'Shipped',
        },
        // Add more order objects as needed
      ],
    };
  },
  methods: {
    commentOrder(orderNumber) {
      // Implement your logic for commenting on the order
      console.log(`Comment on order ${orderNumber}`);
    },
    viewOrder(orderNumber) {
      // Implement your logic for viewing the order
      console.log(`View order ${orderNumber}`);
    },
    paymentHistory(orderNumber) {
      // Implement your logic for viewing payment history
      console.log(`View payment history for order ${orderNumber}`);
    },
    cancelOrder(orderNumber) {
      // Implement your logic for canceling the order
      console.log(`Cancel order ${orderNumber}`);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@400;600&display=swap');

/* Ensure that the text size is applied to the entire component */
body {
  font-size: 16px; /* You can adjust this value as needed */
}

/* 媒体查询：在屏幕宽度小于某个值时应用样式 */
@media screen and (max-width: 768px) {
  .tw-rounded {
    border-radius: 10px; /* 根据需要调整按钮的圆角 */
  }

  .tw-text-sm {
    font-size: 12px; /* 根据需要调整按钮字体大小 */
  }

  .tw-text-5xl {
    font-size: 2rem; /* 根据需要调整标题字体大小 */
  }

  /* 调整按钮在缩小时的样式 */
  .tw-btn {
    font-size: 12px; /* 调整按钮字体大小 */
    white-space: nowrap; /* 防止文本换行 */
  }

  /* 窗口缩小时，整页的字体文本不变小 */
  body {
    font-size: 16px;
  }
}

</style>
