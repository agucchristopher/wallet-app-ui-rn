import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  View,
  Text,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PortfolioCard from "@/components/PortfolioCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar backgroundColor={"#270685"} barStyle={"light-content"} />
        <PortfolioCard />
        <View style={{ padding: 5, marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontFamily: "Rubik", fontSize: 16 }}>
            Recent Transfers
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
