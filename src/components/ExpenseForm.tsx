import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Input from '../components/UI/Input';
import SubmitButton from '../components/UI/SubmitButton';
import CategoryPicker from '../components/UI/CategoryPicker';
import { Colors, FontSize, Gap, MarginBottom, PaddingTop } from '../styles/tokens';
import { useAddExpense } from '../hooks/useAddExpense';
import { AddExpenseScreenNavigationProp } from '../types/types';
import { RootState } from '../store/store';

interface ExpenseFormProps {
    type: 'income' | 'expense';
    navigation: AddExpenseScreenNavigationProp;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ type, navigation }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState<string>('Uncategorized');
    const [errors, setErrors] = useState<{ description?: string; amount?: string }>({});

    const handleAddExpense = useAddExpense();

    const expenseCategories = useSelector((state: RootState) => state.categories.expenseCategories);
    const incomeCategories = useSelector((state: RootState) => state.categories.incomeCategories);

    const handleSubmit = () => {
        const newErrors: { description?: string; amount?: string } = {};

        if (!amount || !/^\d+(\.\d+)?$/.test(amount)) {
            newErrors.amount = !amount ? 'This field is required' : 'Only numbers are allowed';
        }

        if (description.trim() && /\d/.test(description)) {
            newErrors.description = 'Only text is allowed';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        handleAddExpense(amount, type, navigation, category, description || '');
    };

    const categories = type === 'expense' ? expenseCategories : incomeCategories;

    const isFormComplete = amount.trim() !== '';

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.formContainer}>
                    <View>
                        <Input
                            placeholder="Amount?"
                            value={amount}
                            onChangeText={setAmount}
                            style={errors.amount ? styles.inputError : {}}
                        />
                        {errors.amount && <Text style={styles.errorText}>{errors.amount}</Text>}
                    </View>

                    <View>
                        <Input
                            placeholder="Notes (optional)"
                            value={description}
                            onChangeText={setDescription}
                            style={errors.description ? styles.inputError : {}}
                        />
                        {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
                    </View>

                    <View style={styles.categoryPicker}>
                        <CategoryPicker
                            selectedValue={category}
                            onValueChange={setCategory}
                            categories={categories}
                        />
                    </View>
                </View>
            </ScrollView>
            <View>
                <SubmitButton
                    onPress={handleSubmit}
                    text="Add"
                    disabled={!isFormComplete}
                    style={{ opacity: isFormComplete ? 1 : 0.3 }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: PaddingTop.pt50,
    },
    formContainer: {
        gap: Gap.g30,
    },
    inputError: {
        borderColor: Colors.error,
    },
    categoryPicker: {
        borderColor: Colors.error,
        backgroundColor: Colors.primary,
        marginBottom: MarginBottom.mb20,
    },
    errorText: {
        color: Colors.error,
        fontSize: FontSize.fs12,
        marginTop: MarginBottom.mb5,
    },
});

export default ExpenseForm;
