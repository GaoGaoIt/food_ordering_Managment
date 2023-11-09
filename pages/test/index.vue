<template >
    <div>
        <div v-for="test in menuList">
            {{ test.day }}
            {{ test.products.products_category_id }}
        </div>
    </div>
</template>

<script setup>
const menuList = ref([]);

const config = useRuntimeConfig();
const getProductList = async () => {
    try {
        const menuResponse = await $fetch(`${config.public.apiBase}/Products/menulist`);
        
        menuList.value = menuResponse.data
        console.log(menuList);

    } catch (error) {
        // You can provide more informative error handling here, such as logging the error message.
        console.error("Error fetching menu list:", error);
        throw error; // Rethrow the error if necessary
    }
}



onMounted(() => {
    getProductList();
});


</script>