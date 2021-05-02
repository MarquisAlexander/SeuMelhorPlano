import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
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