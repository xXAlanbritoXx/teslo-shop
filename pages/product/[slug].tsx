import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow } from '@/components/products';
import { ItemCounter, SizeSelector } from '@/components/ui';
import { dbProducts } from '@/database';
import { IProduct } from '@/interfaces';
// import { initialData } from '@/database/products'
// import { useProducts } from '@/hooks';
import { Box, Button, Grid, Typography } from '@mui/material';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
// import { useRouter } from 'next/router';

interface Props {
  product: IProduct
}

const ProductPage:NextPage<Props> = ({ product }) => {
  

  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={7}>
          <ProductSlideshow 
            images={product.images}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Titles */}
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
            {/* Stock */}
            <Box sx={{ mt: 2 }}>
              <Typography variant='subtitle1' component='h2'>Stock</Typography>
              <ItemCounter />
              <SizeSelector 
                // selectedSize={product.sizes[0]} 
                sizes={product.sizes}/>
            </Box>
              {/* Add to cart */}
              <Button color='secondary' className='circular-btn'> Add to cart</Button>
              {/* <Chip label='Out of stock' color='error' variant='outlined' /> */}
              <Box sx={{ mt:3 }} >
                <Typography variant='subtitle2' >Description</Typography>
                <Typography variant='body2' >{product.description}</Typography>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const productSlugs = await dbProducts.getAllProductSlugs()

  return {
    paths: productSlugs.map(({slug}) => ({
      params:{
        slug
      }  
    })),
    fallback: "blocking"
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug = '' } = params as { slug: string }
  const product = await dbProducts.getProductBySlug(slug)

  if (!product) {
    return {
      redirect:{
        destination: '/',
        permanent: false
      
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 
  }
}


export default ProductPage