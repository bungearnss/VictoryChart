import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  VictoryScatter,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
} from "victory-native";
import { VictoryCustomTheme } from "./src/styles";

const width = Dimensions.get("window").width;
const mock_data = [
  { x: "15", y: "25" },
  { x: "22", y: "24" },
  { x: "27", y: "25" },
  { x: "30", y: "24" },
  { x: "35", y: "32" },
  { x: "40", y: "35" },
  { x: "45", y: "33" },
  { x: "50", y: "37" },
  { x: "55", y: "35" },
  { x: "60", y: "32" },
];

const value = 29452.74;
const percent = -0.72;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Chart */}
      <View style={styles.subContainer}>
        <View style={{ flexDirection: "row", marginLeft: 20, paddingTop: 20 }}>
          <FontAwesome5 name="bitcoin" size={24} color="rgba(245,211,45,1)" />
          <View style={{ justifyContent: "center", paddingLeft: 10 }}>
            <View style={styles.detialView}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Bitcoin</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>${value}</Text>
            </View>
            <View style={styles.detialView}>
              <Text style={{ color: "gray", fontWeight: "bold" }}>BTC</Text>
              {percent > 0 ? (
                <Text
                  style={{ color: "rgba(0,160,160,1)", fontWeight: "bold" }}
                >
                  +{percent}%
                </Text>
              ) : (
                <Text style={{ color: "rgba(255,0,0,1)", fontWeight: "bold" }}>
                  {" "}
                  {percent}%
                </Text>
              )}
            </View>
          </View>
        </View>
        <VictoryChart
          theme={VictoryCustomTheme}
          height={250}
          width={width * 0.9}
        >
          <VictoryLine
            style={{
              data: {
                stroke: "rgba(102,0,204,1)",
                strokeWidth: 3,
              },
              parent: {
                border: "0.5px solid #ccc",
              },
            }}
            data={mock_data}
          />
          <VictoryScatter
            data={mock_data}
            size={6}
            style={{
              data: {
                fill: "rgba(102,0,250,1)",
              },
            }}
          />
          <VictoryAxis
            style={{
              grid: {
                stroke: "transparent",
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              axis: {
                stroke: "transparent",
              },
              grid: {
                stroke: "grey",
              },
            }}
          />
        </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  subContainer: {
    marginTop: -25,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  detialView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.7,
  },
});
