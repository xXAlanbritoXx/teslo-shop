import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';

export default function WomenPage() {
    
    const { products, isLoading } = useProducts('/products?gender=women')

    return (
        <ShopLayout title={'Teslo Shop - Women'} pageDescription={'Find the best teslo products for women!'}>
            <Typography variant='h1' component='h1'>Women</Typography>

            {
                isLoading 
                ? <h1>Loading...</h1>
                : <ProductList products={products} />
            }
        </ShopLayout>
          
    )
  }

