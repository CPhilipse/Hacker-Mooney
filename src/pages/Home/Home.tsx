// Inspiration: https://dribbble.com/shots/15107351-Grenouille-animation

import * as React from 'react';

import Animated, {
  Easing,
  FadeInRight,
  FadeOut,
  Layout,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MotiText, MotiView} from 'moti';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {colors, images, metrics} from '../../themes';

import Header from './components/Header';
import ListItem from './components/ListItem';
import Lists from './components/Lists';
import Pages from '../../enum/Pages';
import Tabs from './components/Tabs';
import Url from '../../components/Url';
import {faker} from '@faker-js/faker';

interface Props {
  navigation: any;
}

interface TabsProps {
  tabs: any;
  onTabSelect: any;
  activeTab: any;
  style?: any;
}

// Grabbed from https://www.flaticon.com/stickers-pack/karaoke-5
const _icons = [images.sqli, images.hacker_cracked];

faker.seed(2);

const _layout = {
  indicatorWidth: 12,
  indicatorHeight: 50,
  itemWidth: metrics.screenWidth * 0.6,
  itemHeight: metrics.screenWidth * 0.6 * 1.2,
  spacing: 20,
  borderRadius: 16,
  indicatorHeightPercentage: 0.75,
  headingBig: 54,
  headingSmall: 28,
};

const _tabs = ['Reconnaissance', 'Web', 'Privilege Escalation'];
// const _data = _tabs.reduce((acc, item) => {
//   // console.log('TEST: ', acc, ' - ', item);
//   acc[item] = [...Array(10).keys()].map(() => {
//     return {
//       key: faker.string.uuid(),
//       name: faker.music.songName(),
//       image: faker.helpers.arrayElement(_icons),
//     };
//   });

//   console.log(acc['Web']);
//   return acc;
// }, {});

const _data = {
  Reconnaissance: [{key: '1', name: 'Recon 1', image: 1, page: '-'}],
  Web: [
    {key: '1', name: 'SQL Injection', image: 1, page: Pages.SQLI},
    {key: '2', name: 'Local File Inclusion (LFI)', image: 2, page: Pages.LFI},
    {key: '3', name: 'Cross Site Scripting (XSS)', image: 1, page: Pages.XSS},
    {
      key: '4',
      name: 'Server Side Template Injection (SSTI)',
      image: 2,
      page: Pages.SSTI,
    },
    {key: '5', name: 'External Entity Attack (XXE)', image: 1, page: Pages.XXE},
    {key: '6', name: 'Remote File Inclusion (RFI)', image: 2, page: Pages.RFI},
  ],
  'Privilege Escalation': [{key: '1', name: 'Priv 1', image: 1, page: '-'}],
};

// const _data = _tabs.map((tab) => {
//   var lists = [];

//   return
// })

const Home = ({navigation}: Props) => {
  const [activeTab, setActiveTab] = React.useState(_tabs[0]);
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(ev => {
    scrollY.value = ev.contentOffset.y;
  });

  React.useEffect(() => {
    scrollY.value = withTiming(0, {duration: 400});
  }, [activeTab]);

  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <View style={styles.container}>
        <Url url="https://mooney.com" />
        {/* <Header scrollY={scrollY} />
        <View style={{flexDirection: 'row', flex: 1}}>
          <Tabs
            tabs={_tabs}
            onTabSelect={(tab: string) => {
              setActiveTab(tab);
            }}
            activeTab={activeTab}
          />
          <Lists
            activeTab={activeTab}
            data={_data[activeTab]}
            onScroll={onScroll}
            navigation={navigation}
          />
        </View> */}
      </View>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
