import { createSlice } from '@reduxjs/toolkit';

interface CategoriesState {
    expenseCategories: string[];
    incomeCategories: string[];
}

const initialState: CategoriesState = {
    expenseCategories: [
        'Uncategorized',
        'Food & Drinks',
        'Groceries',
        'Transport',
        'Internet',
        'Rent',
        'Entertainment',
        'Shopping',
    ],
    incomeCategories: [
        'Uncategorized',
        'Salary',
        'Budget',
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setExpenseCategories: (state, action) => {
            state.expenseCategories = action.payload;
        },
        setIncomeCategories: (state, action) => {
            state.incomeCategories = action.payload;
        },
    },
});

export const { setExpenseCategories, setIncomeCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
