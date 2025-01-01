import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Transaction {
  transactionId: string;
  amount: number;
  date: string;
  description: string;
}

export interface Group {
  id: string;
  name: string;
  memberIds: string[];
  transactions: Transaction[];
  createdBy: string;
}

export interface Friend {
  id: string;
  email: string;
  name: string | null;
  password: string | null;
  you_owe: number;
  you_are_owed: number;
  friends: Friend[];
  groups: Group[];
}

export interface UserState {
  id: string;
  email: string;
  name: string | null;
  you_owe: number;
  you_are_owed: number;
  friends: Friend[];
  groups: Group[];
}

const initialState: UserState = {
  id: '',
  email: '',
  name: null,
  you_owe: 0,
  you_are_owed: 0,
  friends: [],
  groups: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.you_owe = action.payload.you_owe;
      state.you_are_owed = action.payload.you_are_owed;
      state.friends = action.payload.friends;
      state.groups = action.payload.groups;
    },
    updateGroups(state, action: PayloadAction<Group[]>) {
      state.groups = action.payload;
    },
    addFriend(state, action: PayloadAction<Friend>) {
      state.friends.push(action.payload);
    },
  },
});

export const { setUserData, updateGroups, addFriend } = userSlice.actions;

export default userSlice.reducer;
