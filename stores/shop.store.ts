import axios from 'axios';
import { defineStore } from 'pinia';
import IProduct from '~/lib/interfaces/IProduct';

const useShopStore = defineStore('shop', () => {
    const products = ref<IProduct[]>([]);

    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(response => {
            products.value = response.data;
        });
    }

    return { products, fetchProducts }
});

export default useShopStore;