import { Box, Typography } from "@mui/material";
import ButtonOne from "../../atoms/ButtonOne"
import ButtonTwo from "../../atoms/ButtonTwo"

type HeaderProps = {
  title: string,
}

const DashBoardHeader = ({title} :HeaderProps) => {
  return (
    <Box className="dashboard-my-info" sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <Box className="dashboard-header">
          <Box>
            <Typography variant="h4" color="#3a3c3c">{title}</Typography>
          </Box>
        </Box>
        <Box className="dashboard-utility-btns">
          <ButtonOne title="Add Expenses" />
          <ButtonTwo title="Settle up" />

        </Box>
      </Box>
  )
}

export default DashBoardHeader