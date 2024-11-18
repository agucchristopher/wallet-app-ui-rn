import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  // StatusBar,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PortfolioCard from "@/components/PortfolioCard";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar
          backgroundColor={"#270685"}
          style={Platform.OS == "ios" ? "dark" : "light"}
        />
        <PortfolioCard />
        <View style={{ padding: 5, marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontFamily: "Rubik", fontSize: 16 }}>
            Recent Transfers
          </Text>
          <FlatList
            data={[
              "...",
              "Ali",
              "Steve",
              "Ahmed",
              "Grace",
              "Princess",
              "James",
              "Matt",
            ]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }
                    style={{
                      backgroundColor: index === 0 ? "#e6ddff" : "dodgerblue",
                      height: 75,
                      width: 75,
                      borderRadius: 50,
                      marginLeft: index == 0 ? 0 : 10,
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? <Ionicons name="add" size={25} /> : null}
                  </TouchableOpacity>
                  <Text style={{ fontFamily: "Rubik", alignSelf: "center" }}>
                    {index === 0 ? "Add" : item}
                  </Text>
                </View>
              );
            }}
          />
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
