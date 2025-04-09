import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, FontSize, MarginBottom, MarginRight, PaddingVertical } from '../styles/tokens';
import { categoryIcons } from '../styles/categoryIcons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ExpenseDescriptionProps {
    category: string;
    description: string;
    amount: number;
}

const ExpenseDescription: React.FC<ExpenseDescriptionProps> = ({ category, description, amount }) => {
    const currency = useSelector((state: RootState) => state.user.currency);
    const currencySymbol = currency === 'USD' ? '$' : '€';
    const Icon = categoryIcons[category];

    return (
        <View style={styles.expenseDescription}>
            {Icon && (
                <Icon
                    width={22}
                    height={22}
                    fill={Colors.greenText}
                    stroke={Colors.greenText}
                    style={styles.icon}
                />
            )}
            <View>
                <Text style={styles.expenseText}>{category}</Text>
                {description ? <Text style={styles.subText}>{description}</Text> : null}
            </View>
            <Text
                style={[
                    styles.amountText,
                    amount > 0 ? { color: Colors.greenText } : { color: Colors.mainText },
                ]}
            >
                {amount} {currencySymbol}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    expenseDescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: PaddingVertical.pv10,
        marginBottom: MarginBottom.mb5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
    },
    icon: {
        marginRight: MarginRight.mr10,
        alignSelf: 'center',
    },
    expenseText: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
    },
    subText: {
        color: Colors.greyText,
        fontSize: FontSize.fs12,
    },
    amountText: {
        flex: 1,
        fontSize: FontSize.fs14,
        textAlign: 'right',
    },
});

export default ExpenseDescription;
