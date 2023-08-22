/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const UsersReducer = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser : (state , action ) => {
            const {id , name , email} = action.payload
            state.push({id , name , email})
        },

        editUser: (state , action) => {
            const {id , name , email} = action.payload
            
            const userData = state.find(user => user.id == id)
            if(userData) {
                userData.name = name;
                userData.email = email;
            }
        },

        deleteUser: (state, action ) => {
            const {id} = action.payload
            
            const newUsers = state.filter(user => user.id != id)
            if(newUsers) {
                return newUsers;
            }
        }
    }
})

export const { addUser , editUser , deleteUser } = UsersReducer.actions
export default UsersReducer.reducer