import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import GroupInfo from '../../atoms/GroupInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { createGroup } from './GroupService';
import SelectFrndBtn from '../../atoms/SelectFriend';


const GroupsList = () => {
    const groups = useSelector((state: RootState) => state.user.groups);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [grpName, srtGrpName] = useState<string>("");
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState) => state.user.id);
    const [msg, setMsg] = useState<string>("")
    const friends = useSelector((state: RootState) => state.user.friends);
    const [SelectFrnd, setSelectedFrnd] = useState<string>("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        srtGrpName(event.target.value);
    };

    const handleCreateGroup = async () => {
        const response = await createGroup(userId, token, grpName);
        if(response.status === "200"){
            setMsg("Group created Successfully");
        }
        else {
            setMsg("Error occured while creating group");
        }
    }
    return (
        <Box className="groups-list" sx={{ justifyContent: 'right', marginTop: '1rem', marginBottom: '1rem' }}>
            <Box className="groups-header" sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <Typography color='#a1a1a1'>GROUPS</Typography>
                <Button onClick={() => setOpenModal(!openModal)}>
                    <Typography sx={{ color: '#9be0c3', fontSize: '70%' }}>Create new group</Typography>
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
                {groups.map((group) => (
                    <GroupInfo id={group.id} name={group.name} />
                ))}
            </Box>

            {openModal && (
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
                        <Typography variant='h5' sx={{color:'white',}}>Create a group</Typography>
                        <TextField
                            label="Enter group name"
                            value={grpName}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            sx={{backgroundColor:'white', color:'white', borderRadius:'10px'}}
                        />
                        {msg && (
                            <Typography sx={{color:'white'}}>{msg}</Typography>
                        )}
                        {grpName !== "" && (
                            <Box sx={{
                                margin: 'auto',
                                marginTop: '1rem',
                               
                            }}>
                                <Typography sx={{color:'white'}}>Select friends</Typography>
                                {
                                    friends.map((frnd) => (
                                        <Button key={frnd.id} onClick={() => setSelectedFrnd(frnd.id)} sx={{backgroundColor: SelectFrnd === frnd.id ? "#5a5a5a" : null, borderRadius:'10px'}}>
                                            <SelectFrndBtn title={frnd.name}/>
                                        </Button>
                                    ))
                                }

                                <Box sx={{ marginTop: '1rem' }}>
                                    <Button onClick={() => handleCreateGroup()}
                                        sx={{ color: '#9be0c3', borderRadius: '10px', backgroundColor: 'rgba(0, 0, 0, 0.77)', backdropFilter: 'blur(8px)' }}
    
                                    >
                                       create group
                                    </Button>
                                </Box>
    
                            </Box>
                        ) }
                        {/* <SearchFriendBar /> */}
                        <Button variant="contained"
                            sx={{ color: '#9be0c3', borderRadius: '20px', position: 'absolute', top: 100, right: 200, backgroundColor: 'rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(8px)', }}
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            )}

        </Box>
    )
}

export default GroupsList