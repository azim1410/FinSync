import React from "react";
import '../../Components/AddExpenseModal/styles.css'

const EnterMoney: React.FC = () => {
  return (
    <div className="container main-container">
      <img
        src="	https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png"
        alt="bill-img"
        className="bill-img"
      />
      <div className="input-field-container">
        <input
          type="text"
          className="input-field description"
          placeholder="Enter a description"
        />
        <div className="cost-container">
          <span className="currency">₹</span>
          <input type="text" className=" cost" placeholder="0.00" />
        </div>
      </div>
    </div>
  );
};

export default EnterMoney;
