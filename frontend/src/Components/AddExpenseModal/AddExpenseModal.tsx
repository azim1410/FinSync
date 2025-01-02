import React from 'react';
import './styles.css';
import MoneySplitList from '../../Molecules/AddExpense/MoneySplitList';
import EnterMoney from '../../Molecules/AddExpense/EnterMoney';
import PayerSplitButtons from '../../Molecules/AddExpense/PayerSplitButtons';

const AddExpenseModal: React.FC = () => {
  return (
    <div className="add-expense-container">
      <MoneySplitList />
      <EnterMoney />
      <PayerSplitButtons />
      <div className="buttons-container">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default AddExpenseModal;