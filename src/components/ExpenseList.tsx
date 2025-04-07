import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';
import PastMonthItem from './PastMonthItem';
import { Colors, FontSize, MarginTop } from '../styles/tokens';
import { useExpenses } from '../hooks/useExpenses';
import { sortGroupedExpensesByDate } from '../helpers/sortGroupedExpensesByDate';
import { isPastMonth } from '../helpers/isPastMonth';

const ExpenseList: React.FC = () => {
    const { groupedExpenses } = useExpenses();
    const sortedDates = sortGroupedExpensesByDate(groupedExpenses);

    return (
        <FlatList
            data={sortedDates}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                const expensesForMonth = groupedExpenses[item];
                const isPast = isPastMonth(expensesForMonth[0].date);

                return isPast
                    ? <PastMonthItem expensesForMonth={expensesForMonth} />
                    : <ExpenseItem item={expensesForMonth} />;
            }}
            ListEmptyComponent={
                <Text style={styles.noExpensesText}>
                    Oops... No expense data available yet
                </Text>
            }
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginHorizontal: 16,
    },
    noExpensesText: {
        color: Colors.greenText,
        textAlign: 'center',
        marginTop: MarginTop.mt20,
        fontSize: FontSize.fs16,
        marginHorizontal: 16,
    },
});

export default ExpenseList;
