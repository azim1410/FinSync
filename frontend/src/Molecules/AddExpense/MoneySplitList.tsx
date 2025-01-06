import React, { useState } from "react";
import '../../Components/AddExpenseModal/styles.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";



const MoneySplitList: React.FC = () => {
  // Example data, later this will come from your backend
 

  const friends = useSelector((state: RootState) => state.user.friends);
  const [SelectFrnd, setSelectedFrnd] = useState<string>("");
  return (
    <div className="">
      {/* Header Section */}
      <div className="expense-header">
        <h2 className="add-expense-header">Add an expense</h2>
      </div>

      {/* With Field Section */}
      <div className="with-field">
        <p className="with">
          With <strong>you</strong> and:
        </p>
        <ul className="with-list">

          {friends.map((person) => (
            <li
              className="li-input"
              key={person.id}
              onClick={() => setSelectedFrnd(person.id)}
              style={{
                backgroundColor: SelectFrnd === person.id ? "#d0ffed" : "transparent",
                borderRadius: '10px',
                cursor: 'pointer'
              }}
            >
              <img
                src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-teal10-50px.png"
                // alt={formatName(person)}
              />
              <p>{person.name}</p>
              <span className="token-input-delete-token-mac">x</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoneySplitList;
