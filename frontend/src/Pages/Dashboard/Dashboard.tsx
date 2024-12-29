import React from "react";
import "./styles.css";
import DashboardHeader from "../../Molecules/DashboardMolecules/DashboardHeader/DashboardHeader";
import DashboardLeftContainer from "../../Molecules/DashboardMolecules/DashboardLeftContainer/DashboardLeftContainer";
import DashboardMoneyOwe from "../../Molecules/DashboardMolecules/DashboardMoneyOwe/DashboardMoneyOwe";
import DashboardRightContainer from "../../Molecules/DashboardMolecules/DashboardRightContainer/DashboardRightContainer";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <DashboardLeftContainer/>
        <div className="dashboard-center-container">
          <DashboardHeader/>
          <DashboardMoneyOwe/>
        </div>
        <DashboardRightContainer/>
      </div>
    </div>
  );
};

export default Dashboard;
