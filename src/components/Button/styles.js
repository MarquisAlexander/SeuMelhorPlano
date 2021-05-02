import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerButton: {
        backgroundColor: "#32B768",
        height: (height * 10) / 100,
        width: (width * 90) / 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#fff'
    },
}); 