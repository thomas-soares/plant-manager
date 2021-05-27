import React from 'react';
import { Text, View } from 'react-native';

import wateringImg from '../assets/watering.png';

export default function Welcome() {
  return (
    <View>
      <Text>
        Gerencie suas plantas de forma fácil
      </Text>
      <Image source={imgWatering} />
    </View>
  );
}
