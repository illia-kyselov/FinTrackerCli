import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import AddCircleSVG from '../../assets/AddCircleSVG.jsx';
import { Colors, Radius } from '../../styles/tokens';

const AddExpenseButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.addIcon}>
            <AddCircleSVG width={60} height={60} stroke={Colors.greenText} />
            <View style={styles.blurBackground} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addIcon: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        zIndex: 10,
        borderRadius: Radius.r50,
    },
    blurBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: Radius.r50,
        zIndex: -1,
    },
});

export default AddExpenseButton;
