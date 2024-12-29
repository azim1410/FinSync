import React from "react";
import "../../../Pages/Dashboard/styles.css";

const DashboardHeader = () => {
  return (
    <div>
      <div className="dashboard-header">
        <h1 className="dashboard-h1">Dashboard</h1>
        <div className="dashboard-expense-actions">
          <a href="/add-expense" className="add-expense-btn button">
            Add an expense
          </a>
          <a href="/settle-up" className="settle-up-btn button">
            Settle up
          </a>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="total-balances">
          <div className="block">
            <div className="title">total balance</div>
            <span className="amount">$0.00*</span>
          </div>
          <div className="block">
            <div className="title">total balance</div>
            <span className="amount">$0.00*</span>
          </div>
          <div className="block">
            <div className="title">total balance</div>
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
