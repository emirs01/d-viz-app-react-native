import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react'

export default function HomeScreen() {

  const [lastUpdate, setLastUpdate] = useState("14:37");

  const topValues = [
    { name: "USD / TRY", value: "34.12 ₺", rate: "+0.22%", color: "green" },
    { name: "EUR / TRY", value: "34.15 ₺", rate: "-0.05%", color: "red" },
    { name: "Altın (gram)", value: "4503 ₺", rate: "+0.42%", color: "green" },
  ];

  const allValues = [
    { name: "GBP / TRY", value: "39.25 ₺", rate: "+0.12%", color: "green" },
    { name: "BTC / TRY", value: "92220 ₺", rate: "-1.22%", color: "red" },
    { name: "ETH / TRY", value: "1820 ₺", rate: "+0.54%", color: "green" },
    { name: "GAU / TRY", value: "4503 ₺", rate: "+0.42%", color: "green" },
    { name: "EUR / USD", value: "1.09", rate: "+0.18%", color: "green" },
  ];

  const refreshData = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    setLastUpdate(`${hours}:${minutes < 10 ? "0" + minutes : minutes}`);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>

        <View style={styles.headerText}>
          <Text style={styles.headerTextStyle}>Döviz Uygulaması</Text>
        </View>
        <View style={styles.refreshIcon}>
          <TouchableOpacity onPress={refreshData}>
            <MaterialIcons name="refresh" size={28} color="#333" />
          </TouchableOpacity>
        </View>

        <View style={styles.renderTimeText}>
          <Text style={styles.renderTimeText2}>Son güncelleme: {lastUpdate}</Text>
        </View>

        {topValues.map((item, index) => (
          <View key={index} style={styles.dolarView}>
            <Text style={styles.dolarText}>{item.name}</Text>
            <Text style={styles.dolarTextNumber}>{item.value}</Text>
            <Text style={[styles.dolarYüzdeNumber, { color: item.color }]}>
              {item.rate}
            </Text>
          </View>
        ))}

        <View style={{ marginTop: 30, alignItems: 'flex-start', marginLeft: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Tüm Değerler</Text>
        </View>

        {allValues.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
            <Text style={styles.listValue}>{item.value}</Text>
            <Text style={[styles.listRate, { color: item.color }]}>{item.rate}</Text>
          </View>
        ))}

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EDF7'
  },
  headerText: {
    padding: 20,
  },
  headerTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  refreshIcon: {
    position: 'absolute',
    top: 20,
    right: 25,
    backgroundColor: '#e9e9e9ff',
    borderRadius: 10,
    padding: 3,
  },
  renderTimeText: {
    alignItems: 'flex-start',
    paddingLeft: 20,
    bottom: 15,
  },
  renderTimeText2: {
    fontSize: 14,
    color: '#666',
  },
  dolarView: {
    width: '90%',
    height: 135,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  dolarText: {
    margin: 15,
    marginLeft: 25,
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
  },
  dolarTextNumber: {
    marginLeft: 25,
    fontSize: 25,
    fontWeight: '700',
  },
  dolarYüzdeNumber: {
    marginLeft: 25,
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },

  listItem: {
    flexDirection: "row",
    width: '90%',
    height: 65,
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
  },
  listText: { 
  fontSize: 15, 
  fontWeight: '500', 
  width: "33%" 
},
  listValue: { 
  fontSize: 15, 
  fontWeight: '800', 
  width: "33%", 
  textAlign: "center" 
},
  listRate: { 
  fontSize: 15, 
  fontWeight: '600', 
  width: "33%",
  textAlign: "right" 
},
});
