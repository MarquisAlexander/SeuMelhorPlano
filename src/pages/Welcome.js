import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function Welcome({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.containerButton}
                onPress={() => navigation.navigate('Notifications')}
            >
                <Text style={styles.textButton}>Pegar localização</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
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
})