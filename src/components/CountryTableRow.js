import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  country: {
    width: '60%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  report: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  size: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  }
});


const CountryTableRow = ({ items }) => {
  const rows = items.map(item =>
    <View style={styles.row} key={item.sno.toString()}>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.report}>{item.report.toString()}</Text>
      <Text style={styles.size}>{item.size.toString()}</Text>
    </View>
  )
  return (<Fragment>{rows}</Fragment>)
};

export default CountryTableRow