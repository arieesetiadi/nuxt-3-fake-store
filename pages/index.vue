<script lang="ts" setup>
    import useShopStore from '~/stores/shop.store.js';
    const shopStore = useShopStore();
    shopStore.fetchProducts();
</script>

<template>
    <main class="py-10 lg:px-36">
        <ProductList :products="shopStore.products" />
    </main>
</template>
