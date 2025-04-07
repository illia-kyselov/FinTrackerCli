import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    AddExpense: undefined;
    Analytics: undefined;
    FutureExpensesPage: undefined;
    Profile: undefined;
    Settings: undefined;
};

export type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
export type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;
    category: string;
}

export interface GroupedExpense {
    category: string;
    amount: number;
    transactions: number;
}

export interface Category {
    name: string;
}

export { StackNavigationProp };
