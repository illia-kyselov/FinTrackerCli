import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ArrowBackSVG from '../../assets/ArrowBackSVG';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PaddingVertical, Colors } from '../../styles/tokens';
import { RootStackParamList } from '../../types/types';

type AddExpenseScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const BackButtonHeader: React.FC = () => {
    const navigation = useNavigation<AddExpenseScreenNavigationProp>();

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress}>
                <ArrowBackSVG width={30} height={30} fill={Colors.greenText} stroke={Colors.greenText} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: PaddingVertical.pv15,
        backgroundColor: Colors.primary,
    },
});

export default BackButtonHeader;
