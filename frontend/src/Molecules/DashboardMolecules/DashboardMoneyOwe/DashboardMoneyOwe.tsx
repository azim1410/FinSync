import React from "react";
// import profile_pic1 from "../profile_pic1.webp";
import profile_pic1 from '../../../assets/profile_pic1.webp'
import profile_pic2 from "../../../assets/profile_pic2.webp";
import profile_pic3 from "../../../assets/profile_pic3.jpg";
import "../../../Pages/Dashboard/styles.css";

const DashboardMoneyOwe = () => {
  return (
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
  );
};

export default DashboardMoneyOwe;
