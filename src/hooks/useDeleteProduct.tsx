import { BACKEND_URL } from '@constants/index';
import axios from 'axios';

const useDeleteProduct = async (id: string): Promise<number> => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/products/${id}`);
        return response.status;
    } catch (error) {
        console.error(error);
    }
};

export default useDeleteProduct;
