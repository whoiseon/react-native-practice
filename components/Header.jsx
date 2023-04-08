import { Text, View, StyleSheet } from "react-native";
import getCurrentDate from "../lib/getCurrentDate";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

function Header() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState(null);
  const [ok, setOk] = useState(true);

  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
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
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.myCity}>{city}</Text>
      <Text style={styles.grayText}>{getCurrentDate()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
    gap: 8,
  },
  myCity: {
    color: "#ececec",
    fontSize: 32,
    fontWeight: "700",
  },
  grayText: {
    color: "#999",
    fontSize: 18,
  },
});

export default Header;
