import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';

export default function HomePage() {
    
    const { products, isLoading } = useProducts('/products')

    return (
        <ShopLayout title={'Teslo Shop - Home'} pageDescription={'Find the best teslo products here!'}>
            <Typography variant='h1' component='h1'>Store</Typography>
            <Typography variant='h2' sx={{ mb: 1 }}>All the products</Typography>

            {
                isLoading 
                ? <h1>Loading...</h1>
                : <ProductList products={products} />
            }
        </ShopLayout>
          
    )
  }

