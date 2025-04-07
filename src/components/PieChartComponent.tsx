import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { Colors, FontSize } from '../styles/tokens';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface PieChartComponentProps {
    pieData: Array<{ value: number; color: string; gradientCenterColor: string }>;
    totalExpenses: number;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ pieData, totalExpenses }) => {
    const currency = useSelector((state: RootState) => state.user.currency);
    const currencySymbol = currency === 'USD' ? '$' : '€';

    return (
        <>
            {pieData.length > 0 ? (
                <PieChart
                    data={pieData}
                    radius={100}
                    innerRadius={70}
                    textColor={Colors.greenText}
                    textSize={16}
                    innerCircleColor={Colors.primary}
                    donut
                    showGradient
                    centerLabelComponent={() => (
                        <View style={styles.centerLabel}>
                            <Text style={styles.totalAmount}>
                                -{totalExpenses.toFixed(0)} {currencySymbol}
                            </Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noDataText}>No expenses added...</Text>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    centerLabel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalAmount: {
        fontSize: FontSize.fs22,
        color: Colors.greenText,
        fontWeight: 'bold',
    },
    noDataText: {
        color: Colors.greenText,
        textAlign: 'center',
    },
});

export default PieChartComponent;
