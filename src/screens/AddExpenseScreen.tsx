import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import TabsButtons from '../components/TabsButtons';
import ExpenseForm from '../components/ExpenseForm';
import { Colors, Padding } from '../styles/tokens';
import { RootStackParamList } from '../types/types';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

interface Props {
    navigation: AddExpenseScreenNavigationProp;
}

export default function AddExpenseScreen({ navigation }: Props) {
    const [type, setType] = useState<'income' | 'expense'>('expense');

    return (
        <SafeAreaView style={styles.container}>
            <BackButtonHeader />
            <TabsButtons type={type} setType={setType} />
            <ExpenseForm type={type} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: Padding.p20,
    },
});
