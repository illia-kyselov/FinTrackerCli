// src/screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setCurrency } from '../store/slices/userSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import { Colors, FontSize, Padding, Radius, MarginBottom } from '../styles/tokens';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

const SettingsScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProp>();
    const currency = useSelector((state: RootState) => state.user.currency);

    const switchCurrency = () => {
        const newCurrency = currency === 'USD' ? 'EUR' : 'USD';
        dispatch(setCurrency(newCurrency));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <BackButtonHeader />
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={styles.headerSide} />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.card}>
                    <TouchableOpacity onPress={switchCurrency}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Preferred Currency</Text>
                            <View style={styles.currencyInfo}>
                                <Text style={styles.currencyValue}>{currency}</Text>
                                <Ionicons name="repeat" size={20} color={Colors.greenText} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity>
                        <View style={styles.row}>
                            <Text style={styles.label}>Privacy Policy</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.greenText} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity>
                        <View style={styles.row}>
                            <Text style={styles.label}>Terms of Use</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.greenText} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.separator} />

                    <TouchableOpacity>
                        <View style={styles.row}>
                            <Text style={styles.label}>About Developer</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color={Colors.greenText} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Padding.p20,
        paddingVertical: 16,
        backgroundColor: Colors.primary,
    },
    headerSide: {
        width: 80,
        alignItems: 'center',
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: FontSize.fs22,
        fontWeight: 'bold',
        color: Colors.greenText,
    },
    scrollContent: {
        paddingHorizontal: Padding.p20,
        paddingBottom: 40,
        backgroundColor: Colors.primary,
    },
    card: {
        backgroundColor: Colors.grey,
        borderRadius: Radius.r10,
        paddingVertical: Padding.p10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Padding.p10,
        paddingVertical: 12,
    },
    label: {
        color: Colors.mainText,
        fontSize: FontSize.fs16,
    },
    currencyInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    currencyValue: {
        fontSize: FontSize.fs16,
        color: Colors.greenText,
        marginRight: 6,
    },
    separator: {
        height: 1,
        backgroundColor: Colors.black,
        marginVertical: 4,
        opacity: 0.3,
    },
});

export default SettingsScreen;
