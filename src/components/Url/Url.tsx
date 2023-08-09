import {Image, Text, View} from 'react-native';

import React from 'react';
import {images} from '../../themes';
import styles from './url.style';

interface Props {
  url: string;
}

const Url = ({url}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.urlWrapper}>
        <Text style={styles.url}>{url}</Text>
        <Image source={images.lock} style={styles.lockIcon} />
      </View>
    </View>
  );
};

export default Url;
