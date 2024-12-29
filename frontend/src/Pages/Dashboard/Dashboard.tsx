import React, { useState } from "react";
import "./styles.css";
import profile_pic1 from "../../assets/profile_pic1.webp";
import profile_pic2 from "../../assets/profile_pic2.webp";
import profile_pic3 from "../../assets/profile_pic3.jpg";
import AddExpenseModal from "../../Components/AddExpenseModal/AddExpenseModal"; // Import the modal component

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-left-container">left Container</div>
        <div className="dashboard-center-container">
          <div className="dashboard-header">
            <h1 className="dashboard-h1">Dashboard</h1>
            <div className="dashboard-expense-actions">
              <a
                href="#"
                onClick={openModal}
                className="add-expense-btn button"
              >
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

          <div className="dashboard-you-owe">
            <div className="summary">
              <div className="people-summary">
                <div className="people-list">
                  <div className="negatives">
                    <div className="small-owe-headers">
                      <h2 className="owing-header1"> YOU OWE </h2>
                    </div>
                    <ul>
                      <li className="relationship">
                        <a href="#">
                          <img src={profile_pic1} alt="" />
                        </a>
                        <div>
                          <h3>Azim</h3>
                          <div className="balance-i-owe">
                            You owe
                            <span className="amount">INR 9756.24</span>
                          </div>
                        </div>
                      </li>
                      <li className="relationship">
                        <a href="#">
                          <img src={profile_pic2} alt="" />
                        </a>
                        <div>
                          <h3>Samad</h3>
                          <div className="balance-i-owe">
                            You owe
                            <span className="amount">INR 1000</span>
                          </div>
                        </div>
                      </li>
                      <li className="relationship">
                        <a href="#">
                          <img src={profile_pic1} alt="" />
                        </a>
                        <div>
                          <h3>Huzair</h3>
                          <div className="balance-i-owe">
                            You owe
                            <span className="amount">INR 89656</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="positives">
                    <div className="small-owe-headers">
                      <h2 className="owing-header2">YOW ARE OWED</h2>
                    </div>
                    <ul>
                      <li className="relationship">
                        <a href="#">
                          <img src={profile_pic3} alt="" />
                        </a>
                        <div>
                          <h3>Deepak Valugla</h3>
                          <div className="balance-owes-me">
                            You owe
                            <span className="amount">INR 1236.70</span>
                          </div>
                        </div>
                      </li>
                      <li className="relationship">
                        <a href="#">
                          <img src={profile_pic1} alt="" />
                        </a>
                        <div>
                          <h3>Adnan Shaik</h3>
                          <div className="balance-owes-me">
                            You owe
                            <span className="amount">INR 15050</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-right-container">right Container</div>
      </div>

      {/* Modal overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddExpenseModal />
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
