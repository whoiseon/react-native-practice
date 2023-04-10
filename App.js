import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import getCurrentDate from "./lib/getCurrentDate";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { API_KEY } from "@env";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);

  const getPermission = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
  };

  const ApiCurrentWeather = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    return response;
  };

  const getWeather = async () => {
    await getPermission();

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: 5,
    });

    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      {
        useGoogleMaps: false,
      }
    );

    setCity(location[0].city);

    const response = await ApiCurrentWeather(latitude, longitude);
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
        <Text style={styles.date}>{getCurrentDate()}</Text>
      </View>
      <ScrollView
        style={styles.weather}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 36,
    fontWeight: "500",
    color: "white",
  },
  date: {
    color: "white",
    fontSize: 20,
    marginTop: 8,
  },
  weather: {},
  day: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 158,
    color: "white",
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
});
