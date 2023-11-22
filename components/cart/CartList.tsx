import { initialData } from "@/database/products";
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import NextLink from 'next/link';
import { ItemCounter } from "../ui";
import { FC } from 'react';


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

interface Props {
    editable?: boolean;
}

export const CartList: FC<Props> = ({ editable }) => {
  return (
    <>
        {
            productsInCart.map(product => (
                <Grid container spacing={2} key={ product.slug } sx={{ mb:1}}>
                    <Grid item xs={3}>
                        {/* TODO LLEVAR A LA PAGINA DEL PRODUCTO */}
                        <NextLink href='/product/slug' passHref>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        image={ `/products/${ product.images[0] }` }
                                        sx={{ borderRadius: '5px' }}
                                        />
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>
                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='body1'>{product.title}</Typography>
                            <Typography variant='body1'>Size: <strong>M</strong> </Typography>
                            {/* Conditional */}
                            {
                                editable 
                                ? <ItemCounter/>
                                : <Typography variant='h5'>3 items</Typography>
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                        <Typography variant='subtitle1' > {`$${product.price}`} </Typography>
                        {/* Editable */}
                        {
                            editable && (
                            <Button color='secondary' variant='text'>Remove</Button>
                            )
                        }
                    </Grid>
                </Grid>
            ))
        }
    </>
  )
}