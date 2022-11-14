import {StatusBar} from "expo-status-bar"
import {StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import {useState} from "react";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import {getPendingResultAsync} from "expo-image-picker";

const PlaceHolderImage = require('./assets/images/background-image.jpeg');

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null)
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
        } else {
            alert('You did not select any image.')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceHolderImage} selectedImage={selectedImage}></ImageViewer>
            </View>
            <View style={styles.footerContainer}>
                <Button label={"Choose a photo"} theme={'primary'} onPress={pickImageAsync}></Button>
                <Button label={"Use this photo"} theme={null} onPress={null}></Button>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#25292e',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            flex: 1,
            paddingTop: 50
        },
        image: {
            width: 320,
            height: 440,
            borderRadius: 18
        },
        footerContainer: {
            flex: 1 / 3,
            alignItems: 'center'
        }
    }
);
