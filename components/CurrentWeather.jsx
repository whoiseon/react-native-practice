import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

function CurrentWeather() {
  return (
    <View style={styles.container}>
      <View style={styles.weather}>
        <View style={styles.weatherInfo}>
          <Text style={styles.tempText}>18°</Text>
          <Text style={styles.descriptionText}>맑음</Text>
        </View>
        <View style={styles.weatherIcon}>
          <Text>🎉</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20,
  },
  weather: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherInfo: {},
  weatherIcon: {},
  tempText: {
    color: "#ececec",
    marginTop: 48,
    fontSize: 72,
    fontWeight: "700",
  },
  descriptionText: {
    color: "#999",
    fontSize: 20,
  },
});

export default CurrentWeather;
