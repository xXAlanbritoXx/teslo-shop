import { ShopLayout } from "@/components/layouts"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Link, Typography } from "@mui/material"
import NextLink from 'next/link';

const EmptyPage = () => {
  return (
    <ShopLayout title={"Cart"} pageDescription={"Empty cart"}>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        >
            <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
            <Box display='flex' flexDirection='column' alignItems='center'>
                <Typography>Your cart is empty.</Typography>
                <NextLink href='/' passHref>
                    <Link typography='h4' color='secondary'>Continue shopping</Link>
                </NextLink>
            </Box>
        </Box>
    </ShopLayout>
  )
}

export default EmptyPage