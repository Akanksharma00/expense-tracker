import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses: [],
    category: 'food',
    isEditing: false,
    selectedId: '',
    totalExpense: 0,
    activatePremium: false
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: initialExpenseState,
    reducers:{
        setExpenses(state,action){
            state.expenses = action.payload;
        },
        setCategory(state,action){
            state.category = action.payload;
        },
        setIsEditing(state,action){
            state.isEditing = action.payload;
        },
        setSelectedId(state,action){
            state.selectedId = action.payload;
        },
        setTotalExpense(state,action){
            state.totalExpense = action.payload;
        },
        setActivatePremium(state,action){
            state.activatePremium = action.payload;
        }
    }
})

export const expensesActions = expenseSlice.actions;

export default expenseSlice.reducer;