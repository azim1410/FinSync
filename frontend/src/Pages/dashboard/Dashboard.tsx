import React, { useState } from "react";
import "./styles.css";
import DashboardHeader from "../../molecules/DashboardMolecules/DashboardHeader/DashboardHeader";
import DashboardMoneyOwe from "../../molecules/DashboardMolecules/DashboardMoneyOwe/DashboardMoneyOwe";

import AddExpenseModal from "../../components/AddExpenseModal/AddExpenseModal";
import SettleUpModal from "../../components/SettleUpModal/SettleUpModal";

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
    
        <div className="dashboard-center-container">
          <DashboardHeader
            openAddExpenseModal={openAddExpenseModal}
            openSettleUpModal={openSettleUpModal}
          />
          <DashboardMoneyOwe />
        </div>
     
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
