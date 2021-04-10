import React from "react";
import { colors, text } from "./styles";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import Header from "./Invoice/Header";
import Table from "./Invoice/Table";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  box1: {
    position: "absolute",
    top: 0,
    right: 0,
    height: 50,
    width: 50,
    backgroundColor: colors.brand,
  },
  box2: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 50,
    width: 50,
    backgroundColor: colors.brand,
  },
});

function SamplePage() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* the two boxes found on the upperest-right corner and lowest-left */}
        <View style={styles.box1} />
        <View style={styles.box2} />
        <Header />
        <Table />
      </Page>
    </Document>
  );
}

export default SamplePage;
