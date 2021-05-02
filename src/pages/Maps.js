import React, {useEffect, useState} from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import api from '../services/api';

export function Maps({route}) {
  
  const [empresas, setEmpresas] = useState(false);

  console.log('informações que cegaram na rota do map pelo route', route)

  const locationUser = route.params.infoLocationUser;
  const locationPlans = route.params.plans;
  const pinColor = '#000000';
  console.log('informações de localização dos planos', locationPlans)
  
  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: locationUser.latitude,
          longitude: locationUser.longitude,
        }}
      >
      <Marker
        coordinate={{
          latitude: locationUser.latitude,
          longitude: locationUser.longitude
        }}
        title='Estou bem aqui'
      />
      {locationPlans ? 
        locationPlans.map((item) => (
          <Marker
            coordinate={{
              latitude: item.coords.lat,
              longitude: item.coords.lon
            }}
            pinColor={
              item.type === 'TV' && '#32B768'|| //verde
              item.type === 'LANDLINE' && '#0074D0' ||//azul
              item.type === 'BROADBAND' && 'red' ||
              item.type === 'ADDON' && 'linen'
            }
            title='Estou bem aqui'
          />
        ))
      :
        null
      }
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});