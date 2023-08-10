import {Image, Text, View} from 'react-native';
import {colors, images, metrics} from '../../themes';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from '../../enum/Icons';
import React from 'react';
import styles from './url.style';

interface Props {
  url: string;
}

const Url = ({url}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.urlWrapper}>
        <Text style={styles.url}>{url}</Text>
        {/* <Image source={images.lock} style={styles.lockIcon} /> */}
        <Icon
          name={Icons.LOCK}
          size={metrics.icon.m}
          color={colors.white}
          style={styles.lockIcon}
        />
      </View>
    </View>
  );
};

export default Url;
