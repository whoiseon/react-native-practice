import { StyleSheet, ScrollView, Dimensions, View, Text } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

function WeatherList() {
  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.timeText}>10시</Text>
        <Text style={styles.weatherIcon}>Sun</Text>
        <Text style={styles.tempText}>16°</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.timeText}>10시</Text>
        <Text style={styles.weatherIcon}>Sun</Text>
        <Text style={styles.tempText}>16°</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.timeText}>10시</Text>
        <Text style={styles.weatherIcon}>Sun</Text>
        <Text style={styles.tempText}>16°</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.timeText}>10시</Text>
        <Text style={styles.weatherIcon}>Sun</Text>
        <Text style={styles.tempText}>16°</Text>
      </View>
      <View style={[styles.card, styles.cardLast]}>
        <Text style={styles.timeText}>10시</Text>
        <Text style={styles.weatherIcon}>Sun</Text>
        <Text style={styles.tempText}>16°</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  card: {
    width: SCREEN_WIDTH / 4,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    marginLeft: 20,
    paddingVertical: 16,
    borderRadius: 20,
  },
  cardLast: {
    marginRight: 20,
  },
  timeText: {
    color: "#999",
  },
  weatherIcon: {
    color: "#999",
  },
  tempText: {
    color: "#999",
  },
});

export default WeatherList;
