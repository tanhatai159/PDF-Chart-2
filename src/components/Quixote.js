import React from 'react';
import { Page, StyleSheet, Font, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    padding: 10
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row"
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderColor: '#bfbfbf',
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    // borderTopWidth: 0
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0
  },
  textHeader: {
    margin: "auto",
    margin: 5,
    fontSize: 12,
    fontWeight: 500
  },
  textCell: {
    margin: "auto",
    margin: 5,
    fontSize: 10
  }
});

const Quixote = ({ Data }) => {
  const quixoteRows = Data.items.map(item =>
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.textCell}>{item.product}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.textCell}>{item.type}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.textCell}>{item.period}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.textCell}>{item.price}</Text>
      </View>
    </View>
  )

  return (
    <Page style={styles.body}>
      <View style={styles.table}>
        {/* =============== Header =============== */}
        <View style={styles.tableRow} fixed>
          <View style={styles.tableColHeader}>
            <Text style={styles.textHeader}>Product</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.textHeader}>Type</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.textHeader}>Period</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.textHeader}>Price</Text>
          </View>
        </View>
        {/* =============== Body =============== */}
        {quixoteRows}
      </View>
    </Page>
  )
}

export default Quixote