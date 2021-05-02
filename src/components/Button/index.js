import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import {styles} from './styles';

export const Button = ({navigation,title, loading, ...props}) => {

  return (
    <>
      <TouchableOpacity 
        style={styles.containerButton}
        {...props}
      >
      {loading ? 
        <ActivityIndicator color="#fff"/>
      :
        <Text style={styles.textButton}>{title}</Text>
      }
      </TouchableOpacity>
    </>
  );
}