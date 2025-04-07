import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setAvatar, setName, setEmail } from '../store/slices/userSlice';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from '../components/UI/Input';
import BackButtonHeader from '../components/UI/BackButtonHeader';
import SubmitButton from '../components/UI/SubmitButton';
import { Colors, Padding, Radius, MarginBottom } from '../styles/tokens';
import { useImagePicker } from '../hooks/useImagePicker';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { avatar, name, email } = useSelector((state: RootState) => state.user);
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const [newAvatar, setNewAvatar] = useState(avatar);

    const { pickImage } = useImagePicker();

    const handlePickImage = async () => {
        const uri = await pickImage();
        if (uri) {
            setNewAvatar(uri);
        }
    };

    const isChanged = newName !== name || newEmail !== email || newAvatar !== avatar;

    const handleSave = () => {
        dispatch(setName(newName));
        dispatch(setEmail(newEmail));
        dispatch(setAvatar(newAvatar));
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <BackButtonHeader />
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <View style={styles.avatarContainer}>
                        <TouchableOpacity style={styles.avatarWrapper} onPress={handlePickImage}>
                            {newAvatar ? (
                                <>
                                    <Image source={{ uri: newAvatar }} style={styles.avatar} />
                                    <View style={styles.overlayIcon}>
                                        <Ionicons name="images-outline" size={40} color={Colors.greenText} />
                                    </View>
                                </>
                            ) : (
                                <View style={styles.avatarPlaceholder}>
                                    <Ionicons name="add-outline" size={40} color={Colors.greenText} />
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <Input placeholder="Your name" value={newName} onChangeText={setNewName} style={styles.inputGap} />
                        <Input placeholder="you@example.com" value={newEmail} onChangeText={setNewEmail} style={styles.inputGap} />
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <SubmitButton onPress={handleSave} text="Save Profile" disabled={!isChanged} style={{ opacity: isChanged ? 1 : 0.3 }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: Padding.p20,
        justifyContent: 'space-between',
    },
    headerContainer: {
        width: '100%',
        marginLeft: 16,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    content: {
        marginHorizontal: 20,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: Padding.p20,
    },
    avatarWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: Colors.greenText,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    overlayIcon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    avatarPlaceholder: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        marginTop: Padding.p20,
    },
    inputGap: {
        marginBottom: MarginBottom.mb10,
    },
    buttonContainer: {
        marginBottom: 36,
        marginHorizontal: 20,
    },
});

export default ProfileScreen;
