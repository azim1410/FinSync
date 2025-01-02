import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import FriendInfo from '../../atoms/FriendInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import SearchFriendBar from '../SearchFriendBar';
const FriendsList = () => {
    const friends = useSelector((state: RootState) => state.user.friends);
    const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
    return (
        <Box className="friends-list" sx={{ justifyContent: 'right', marginBottom: '1rem' }}>
            <Box className="friends-header" sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                <Typography color='#a1a1a1'>FRIENDS</Typography>
                <Button onClick={() => setOpenSearchBar(!openSearchBar)}>
                    <Typography sx={{ color: '#9be0c3', fontSize: '70%' }}>Add new friend</Typography>
                </Button>
            </Box>
            <Box
                height={200}
                sx={{
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'rgba(52, 52, 52, 0.5)',
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
                    <FriendInfo id={friend.id} name={friend.name} />
                ))}
            </Box>

            {openSearchBar && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.93)',
                            borderRadius: '18px',
                            padding: '2rem',
                            boxShadow: '0 4px 12px rgba(82, 255, 203, 0.28)',
                            minWidth: '500px',
                            
                            
                        }}
                    >
                        <Typography variant='h5' sx={{color:'white', marginLeft:'1rem'}}>Search for existing users on FinSync</Typography>
                        <SearchFriendBar />
                        <Button variant="contained"
                            sx={{ color:'#9be0c3', borderRadius:'20px', position:'absolute', top:100, right: 200, backgroundColor: 'rgba(107, 107, 107, 0.4)', backdropFilter: 'blur(8px)',}}
                            onClick={() => setOpenSearchBar(false)}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default FriendsList