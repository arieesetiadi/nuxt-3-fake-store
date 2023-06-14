<script lang="ts" setup>
import IProduct from '~/lib/interfaces/IProduct';

const { products } = defineProps<{
    products: IProduct[]
}>();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </div>
</template>

<style scoped></style>
