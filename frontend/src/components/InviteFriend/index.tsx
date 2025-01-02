import { Box, Button, TextField, Typography } from "@mui/material"

import { useState } from "react"
import { InviteUser } from "../../features/friends/friendsService";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const InviteFriend = () => {
  const [email,setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const userName = useSelector((state: RootState) => state.user.name);
  const token = useSelector((state: RootState) => state.auth.token);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
};


const handleInviteFriend = async () => {
  const response = await InviteUser(token, userName, email);
  setMsg(response);
  setTimeout(() => {
    setMsg("");
  }, 5000);
  setEmail("");
}
  return (
    <Box sx={{ backgroundColor: '#efefef', borderRadius: '10px', padding: '1rem'}}>
        <Typography sx={{color: '#9be0c3'}}>INVITE FRIENDS</Typography>
        <TextField id="standard-basic" label="Enter email"
        value={email}
        onChange={handleEmailChange}
         variant="standard" sx={{marginTop: '0.5rem', marginBottom: '1rem'}}/>
        <Button onClick={() => handleInviteFriend()} sx={{
          backgroundColor:'#9be0c3', color:'#fcfcfc', fontWeight: 300
        }}>
          Invite friend
        </Button>
        {msg && (
          <Typography sx={{color:"#b3b3b3"}}>{msg}</Typography>
        )}
    </Box>
  )
}

export default InviteFriend