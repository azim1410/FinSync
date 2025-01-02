import { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFriend } from '../../features/friends/friendsService';

type FriendInfoProps = {
    id: string;
    name: string | null;
};

const FriendInfo = ({ id, name }: FriendInfoProps) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const userId = useSelector((state: RootState) => state.user.id);

    const [openConfirmModal, setOpenConfirmModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenModal = () => {
        setOpenConfirmModal(true);
    };

    const handleCloseModal = () => {
        setOpenConfirmModal(false);
    };

    const handleRemoveFriend = async () => {
        setLoading(true);
        try {
            await removeFriend(userId, id, token); 
  
        } catch (error) {
            console.error('Failed to remove friend:', error);
        } finally {
            setLoading(false);
            setOpenConfirmModal(false); // Close modal after operation
        }
    };

    return (
        <>
            {/* Friend Info Box */}
            <Box
                key={id}
                sx={{
                    padding: '2px',
                    borderRadius: '20px',
                    marginTop: '5px',
                    marginBottom: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    backgroundColor: '#efefef',
                    paddingLeft: '1rem',
                    marginRight: '10px',
                    justifyContent: 'space-between',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <PersonSharpIcon sx={{ color: '#9be0c3', marginRight: '0.5rem' }} />
                    <Typography color='#3c3c3c'>{name}</Typography>
                </Box>

                <Box>
                    <Button onClick={handleOpenModal}>
                        <RemoveCircleOutlineIcon sx={{ color: '#ff8f8f' }} />
                    </Button>
                </Box>
            </Box>

            {/* Confirmation Modal */}
            <Dialog open={openConfirmModal} onClose={handleCloseModal}>
                <DialogTitle>Remove Friend</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to remove {name}?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} disabled={loading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleRemoveFriend}
                        color='error'
                        variant='contained'
                        disabled={loading}
                    >
                        {loading ? 'Removing...' : 'Remove'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default FriendInfo;
