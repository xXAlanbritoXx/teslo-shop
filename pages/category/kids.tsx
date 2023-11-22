import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';

export default function KidPage() {
    
    const { products, isLoading } = useProducts('/products?gender=kid')

    return (
        <ShopLayout title={'Teslo Shop - Kids'} pageDescription={'Find the best teslo products for kids!'}>
            <Typography variant='h1' component='h1'>Kids</Typography>

            {
                isLoading 
                ? <h1>Loading...</h1>
                : <ProductList products={products} />
            }
        </ShopLayout>
          
    )
  }

