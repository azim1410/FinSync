import React from "react";
import "../../../Pages/Dashboard/styles.css";

interface DashboardHeaderProps {
  openAddExpenseModal: () => void;
  openSettleUpModal: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  openAddExpenseModal,
  openSettleUpModal,
}) => {
  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-h1">Dashboard</h1>
        <div className="dashboard-expense-actions">
          <button
            onClick={openAddExpenseModal}
            className="add-expense-btn button"
          >
            Add an expense
          </button>
          <button
            onClick={openSettleUpModal}
            className="settle-up-btn button"
          >
            Settle up
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="total-balances">
          <div className="block">
            <div className="title">Total balance</div>
            <span className="amount">$0.00*</span>
          </div>
          <div className="block">
            <div className="title">Total balance</div>
            <span className="amount">$0.00*</span>
          </div>
          <div className="block">
            <div className="title">Total balance</div>
            <span className="amount">$0.00*</span>
          </div>
          <div className="multiple_currencies">
            * You have balances in multiple currencies.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
