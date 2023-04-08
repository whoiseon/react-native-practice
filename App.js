import { StatusBar } from "expo-status-bar";
import getCurrentDate from "./lib/getCurrentDate";
import CurrentWeather from "./components/CurrentWeather";
import WeatherList from "./components/WeatherList";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <CurrentWeather />
        <WeatherList />
        <View style={styles.testView}></View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
  },
  main: {
    flex: 1,
    marginTop: -16,
  },
  testView: {
    flex: 2,
  },
});
