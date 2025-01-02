import React from "react";
import '../../Components/AddExpenseModal/styles.css'

// Utility function to format the name
const formatName = (fullName: string): string => {
  const nameParts = fullName.split(" ");
  if (nameParts.length > 1) {
    return `${nameParts[0]} ${nameParts[1][0].toUpperCase()}.`;
  }
  return fullName; // If no last name, just return the first name
};

const MoneySplitList: React.FC = () => {
  // Example data, later this will come from your backend
  const people = [
    "Azim Damani",
    "Shaik Huzair",
    "Deepak Valugula",
    "John Doe",
    "Jane Smith",
  ];

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
          {/* Dynamically rendering the list */}
          {people.map((person, index) => (
            <li className="li-input" key={index}>
              <img
                src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-teal10-50px.png"
                alt={formatName(person)}
              />
              <p>{formatName(person)}</p>
              <span className="token-input-delete-token-mac">x</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoneySplitList;
