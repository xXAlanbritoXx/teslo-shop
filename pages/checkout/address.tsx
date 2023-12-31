import { ShopLayout } from "@/components/layouts"
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddressPage = () => {
  return (
    <ShopLayout title='Address' pageDescription='Confirm your address'>
        <Typography variant="h1" component='h1'>Address</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField label='Name' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Last name' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Address' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Address 2 (optional)' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='ZipCode' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='City' variant='filled' fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <Select
                        label='country'
                        variant='filled'
                        value={1}
                    >
                        <MenuItem value={1}>Mexico</MenuItem>
                        <MenuItem value={2}>Costa Rica</MenuItem>
                        <MenuItem value={3}>El Salvador</MenuItem>
                        <MenuItem value={4}>Honduras</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label='Phone number' variant='filled' fullWidth />
            </Grid>

        </Grid>
            <Box sx={{ mt:2 }} display="flex" justifyContent="center">
                <Button color="secondary" className="circular-btn" size="large">
                    Continue
                </Button>
            </Box>
    </ShopLayout>
  )
}

export default AddressPage