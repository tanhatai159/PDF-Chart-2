import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    country: {
        width: '60%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    report: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    size: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    }
  });

  const CountryTableHeader = () => (
    <View style={styles.container} fixed>
        <Text style={styles.country}>Country</Text>
        <Text style={styles.report}>Report</Text>
        <Text style={styles.size}>Size</Text>
    </View>
  );

  export default CountryTableHeader