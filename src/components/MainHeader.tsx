import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, MarginBottom } from '../styles/tokens';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { groupExpenses } from '../helpers/groupExpenses';
import { calculateTotalExpenses } from '../helpers/calculateTotalExpenses';
import { memoizedExpenseCategories } from '../store/selectors/expensesSelectors';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const MainHeader: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const userAvatar = useSelector((state: RootState) => state.user.avatar);

    const expenseCategories = useSelector(memoizedExpenseCategories);
    const expenses = useSelector((state: RootState) => state.expenses.list);
    const groupedExpenses = groupExpenses(expenseCategories, expenses);
    const totalExpenses = calculateTotalExpenses(groupedExpenses);
    const hasExpenses = groupedExpenses.length > 0 && totalExpenses > 0;

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                {userAvatar ? (
                    <Image source={{ uri: userAvatar }} style={styles.avatarImage} />
                ) : (
                    <Ionicons name="person-circle-outline" size={30} color={Colors.greenText} />
                )}
            </TouchableOpacity>
            <View style={styles.rightIcons}>
                {hasExpenses && (
                    <TouchableOpacity onPress={() => navigation.navigate('Analytics')} style={styles.iconButton}>
                        <Ionicons name="stats-chart-outline" size={30} color={Colors.greenText} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={30} color={Colors.greenText} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: MarginBottom.mb20,
        paddingHorizontal: 10,
    },
    rightIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginRight: 16,
    },
    avatarImage: {
        width: 46,
        height: 46,
        borderRadius: 50,
    },
});

export default MainHeader;
