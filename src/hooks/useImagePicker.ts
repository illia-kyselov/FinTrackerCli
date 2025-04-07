import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import { Alert } from 'react-native';

export const useImagePicker = () => {
    const pickImage = async (): Promise<string | null> => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            quality: 0.7,
        };

        try {
            const result = await launchImageLibrary(options);
            console.log('ImagePicker result:', result);

            if (result.didCancel) {
                return null;
            }
            if (result.errorCode) {
                Alert.alert('Error', result.errorMessage ?? 'Error');
                return null;
            }
            if (result.assets && result.assets.length > 0) {
                return result.assets[0].uri ?? null;
            }
            return null;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    };

    return { pickImage };
};
