import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { friends } from '../../Data/data';
import Link from '@mui/material/Link';
import FriendInfo from '../../atoms/FriendInfo';
const FriendsList = () => {
    return (
        <Box className="friends-list" sx={{ justifyContent: 'right',  marginBottom: '1rem' }}>
            <Box className="friends-header" sx={{ display: 'flex' , justifyContent: 'space-between', marginBottom: '1rem'}}>
                <Typography color='#a1a1a1'>FRIENDS</Typography>
                <Link href="#" underline="hover" color='#9be0c3'>
                    {'Add new friend'}
                </Link>
            </Box>
            <Box 
                height={200} 
                sx={{ 
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#9be0c3',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#7bc8a0',
                    }
                }}
            >
                {friends.map((friend) => (
                   <FriendInfo id={friend.id} name={friend.name}/>
                ))}
            </Box>
        </Box>
    )
}

export default FriendsList