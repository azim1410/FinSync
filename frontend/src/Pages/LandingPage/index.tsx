import { Box, Link, Typography } from '@mui/material';
import NeatGradientComponent from '../../NEAT/NeatApp';
import { FaUserFriends } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoQrCodeOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
function Landing() {
    return (
        <div>
            <Box sx={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '100%', display: 'flex', marginTop: '1rem' }}>
                <Box>
                    <Link href="/login" underline="hover" color='black' >
                        <Typography sx={{ marginLeft: '2rem', marginRight: '2rem', }}>Login</Typography>
                    </Link>
                </Box>
                <Box>
                    <Link href="/signup" underline="hover" color='black' >
                        <Typography sx={{ marginLeft: '2rem', marginRight: '2rem' }}>Signup</Typography>
                    </Link>
                </Box>
            </Box>
            <NeatGradientComponent />
            <Box sx={{ position: 'absolute', top: '10%', width: '100%', }}>
                <Typography variant='h6' sx={{
                    textAlign: 'right',
                    color: 'rgba(47, 47, 47, 0.78)', fontSize: '8rem', fontWeight: '1rem', marginRight: '1rem'
                }}>
                    FinSync💸
                </Typography>
                <Typography variant='h3' sx={{ color: 'rgba(47, 47, 47, 0.72)', textAlign: 'right', fontSize: '3rem', fontWeight: '1.5rem', marginRight: '2rem' }}>
                    A splitwise Alternative
                </Typography>
            </Box>
            <Box sx={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: '100%', display: 'flex', marginTop: '1rem', top: '70%' }}>
                <Box sx={{ marginRight: '3rem', textAlign: 'center' }}>
                    <FaUserFriends size="5rem" color="#4b4b4b" />
                    <Typography>Split bills </Typography>
                </Box>
                <Box sx={{ marginRight: '3rem', textAlign: 'center' }}>
                    <FaMoneyBillTransfer size="5rem" color="#4b4b4b" />
                    <Typography>Add Unlimited expenses</Typography>
                </Box>
                <Box sx={{ marginRight: '3rem', textAlign: 'center' }}>
                    <IoQrCodeOutline size="5rem" color="#4b4b4b" />
                    <Typography>Seamless Payments</Typography>
                </Box>
                <Box sx={{ marginRight: '3rem', textAlign: 'center' }}>
                    <FaRegFileAlt size="5rem" color="#4b4b4b" />
                    <Typography>Monthly Report</Typography>
                </Box>
            </Box>
        </div>
    );
}

export default Landing;
