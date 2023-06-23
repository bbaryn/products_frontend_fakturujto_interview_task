import { BACKEND_URL } from '@constants/index';
import { Product } from '@typing/global';
import axios from 'axios';

const useGetProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/products`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default useGetProducts;
