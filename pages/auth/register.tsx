import { AuthLayout } from '@/components/layouts'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import NextLink from 'next/link';

const RegisterPage = () => {
  return (
    <AuthLayout title={'Sign up'}>
        <Box sx={{ width: 350, padding:'10px 20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h1' component='h1' display='flex' justifyContent='center'>Create account</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Name' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Email' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Confirm email' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Password' type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField label='Confirm password' type='password' variant='filled' fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button color='secondary' className='ciruclar-btn' size='large' fullWidth>
                        Continue
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='end'>
                    <NextLink href='/auth/login' passHref>
                        <Link underline='always'>
                            {"Already have an account? Log in"}
                        </Link>
                    </NextLink>
                </Grid>
            </Grid>
        </Box>
    </AuthLayout>
  )
}

export default RegisterPage