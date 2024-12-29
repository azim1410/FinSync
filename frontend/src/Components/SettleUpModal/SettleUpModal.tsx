import React from "react";
import "./styles.css";
import paypal_logo from "../../assets/paypal_logo.png";
const SettleUpModal: React.FC = () => {
  return (
    <div className="settle-container">
      <div className="settle-header">
        <h2 className="settle-header-h2">Add an expense</h2>
      </div>
      <div className="settle-main">
        <p className="plain-text">Choose a payment method</p>
        <button className="cash-payment-btn">Record a cash payment</button>
        <button className="paypal-payment-btn">
          <img src={paypal_logo} alt="PayPal Logo" />
        </button>
      </div>
      <div className="small-text">
        <p>
          When you use a payment service, your payment is shared with that
          company under its Privacy Policy and Terms, including any fees if
          applicable. Splitwise charges no additional fees.
        </p>
      </div>
      <div className="buttons-container">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default SettleUpModal;
