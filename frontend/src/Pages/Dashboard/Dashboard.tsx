import React, { useState } from "react";
import "./styles.css";
import DashboardHeader from "../../Molecules/DashboardMolecules/DashboardHeader/DashboardHeader";
import DashboardLeftContainer from "../../Molecules/DashboardMolecules/DashboardLeftContainer/DashboardLeftContainer";
import DashboardMoneyOwe from "../../Molecules/DashboardMolecules/DashboardMoneyOwe/DashboardMoneyOwe";
import DashboardRightContainer from "../../Molecules/DashboardMolecules/DashboardRightContainer/DashboardRightContainer";
import AddExpenseModal from "../../Components/AddExpenseModal/AddExpenseModal";
import SettleUpModal from "../../Components/SettleUpModal/SettleUpModal";

const Dashboard: React.FC = () => {
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isSettleUpModalOpen, setIsSettleUpModalOpen] = useState(false);

  const openAddExpenseModal = () => {
    setIsAddExpenseModalOpen(true);
  };

  const closeAddExpenseModal = () => {
    setIsAddExpenseModalOpen(false);
  };

  const openSettleUpModal = () => {
    setIsSettleUpModalOpen(true);
  };

  const closeSettleUpModal = () => {
    setIsSettleUpModalOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <DashboardLeftContainer />
        <div className="dashboard-center-container">
          <DashboardHeader
            openAddExpenseModal={openAddExpenseModal}
            openSettleUpModal={openSettleUpModal}
          />
          <DashboardMoneyOwe />
        </div>
        <DashboardRightContainer />
      </div>

      {/* Add Expense Modal */}
      {isAddExpenseModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddExpenseModal />
            <button className="close-modal" onClick={closeAddExpenseModal}>
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Settle Up Modal */}
      {isSettleUpModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <SettleUpModal />
            <button className="close-modal" onClick={closeSettleUpModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
