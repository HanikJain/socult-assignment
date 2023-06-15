import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, Bio} from "./userTypes"
import {USERS} from "./userData"

type InitialState = {
    users: User[],
}
const initialState: InitialState =  {
    users: USERS,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateBio(state, action: PayloadAction<Bio>){
            state.users[0].bio = action.payload;
        }, 
        
        updateState(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        }
    }

})

const dataActions = dataSlice.actions;

export default dataSlice;
export { dataActions };