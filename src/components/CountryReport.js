import React from 'react';
import { Page, StyleSheet, Font, View, Text } from '@react-pdf/renderer';
import CountryTableHeader from './CountryTableHeader';
import CountryTableRow from './CountryTableRow';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 29,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
  }
});

const CountryReport = ({ Data }) => (
  <Page size="A4" style={styles.page}>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <View style={styles.tableContainer}>
      <CountryTableHeader/>
      <CountryTableRow items={Data.items} />
    </View>
  </Page>
)

export default CountryReport