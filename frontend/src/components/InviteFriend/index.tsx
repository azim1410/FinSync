import { Box, TextField, Typography } from "@mui/material"
import ButtonTwo from "../../atoms/ButtonTwo"

const InviteFriend = () => {
  return (
    <Box sx={{ backgroundColor: '#efefef', borderRadius: '10px', padding: '1rem'}}>
        <Typography sx={{color: '#9be0c3'}}>INVITE FRIENDS</Typography>
        <TextField id="standard-basic" label="Enter email" variant="standard" sx={{marginTop: '0.5rem', marginBottom: '1rem'}}/>
        <ButtonTwo title="Send Invite"/>
    </Box>
  )
}

export default InviteFriend