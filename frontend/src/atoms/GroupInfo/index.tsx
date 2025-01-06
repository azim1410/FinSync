import { Box, Typography } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';

type GroupInfoProp = {
    id: string,
    name: string | null,
}

const GroupInfo = ({ id, name }: GroupInfoProp) => {
    return (
        <Box key={id} sx={{  borderRadius: '10px', cursor: 'pointer', display: 'flex', backgroundColor: '#efefef', paddingLeft: '1rem', paddingRight: '1rem', marginRight:'10px',
            paddingTop: '0.5rem', paddingBottom: '0.5rem', width :'100%'
         }}>
            <GroupsIcon sx={{ color: '#9be0c3', marginRight: '0.5rem' }} />
            <Typography color='#3c3c3c'>{name}</Typography>
        </Box>
    )
}

export default GroupInfo