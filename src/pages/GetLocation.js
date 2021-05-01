import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';

const {height, width} = Dimensions.get('window');

export function GetLocation({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
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
      setErrorMsg('Permission to access location was denied');
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
      <TouchableOpacity
        disabled={loading}
        style={[styles.containerButton, {opacity: loading ? 0.5 : 1}]}
        onPress={() => navigation.navigate('Offers', {coords})}
      >
          <Text style={styles.textButton}>Ver promoções</Text>
      </TouchableOpacity>
    </View>
  );
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
    justifyContent: 'center',
},
textButton: {
    color: '#fff'
},
containerTitle: {
  alignItems: 'center',
  paddingHorizontal: (width * 2) / 100,
},
text: {
  color: '#52665A',
  fontSize: 14, 
  marginTop: 20,
  textAlign: 'center'
},
paragraph: {
    fontSize: 14,
    color: '#52665A',
    textAlign: 'center'
}
}); 