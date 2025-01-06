import { Box, Typography } from '@mui/material';
import { IoPerson } from "react-icons/io5";

type userData = {
    username: string,
}
const UserProfile = ({username}: userData) => {
  return (
    <Box sx={{display:'flex', alignItems:'center', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px', marginBottom:'0.3rem', borderRadius:'8px', paddingLeft:'0.5rem'}}>
        <IoPerson color='#9be0c3' />
        <Typography sx={{marginLeft:'1rem'}}>{username.slice(0,7)}...</Typography>
    </Box>
  )
}

export default UserProfile