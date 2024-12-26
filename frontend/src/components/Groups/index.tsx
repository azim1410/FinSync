import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import { groups } from '../../Data/data';
import Link from '@mui/material/Link';
import GroupInfo from '../../atoms/GroupInfo';
const GroupsList = () => {
    return (
        <Box className="groups-list" sx={{ justifyContent: 'right', marginTop: '1rem' , marginBottom:'1rem'}}>
            <Box className="groups-header" sx={{ display: 'flex' , justifyContent: 'space-between', marginBottom: '1rem'}}>
                <Typography color='#a1a1a1'>GROUPS</Typography>
                <Link href="#" underline="hover" color='#9be0c3'>
                    {'Add new group'}
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
                {groups.map((group) => (
                    <GroupInfo id={group.id} grp_name={group.grp_name}/>
                ))}
            </Box>
        </Box>
    )
}

export default GroupsList