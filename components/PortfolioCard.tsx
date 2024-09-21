import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const PortfolioCard = () => {
  return (
    <View style={{ height: 300, backgroundColor: "#270685" }}>
      <View>
        <TouchableOpacity>{/* Image */}</TouchableOpacity>
        <Text style={{ color: "white", fontSize: 50 }}>Hello,</Text>
        <Text>Christopher</Text>
      </View>
    </View>
  );
};

export default PortfolioCard;

const styles = StyleSheet.create({});
