<script lang="ts" setup>
import IProduct from '~/lib/interfaces/IProduct';

const { product } = defineProps<{
    product: IProduct
}>();
</script>

<template>
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                {{ product.title }}
                <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{{ product.description }}</p>
            <div class="card-actions justify-end">
                <div class="badge badge-outline">{{ product.category }}</div>
                <div class="badge badge-outline">{{ product.rating.rate }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
