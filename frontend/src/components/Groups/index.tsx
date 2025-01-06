import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import GroupInfo from '../../atoms/GroupInfo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState } from 'react';
import { createGroup, getGroupInfo } from './GroupService';
import SelectFrndBtn from '../../atoms/SelectFriend';
import { setSelectedItem } from '../../features/selectedInfo/selectedInfoSlice';

const GroupsList = () => {
    const groups = useSelector((state: RootState) => state.user.groups);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [grpName, setGrpName] = useState<string>('');
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState) => state.user.id);
    const [msg, setMsg] = useState<string>('');
    const friends = useSelector((state: RootState) => state.user.friends);
    const [selectedFrnds, setSelectedFrnds] = useState<string[]>([]);
    const dispatch = useDispatch();
    // Handle group name change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrpName(event.target.value);
    };

    // Toggle friend selection
    const toggleFriendSelection = (frndId: string) => {
        setSelectedFrnds((prev) =>
            prev.includes(frndId) ? prev.filter((id) => id !== frndId) : [...prev, frndId]
        );
    };

    // Handle group creation
    const handleCreateGroup = async () => {
        const response = await createGroup(userId, token, grpName, selectedFrnds);
        if (response.status === '200') {
            setMsg('Group created Successfully');
            setGrpName('');
            setSelectedFrnds([]);
        } else {
            setMsg('Error occurred while creating group');
        }
    };

    const handleGetGroupInfo = async (grpId: string) => {
        const response = await getGroupInfo(grpId, token);
        dispatch(setSelectedItem(response));
    } 

    return (
        <Box className="groups-list" sx={{ justifyContent: 'right', marginTop: '1rem', marginBottom: '1rem' }}>
            {/* Header */}
            <Box className="groups-header" sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <Typography color="#a1a1a1">GROUPS</Typography>
                <Button onClick={() => setOpenModal(!openModal)}>
                    <Typography sx={{ color: '#9be0c3', fontSize: '70%' }}>Create new group</Typography>
                </Button>
            </Box>

            {/* Group List */}
            <Box
                height={200}
                sx={{
                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': { width: '8px' },
                    '&::-webkit-scrollbar-track': { backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: '10px' },
                    '&::-webkit-scrollbar-thumb': { backgroundColor: '#9be0c3', borderRadius: '10px' },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#7bc8a0' }
                }}
            >
                {groups.map((group) => (
                    <Button sx={{width:'100%'}} onClick={() => handleGetGroupInfo(group.id)}>
                        <GroupInfo key={group.id} id={group.id} name={group.name} />
                    </Button>
                    
                ))}
            </Box>

            {/* Modal */}
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
                        zIndex: 1000
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.93)',
                            borderRadius: '18px',
                            padding: '2rem',
                            boxShadow: '0 4px 12px rgba(82, 255, 203, 0.28)',
                            minWidth: '500px'
                        }}
                    >
                        <Typography variant="h5" sx={{ color: 'white' }}>
                            Create a group
                        </Typography>
                        <TextField
                            label="Enter group name"
                            value={grpName}
                            onChange={handleInputChange}
                            fullWidth
                            margin="normal"
                            sx={{ backgroundColor: 'white', borderRadius: '10px' }}
                        />
                        {msg && <Typography sx={{ color: 'white' }}>{msg}</Typography>}

                        {grpName !== '' && (
                            <Box sx={{ marginTop: '1rem' }}>
                                <Typography sx={{ color: 'white' }}>Select friends</Typography>
                                {friends.map((frnd) => (
                                    <Button
                                        key={frnd.id}
                                        onClick={() => toggleFriendSelection(frnd.id)}
                                        sx={{
                                            backgroundColor: selectedFrnds.includes(frnd.id) ? '#5a5a5a' : 'transparent',
                                            borderRadius: '10px'
                                        }}
                                    >
                                        <SelectFrndBtn title={frnd.name} />
                                    </Button>
                                ))}

                                <Box sx={{ marginTop: '1rem' }}>
                                    <Button
                                        onClick={() => handleCreateGroup()}
                                        sx={{
                                            color: '#9be0c3',
                                            borderRadius: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.77)',
                                            backdropFilter: 'blur(8px)'
                                        }}
                                    >
                                        Create Group
                                    </Button>
                                </Box>
                            </Box>
                        )}

                        <Button
                            variant="contained"
                            sx={{
                                color: '#9be0c3',
                                borderRadius: '20px',
                                position: 'absolute',
                                top: 100,
                                right: 200,
                                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                                backdropFilter: 'blur(8px)'
                            }}
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default GroupsList;
