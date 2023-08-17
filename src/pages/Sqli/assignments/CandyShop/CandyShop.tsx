import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import DummyData from '../../../../enum/DummyData';
import HackerText from '../../../../components/HackerText';
import LottieView from 'lottie-react-native';
import React from 'react';
import Url from '../../../../components/Url';
import animations from '../../../../themes/animations';
import styles from './candyshop.style';

interface Props {
  navigation: any;
}

const CandyShop = ({navigation}: Props) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [successfulSqli, onChangeSuccessfulSqli] = React.useState(false);

  const handleSqli = () => {
    if (username.includes('OR 1=1') && password.includes('OR 1=1')) {
      onChangeSuccessfulSqli(true);
    } else {
      onChangeSuccessfulSqli(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <Url url="https://candyshop.com" />
        <LottieView
          style={styles.candyAnimation}
          source={animations.dancing_candy}
          autoPlay
          loop
        />
        <Text style={styles.title}>Inloggen</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Gebruikersnaam"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="*******"
          placeholderTextColor={'#000'}
        />
        <Pressable style={styles.loginCta} onPress={handleSqli}>
          <Text style={styles.inloggenText}>Inloggen</Text>
        </Pressable>

        {/* TODO: make this table its own universal component */}
        {successfulSqli && (
          <View style={styles.wrapper}>
            {/* Table Container */}
            <View style={styles.table}>
              {/* Table Head */}
              <View style={styles.table_head}>
                <View style={{width: '15%'}}>
                  <Text style={styles.table_head_captions}>id</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>username</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>password</Text>
                </View>
                <View style={{width: '30%'}}>
                  <Text style={styles.table_head_captions}>phone</Text>
                </View>
              </View>

              {DummyData.USER_TABLE_ROWS.map(
                ({id, username, password, phone}: any) => (
                  <View style={styles.table_body_single_row}>
                    <View style={{width: '15%'}}>
                      <Text style={styles.table_data}>{id}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{username}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{password}</Text>
                    </View>
                    <View style={{width: '30%'}}>
                      <Text style={styles.table_data}>{phone}</Text>
                    </View>
                  </View>
                ),
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CandyShop;
