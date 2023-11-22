import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';

export default function MenPage() {
    
    const { products, isLoading } = useProducts('/products?gender=men')

    return (
        <ShopLayout title={'Teslo Shop - Men'} pageDescription={'Find the best teslo products for men!'}>
            <Typography variant='h1' component='h1'>Men</Typography>

            {
                isLoading 
                ? <h1>Loading...</h1>
                : <ProductList products={products} />
            }
        </ShopLayout>
          
    )
  }

