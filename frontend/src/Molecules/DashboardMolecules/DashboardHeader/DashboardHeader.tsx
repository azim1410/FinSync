import React, { useMemo } from "react";
import "../../../Pages/Dashboard/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface DashboardHeaderProps {
  openAddExpenseModal: () => void;
  openSettleUpModal: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  openAddExpenseModal,
  openSettleUpModal,
}) => {

  const userYouOwe = useSelector((state: RootState) => state.user.you_owe);
  const userYouAreOwe = useSelector((state: RootState) => state.user.you_are_owed);

  const userTotalbalance = useMemo(() => {
    const total = userYouAreOwe - userYouOwe;
    return total;
  }, [userYouAreOwe, userYouOwe])
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
            <span className="amount">₹{userTotalbalance}</span>
          </div>
          <div className="block">
            <div className="title">You owe</div>
            <span className="amount">₹{userYouOwe}</span>
          </div>
          <div className="block">
            <div className="title">You are owed</div>
            <span className="amount">₹{userYouAreOwe}</span>
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
