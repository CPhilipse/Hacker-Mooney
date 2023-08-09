import {Text, View} from 'react-native';

import HackerText from '../../components/HackerText';
import React from 'react';
import styles from './sqli.style';

interface Props {
  navigation: any;
}

const Sqli = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <HackerText />
      <Text style={styles.desc}>
        Om een website te laten werken met een inlogsysteem, zit er een systeem
        achter de website genaamd de back-end. In zo'n back-end kan de database
        geraadpleegd worden om data op te halen dat opgeslagen staat, waaronder
        vaak gebruikergegevens. Het raadplegen van deze gegevens wordt gedaan
        door middel van zogenaamde queries. Dit zijn regels code die tegen de
        computer zeggen om bijvoorbeeld gegevens op te halen of gegevens in de
        database te zetten. Wanneer je als gebruiker probeert in te loggen op
        een website, dan is er een query dat uitgevoerd wordt om te kijken of je
        in hun database staat opgeslagen. Een bekend voorbeeld van SQL Injection
        is om door middel van zo'n inlogveld de query zo aan te passen dat jij
        als 'hacker' zelfgemaakte queries kan uitvoeren. Wanneer dit mogelijk
        is, kan de hacker gegevens ophalen uit de database en relatief
        gemakkelijk toegang krijgen tot het systeem.
      </Text>
    </View>
  );
};

export default Sqli;
