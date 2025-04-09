import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MainHeader from '../components/MainHeader';
import BalanceTitle from '../components/BalanceTitle';
import ExpenseList from '../components/ExpenseList';
import AddExpenseButton from '../components/UI/AddExpenseButton';
import { Colors, Padding } from '../styles/tokens';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleAddExpense = () => {
        navigation.navigate('AddExpense');
    };

    return (
        <SafeAreaView style={styles.container}>
            <MainHeader />
            <BalanceTitle />
            <ExpenseList />
            <AddExpenseButton onPress={handleAddExpense} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: Padding.p20,
        paddingVertical: 16,
        paddingBottom: Padding.p20,
    },
});
