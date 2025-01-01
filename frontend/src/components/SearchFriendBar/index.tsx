import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addFriend, AllUsers, fetchAllUsers } from '../../features/friends/friendsService';
import { Box, Button, Typography } from '@mui/material';


const SearchBar = () => {
    const [userData, setUserData] = useState<AllUsers[]>([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState) => state.user.id);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [msg, setMsg] = useState<string>("");
    const handleAddFriend = async () => {
        try {
            const response = await addFriend(userId, selectedUserId, token);
            setMsg("User Added Successfully");
            console.log(response);
            
        } catch (error) {
            console.error("Error while adding friend:", error);
            setMsg("An error occurred while adding the friend. Please try again later.");
        }
    };
    

    useEffect(() => {
        const getData = async () => {
            const response = await fetchAllUsers(token);
            setUserData(response);
        };
        getData();
    }, [token]);

    return (
        <Box
        sx={{
            textAlign:'center',
            margin:'auto'
        }}
        >
            <Autocomplete
                disablePortal
                options={userData}
                getOptionLabel={(option) => option.name || option.email || 'Unnamed User'}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                sx={{ width: 300, }}
                renderInput={(params) => <TextField {...params} label="Friends" />}
                onChange={(event, value) => {
                    setSelectedUserId(value ? value.id : null);
                }}
                fullWidth
            />

            {selectedUserId && (
                <Box sx={{
                    margin:'auto',
                    marginTop:'1rem',
                    padding:'1rem',
                }}>
                    <Typography>Do you want to add the selected user to your friend list ?</Typography>
                    <Box sx={{marginTop:'1rem'}}>
                    <Button onClick={() => handleAddFriend()}
                            sx={{ color:'#ff652f', borderRadius:'10px', backgroundColor:'rgba(190, 190, 190, 0.4)', backdropFilter: 'blur(8px)'}}
                            
                        >
                            Add friend
                        </Button>
                    </Box>
                    <Typography>{msg}</Typography>
                </Box>
            )}
        </Box>
    );
};

export default React.memo(SearchBar);
