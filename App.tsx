import * as React from 'react';

import {Button, Text, View} from 'react-native';

import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import Pages from './src/enum/Pages';
import Sqli from './src/pages/Sqli';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// function HomeScreen({navigation}: any) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({navigation}: any) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Pages.HOME}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Pages.SQLI}
          component={Sqli}
          options={{title: 'SQL Injection'}}
        />
        <Stack.Screen name={Pages.XSS} component={Sqli} />
        <Stack.Screen name={Pages.XXE} component={Sqli} />
        <Stack.Screen name={Pages.LFI} component={Sqli} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
