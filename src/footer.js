import React from 'react';
import { View, Text, Image } from 'react-native';

const images = [
  { uri: require('../assets/images/feuille.png'), id: '1' },
  { uri: require('../assets/images/feuille.png'), id: '2' },
  { uri: require('../assets/images/feuille.png'), id: '3' },
  { uri: require('../assets/images/feuille.png'), id: '4' },
  { uri: require('../assets/images/feuille.png'), id: '5' },
];

const MyScreen = () => {
  return (
    <View>
        {images.map(({ uri, id }) => (
          <Image key={id} source={ uri } style={{ width: 100, height: 100, margin: 10 }} />
        ))}
    </View>
  );
};