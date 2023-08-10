import {Image, Text, View} from 'react-native';

import React from 'react';
import Url from '../../../../components/Url';
import styles from './candyshop.style';

interface Props {
  navigation: any;
}

const CandyShop = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Url url="https://candyshop.com" />
    </View>
  );
};

export default CandyShop;
