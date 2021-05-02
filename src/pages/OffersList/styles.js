import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    containerCardOffer: {
        backgroundColor: "#32B768",
        marginHorizontal: 5,
        borderRadius: 5,
        padding: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    loadingPage: {
        marginTop: (height * 50) / 100
    }
})