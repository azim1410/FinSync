import { Box } from "@mui/material";
import DashBoardHeader from "../../molecules/DashboardHeader";
import ExpenseSummary from "../../molecules/ExpenseSummary";
const Dashboard = () => {
  return (
    <Box className="dashboard" sx={{backgroundColor: '#efefef', padding: '1rem', borderRadius: '20px', marginTop: '1rem'}}>
      <DashBoardHeader title="Dashboard"/>
      <ExpenseSummary />
      <Box className="dashboard-owe-to-friends">
        <h2>Yow owe | you are owed</h2>
      </Box>
    </Box>
  )
}

export default Dashboard