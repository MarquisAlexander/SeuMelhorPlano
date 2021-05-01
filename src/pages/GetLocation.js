import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import * as Location from 'expo-location';

const {height, width} = Dimensions.get('window');

export default function GetLocation({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coords, setCoords] = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      console.log(location)
      {location &&
        setCoords(location.coords);
        console.log('já estou com as coordenadas',location.coords)
      }


    })();
  }, []);

  let text = 'Obtendo localicação';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Essa é a sua localização, estamos obtendo os melhores planos para você</Text>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
      <TouchableOpacity 
        style={styles.containerButton}
        onPress={() => navigation.navigate('Offers', {coords})}
      >
          <Text style={styles.textButton}>Obter promoções</Text>
      </TouchableOpacity>
    </View>
  );
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
}); 