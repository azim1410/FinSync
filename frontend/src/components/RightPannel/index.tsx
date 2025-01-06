import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserProfile from "../../molecules/userProfile";

const RightPannel = () => {
    const grpName = useSelector((state: RootState) => state.selectedItem.name);
    const grpMembers = useSelector((state: RootState) => state.selectedItem.memberIds);
    console.log(grpMembers);
    return (
        <Box className="right-pannel" sx={{backgroundColor: '#efefef', height: 'max-content', padding:'1rem', borderRadius: '20px', marginTop: '1rem'}}>
            <Typography variant="h4" sx={{color:"#373737", marginBottom:'3rem'}}>{grpName}</Typography>
            {grpMembers?.map((member) => (
                <Box>
                    <UserProfile username={member}/>
                </Box>
            ))}
        </Box>
    )
}
export default RightPannel;