import { Box, Link, Typography } from '@mui/material';
import NeatGradientComponent from '../../NEAT/NeatApp';
import ButtonOne from '../../atoms/ButtonOne';
import ButtonTwo from '../../atoms/ButtonTwo';

function Landing() {
    return (
        <div>
            <NeatGradientComponent />
            <Typography sx={{textAlign: 'center', position: 'absolute', top: '30%', width: '100%',
    color: 'rgba(255, 255, 255, 0.8)', fontSize: '5rem', fontWeight: '2rem'}}>
                Welcome to FinSync!
            </Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.79)', textAlign: 'center', position: 'absolute', top: '50%', width: '100%', fontSize: '2rem', fontWeight: '1rem' }}>
                A splitwise Alternative
            </Typography>
            <Box sx={{position: 'absolute', top:'60%', left:'42%'}}>
            <Link href="/login" underline="hover" color='black' sx={{marginLeft:'2rem', marginRight: '2rem',}}>
                    {'Login'}
                </Link>
                <Link href="/signup" underline="hover" color='black' sx={{marginLeft:'2rem', marginRight: '2rem'}}>
                    {'Signup'}
                </Link>
            </Box>
        </div>
    );
}

export default Landing;
