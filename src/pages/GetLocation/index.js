import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import {styles} from './styles';
import {Button} from '../../components/Button';


export function GetLocation({navigation}) {
  const [coords, setCoords] = useState();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState();

  useEffect(() => {
    Location.requestForegroundPermissionsAsync().then((resp) => {
      setStatus(resp.status);
      console.log('estados da permissão', resp.status)
      Location.getCurrentPositionAsync({}).then((resp) => {
        console.log('localização do user', resp.coords)
        setCoords(resp.coords);
        setLoading(false);
      });
    });
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    } else {
      console.log('acesso a localização permitido')
    }
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estamos obtendo sua localização para encontrar os melhores planos da região</Text>
      {coords ?
      <>
        <View style={styles.containerTitle}>
          <Text style={styles.paragraph}>{coords.latitude} {coords.longitude}</Text>
        </View>
      </>
      :
        null
      }
      <Button 
        disabled={loading}
        loading={loading}
        style={[styles.containerButton, {opacity: loading ? 0.5 : 1}]}
        title='Ver Promoções'
        onPress={() => navigation.navigate('Offers', {coords})}
      />
    </View>
  );
}