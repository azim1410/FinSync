import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
    transactionId: string;
    amount: number;
    date: string;
    description: string;
  }

export interface selectedItemState {
  id: string;
  name: string | null;
  memberIds : string[] | null;
  transactions: Transaction[],
  createdBy: string | null,

}

const initialState : selectedItemState = {
    id : "",
    name : "",
    memberIds: [],
    transactions :[],
    createdBy : ""
}

const selectedItemSlice =  createSlice ({
    name: 'selectedItem',
    initialState,
    reducers : {
        setSelectedItem(state, action: PayloadAction<selectedItemState>){
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.memberIds = action.payload.memberIds;
            state.transactions = action.payload.transactions;
            state.createdBy = action.payload.createdBy;
        }
    }
})

export const {setSelectedItem} = selectedItemSlice.actions;

export default selectedItemSlice.reducer