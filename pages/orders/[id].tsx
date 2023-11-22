import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const OrderPage = () => {
  return (
    <ShopLayout title="Order summary" pageDescription={"Order summary"}>
      <Typography variant="h1" component="h1">
        Order: ABC1234
      </Typography>

      <Chip
        label="Payment pending"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
        sx={{ mb: 2 }}
      />

      <Chip
        label="Payment successful"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined/>}
        sx={{ mb: 2 }}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2" component="h2">
                Summary (3 items)
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Shipping address</Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>

              <Typography>John Smith</Typography>
              <Typography>Random Place 123</Typography>
              <Typography>Village, 12345</Typography>
              <Typography>Mexico</Typography>
              <Typography>+52 6666666</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">Edit</Link>
                </NextLink>
              </Box>

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <h1>Pay</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
