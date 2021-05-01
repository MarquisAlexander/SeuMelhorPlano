import React, {useEffect, useState} from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import api from '../services/api';
// import { Marker } from 'react-native-maps';

export default function App({route}) {
  
  const infoLocationUser = route.params.coords;
  const [empresas, setEmpresas] = useState(false);

  useEffect(() => {
    api.get('api/options', {params: {
      lat: infoLocationUser.latitude,
      lon: infoLocationUser.longitude
    }}).then((resp) => {
      console.log('RESP SERVIDOR', resp.data)
      setEmpresas(resp.data)
      console.log('MEU ARRAY', empresas.list)
    }).catch((err) => {
      console.log('erro ao pegar lista de empresas', err)
    })
  },[])

  {empresas ? 
    empresas.list.map((item) => {
      console.log('determinadas infos',item)
    })
  :
    null
  }

  
  return (
    <View style={styles.container}>
      <MapView  
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          latitude: infoLocationUser.latitude,
          longitude: infoLocationUser.longitude,
        }}
      >
      <Marker
        coordinate={{
          latitude: infoLocationUser.latitude,
          longitude: infoLocationUser.longitude
        }}
        title='Estou bem aqui'
        // description={marker.description}
      />
      {empresas ? 
        empresas.list.map((item) => (
          <Marker
            coordinate={{
              latitude: item.coords.lat,
              longitude: item.coords.lon
            }}
            pinColor={
              item.type === 'TV' && '#32B768'||
              // item.type === 'BROADBAND' && '#000000' ||
              item.type === 'LANDLINE' && '#0074D0'
              // item.type === 'ADDON' && '#5C6660'
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