import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectExpenseCategoryNames = (state: RootState) => state.categories.expenseCategories;

export const memoizedExpenseCategories = createSelector(
    [selectExpenseCategoryNames],
    (expenseCategories) => expenseCategories.map((categoryName: string) => ({ name: categoryName }))
);
