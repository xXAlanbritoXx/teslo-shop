import { initialData } from "@/database/products";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { ItemCounter } from "../ui";
import { FC, useContext } from "react";
import { CartContext } from "@/context/cart";

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable }) => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.map((product) => (
        <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            {/* TODO LLEVAR A LA PAGINA DEL PRODUCTO */}
            <NextLink href={`/product/${ product.slug }`} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={`/products/${product.image}`}
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Size: <strong>M</strong>{" "}
              </Typography>
              {/* Conditional */}
              {editable ? (
                <ItemCounter
                  currentValue={ product.quantity }
                  maxValue={ 10 }
                  updatedQuantity={ () => {} }
                />
              ) : (
                <Typography variant="h5">{product.quantity} { product.quantity > 1 ? 'items' : 'items' }</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1"> {`$${product.price}`} </Typography>
            {/* Editable */}
            {editable && (
              <Button color="secondary" variant="text">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
