import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import {Button} from '../../components/Button';

export function Welcome({navigation}) {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.text}>Meu Plano</Text>
                    <Text style={styles.description}>Bem vindo! {'\n'}Aqui podemos escolher os melhores planos para você, e tudo com poucos toques</Text>
                </View>
                <Button 
                    title='Procurar'
                    onPress={() => navigation.navigate('Notifications')}
                />
            </SafeAreaView>
        </>
    )
}