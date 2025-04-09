import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import PieChartComponent from '../components/PieChartComponent';
import ExpenseHistory from '../components/ExpenseHistory';
import { Colors, FontSize, Padding } from '../styles/tokens';
import { GroupedExpense, Category, Expense } from '../types/types';
import { groupExpenses } from '../helpers/groupExpenses';
import { calculateTotalExpenses } from '../helpers/calculateTotalExpenses';
import { calculatePieData } from '../helpers/calculatePieData';
import { memoizedExpenseCategories } from '../store/selectors/expensesSelectors';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnalyticsScreen: React.FC = () => {
    const expenseCategories: Category[] = useSelector(memoizedExpenseCategories);
    const expenses: Expense[] = useSelector((state: RootState) => state.expenses.list);

    const groupedExpenses: GroupedExpense[] = groupExpenses(expenseCategories, expenses);
    const totalExpenses: number = calculateTotalExpenses(groupedExpenses);
    const pieData = calculatePieData(groupedExpenses, totalExpenses);

    const hasData = groupedExpenses.length > 0 && totalExpenses > 0;

    return (
        <SafeAreaView style={styles.container}>
            <BackButtonHeader />
            <ScrollView>
                {hasData ? (
                    <View style={styles.chartContainer}>
                        <PieChartComponent pieData={pieData} totalExpenses={totalExpenses} />
                        <ExpenseHistory groupedExpenses={groupedExpenses} pieData={pieData} />
                    </View>
                ) : (
                    <Text style={styles.noDataText}>No expense data added...</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: Padding.p20,
    },
    chartContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    noDataText: {
        color: Colors.greenText,
        textAlign: 'center',
        fontSize: FontSize.fs16,
    },
});

export default AnalyticsScreen;
