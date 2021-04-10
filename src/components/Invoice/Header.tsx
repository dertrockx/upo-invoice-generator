import React, { ReactElement } from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "./upo-logo.png";

import { colors, text, globals } from "../styles";

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  headerChipContainer: {
    backgroundColor: colors.brand,
    borderBottomLeftRadius: 20,
    padding: 10,
    color: colors.white,
  },
  container: {
    marginTop: 50,
    marginHorizontal: 50,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  headerInputFields: {
    marginTop: 8,
  },
  headerInputLabel: {
    marginBottom: 8,
  },
});

export default function Header(): ReactElement | null {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.headerChipContainer}>
            <Text style={text.header}>INVOICE 1</Text>
          </View>
        </View>
        <Text style={{ ...text.title, marginTop: 8 }}>Invoice to:</Text>
        <View style={{ ...styles.header, marginTop: 8 }}>
          <View style={{ maxWidth: 301 }}>
            <Text style={[text.paragraph, text.alignLeft]}>Ian Salazar</Text>
            <Text
              style={{
                ...text.paragraph,
                ...text.alignLeft,
                marginVertical: 2,
              }}
            >
              Unit G4, Jamac Apartments, Ruby Street, Umali Subdivision,
              Barangay. Batong Malake, Los Banos, Laguna
            </Text>
            <Text style={[text.paragraph, text.alignLeft]}>0961 801 6463</Text>
          </View>
          <View>
            <View
              style={{
                ...globals.inlineContent,
                ...text.alignEnd,
                marginBottom: 8,
              }}
            >
              <Text style={text.subtitle}>Invoice #:</Text>
              <Text
                style={{
                  ...text.subtitle,
                  textDecoration: "underline",
                  marginLeft: 5,
                }}
              >
                UPO-2021-0001
              </Text>
            </View>
            <View style={{ ...globals.inlineContent, ...text.alignEnd }}>
              <Text style={text.subtitle}>Date Issued:</Text>
              <Text
                style={{
                  ...text.subtitle,
                  textDecoration: "underline",
                  marginLeft: 5,
                }}
              >
                04/10/2021
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
