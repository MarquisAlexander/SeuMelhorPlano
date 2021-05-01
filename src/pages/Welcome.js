import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView
} from 'react-native';

const {height, width} = Dimensions.get('window');

export function Welcome({navigation}) {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.text}>Meu Plano</Text>
                    <Text style={styles.description}>Bem vindo! {'\n'}Aqui podemos escolher os melhores planos para você, e tudo com poucos toques</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.containerButton}
                        onPress={() => navigation.navigate('Notifications')}
                    >
                        <Text style={styles.textButton}>Procurar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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
text: {
    color: '#52665A',
    fontSize: 48, 
    marginTop: 20,
},
containerTitle: {
    alignItems: 'center',
    paddingHorizontal: (width * 2) / 100,
},
description: {
    fontSize: 14,
    color: '#52665A',
    textAlign: 'center'
}
})