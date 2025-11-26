import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { themeColors } from "../theme";

export default function NotificationsScreen() {
  const notifications = [
    {
      id: 1,
      title: "USD/TL Güncellemesi",
      message: "Dolar 32.15 seviyesine yükseldi.",
      time: "5 dakika önce",
      icon: "trending-up" as const,
      color: "#00C853",
    },
    {
      id: 2,
      title: "Altın Fiyatı Düştü",
      message: "Gram altın 0.45% oranında geriledi.",
      time: "20 dakika önce",
      icon: "arrow-downward" as const,
      color: "#D50000",
    },
    {
      id: 3,
      title: "EUR/TL Bilgilendirmesi",
      message: "Euro 34.52 seviyesine çıktı.",
      time: "1 saat önce",
      icon: "euro" as const,
      color: "#2962FF",
    },
    {
      id: 4,
      title: "Piyasa Haberleri",
      message: "Borsa İstanbul'da hareketlilik devam ediyor.",
      time: "2 saat önce",
      icon: "show-chart" as const,
      color: "#FF6D00",
    },
    {
      id: 5,
      title: "Kripto Para Güncellemesi",
      message: "Bitcoin 0.75% oranında değer kazandı.",
      time: "3 saat önce",
      icon: "trending-up" as const,
      color: "#00C853",
    },
    {
      id: 6,
      title: "Döviz Kuru Uyarısı",
      message: "Sterlin 38.10 seviyesine geriledi.",
      time: "4 saat önce",
      icon: "arrow-downward" as const,
      color: "#D50000",
    },
    {
      id: 7,
      title: "Piyasa Analizi",
      message: "Uzmanlardan önemli piyasa yorumları.",
      time: "6 saat önce",
      icon: "insights" as const,
      color: "#AA00FF",
    },
    {
      id: 8,
      title: "Ekonomi Haberleri",
      message: "Merkez Bankası faiz kararını açıkladı.",
      time: "8 saat önce",
      icon: "account-balance" as const,
      color: "#2962FF",
    },
    {
      id: 9,
      title: "Yatırım Fırsatları",
      message: "Yeni yatırım araçları portföyünüze eklendi.",
      time: "10 saat önce",
      icon: "add-chart" as const,
      color: "#FF6D00",
    },
    {
      id: 10,
      title: "Piyasa Kapanışı",
      message: "Borsa İstanbul günü yükselişle tamamladı.",
      time: "12 saat önce",
      icon: "trending-up" as const,
      color: "#00C853",

    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bildirimler</Text>

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {notifications.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.row}>
              <View style={[styles.iconContainer, { backgroundColor: item.color + "20" }]}>
                <MaterialIcons name={item.icon} size={26} color={item.color} />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardMessage}>{item.message}</Text>
                <Text style={styles.cardTime}>{item.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bgPrimary,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1D1B20",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    alignItems: "flex-start",
  },
  iconContainer: {
    padding: 12,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1D1B20",
  },
  cardMessage: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  cardTime: {
    fontSize: 12,
    color: "#777",
    marginTop: 6,
  },
});
