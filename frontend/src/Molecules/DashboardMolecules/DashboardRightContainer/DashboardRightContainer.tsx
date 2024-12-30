import React, { useEffect, useState } from "react";
import "./DRCstyles.css";
interface BalanceData {
  totalBalance: string;
  youAreOwed: string;
  youOwe: string;
}

const DashboardRightContainer: React.FC = () => {
  const [balanceData, setBalanceData] = useState<BalanceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Uncomment this code when API is ready
  // useEffect(() => {
  //   const fetchBalanceData = async () => {
  //     try {
  //       const response = await fetch("https://api.example.com/balances"); // Replace with your API URL
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data: BalanceData = await response.json();
  //       setBalanceData(data);
  //       setLoading(false);
  //     } catch (err) {
  //       setError((err as Error).message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBalanceData();
  // }, []);

  // Demo data for now
  useEffect(() => {
    const demoData: BalanceData = {
      totalBalance: "$0.00",
      youAreOwed: "$1113.34",
      youOwe: "INR9922.91",
    };

    // Simulate API loading delay
    setTimeout(() => {
      setBalanceData(demoData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="balance-summary">
      <h2>Your Total Balance</h2>
      <div className="balance-details">
        <div className="balance-row">
          <span className="pos-label">You are owed:</span>
          <span className="pos-value">{balanceData?.youAreOwed}</span>
        </div>
        <div className="balance-row">
          <span className="neg-label">You owe:</span>
          <span className="neg-value">{balanceData?.youOwe}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardRightContainer;
