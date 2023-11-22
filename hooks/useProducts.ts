import { IProduct } from '@/interfaces';
import useSWR from 'swr';

const fetcher = (...args: [key:string]) => fetch(...args).then((res) => res.json())

export const useProducts = (url: string) => {
    const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher);

    return {
        products: data || [],
        isLoading: !error && !data,
        isError: error    
    }

}