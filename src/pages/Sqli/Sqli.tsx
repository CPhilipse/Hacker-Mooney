import {ScrollView, Text, View} from 'react-native';

import Carousel from '../../components/Carousel';
import HackerText from '../../components/HackerText';
import React from 'react';
import Url from '../../components/Url';
import styles from './sqli.style';

interface Props {
  navigation: any;
}

const Sqli = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
      {/* <Url url="https://mooney.com" /> */}
      {/* <HackerText /> */}
      <Text style={styles.title}>Hacken met SQL Injection</Text>
      <Text style={styles.desc}>
        Om een website te laten werken met een inlogsysteem, zit er een systeem
        achter de website genaamd de back-end. In zo'n back-end kan de database
        geraadpleegd worden om data op te halen dat opgeslagen staat, waaronder
        in de meeste gevallen gebruikergegevens. Het raadplegen van deze
        gegevens wordt gedaan door middel van zogenaamde queries. Dit zijn
        regels code die tegen de computer zeggen om bijvoorbeeld gegevens op te
        halen of gegevens in de database te zetten. Wanneer je als gebruiker
        probeert in te loggen op een website, dan is er een query dat uitgevoerd
        wordt om te kijken of je in hun database staat opgeslagen. Een bekend
        voorbeeld van SQL Injection is om door middel van zo'n inlogveld de
        query zo aan te passen dat jij als 'hacker' zelfgemaakte queries kan
        uitvoeren. Wanneer dit mogelijk is, kan de hacker gegevens ophalen uit
        de database en relatief gemakkelijk toegang krijgen tot het systeem.
      </Text>
      <Text style={styles.subTitle}>Een voorbeeld</Text>
      <Text style={styles.desc}>
        Een query kan er op verschillende manieren uitzien afhankelijk van het
        soort opslag (database) dat gebruikt wordt. Wij gaan hier uit van een
        MySQL database. Om alle gebruikers op te halen van de database, kan de
        query er als volgt uitzien:
      </Text>
      {/* TODO: make this query holder its own universal component */}
      <View style={styles.queryHolder}>
        <Text style={styles.query}>select * from user;</Text>
      </View>
      <Text style={[styles.subTitle, {textAlign: 'center'}]}>
        Selecteer een oefening
      </Text>
      <Carousel navigation={navigation} />
    </ScrollView>
  );
};

export default Sqli;
