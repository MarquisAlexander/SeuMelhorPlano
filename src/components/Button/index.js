import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const Button = ({navigation,title, onPress}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Essa é a sua localização, estamos obtendo os melhores planos para você</Text>
        <Text style={styles.paragraph}>{title}</Text>
      </View>
      <TouchableOpacity 
        style={styles.containerButton}
        onPress={() => navigation.navigate(onPress)}
      >
          <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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

export default Button;