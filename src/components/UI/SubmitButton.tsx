import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, FontSize, Padding, Radius } from '../../styles/tokens';

interface SubmitButtonProps {
    onPress: () => void;
    text: string;
    disabled?: boolean;
    style?: ViewStyle;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, text, disabled = false, style }) => {
    return (
        <TouchableOpacity
            style={[styles.addButton, disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.addButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: Colors.greenText,
        paddingVertical: Padding.p10,
        paddingHorizontal: Padding.p20,
        borderRadius: Radius.r10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabled: {
        opacity: 0.3,
    },
    addButtonText: {
        color: Colors.black,
        fontSize: FontSize.fs16,
        fontWeight: '700',
    },
});

export default SubmitButton;
