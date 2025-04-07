import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, FontSize, Radius, PaddingHorizontal, PaddingVertical, MarginBottom } from '../styles/tokens';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface DailyBalanceProps {
    dailyBalance: number;
}

const DailyBalance: React.FC<DailyBalanceProps> = ({ dailyBalance }) => {
    const currency = useSelector((state: RootState) => state.user.currency);
    const currencySymbol = currency === 'USD' ? '$' : '€';

    return (
        <Text
            style={[
                styles.dailyBalance,
                dailyBalance < 0
                    ? { color: Colors.redText, backgroundColor: Colors.redBgColor }
                    : { color: Colors.greenText, backgroundColor: Colors.greenBgColor },
            ]}
        >
            {dailyBalance.toFixed(2)} {currencySymbol}
        </Text>
    );
};

const styles = StyleSheet.create({
    dailyBalance: {
        fontSize: FontSize.fs16,
        marginTop: MarginBottom.mb5,
        marginBottom: MarginBottom.mb10,
        paddingVertical: PaddingVertical.pv5,
        paddingHorizontal: PaddingHorizontal.ph10,
        borderRadius: Radius.r10,
        textAlign: 'center',
    },
});

export default DailyBalance;
