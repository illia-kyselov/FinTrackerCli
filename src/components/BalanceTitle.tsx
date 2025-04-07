import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontSize, MarginBottom, PaddingBottom } from '../styles/tokens';
import { useTotalBalance } from '../hooks/useTotalBalance';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BalanceTitle: React.FC = () => {
    const totalBalance = useTotalBalance();
    const currency = useSelector((state: RootState) => state.user.currency);
    const currencySymbol = currency === 'USD' ? '$' : '€';

    return (
        <Text
            style={[
                styles.balance,
                totalBalance < 0
                    ? { color: Colors.redText, borderColor: Colors.redText }
                    : { color: Colors.greenText, borderColor: Colors.greenText },
            ]}
        >
            {totalBalance} {currencySymbol}
        </Text>
    );
};

const styles = StyleSheet.create({
    balance: {
        fontSize: FontSize.fs27,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        borderBottomWidth: 2,
        paddingBottom: PaddingBottom.pb2,
        marginBottom: MarginBottom.mb25,
    },
});

export default BalanceTitle;
