import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    font: 36,
    backgroundColor: "#FFF6F4",
  },
  heading: {
    paddingHorizontal: 10,
    fontSize: 36,
    color: "#292D32",
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: 42,
    letterSpacing: -1.8,
  },
  Contentfirstrow: {
    color: "#292D32",
    fontSize: 21,
    fontWeight: 500,
    lineHeight: 24,
    letterSpacing: -0.21,
  },
  headingcontent: {
    paddingHorizontal: 5,
    fontSize: 14,
    color: "#292D32",
  },
  headingcontentrow: {
    marginTop: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  searchinput: {
    display: "flex",
    width: 348,
    paddingTop: 14,
    paddingRight: 13,
    paddingBottom: 14,
    paddingLeft: 13,
    alignItems: "center",
    gap: 10,
  },
  rowcontenttype1: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#F4739E",
  },
  rowcontenttype1text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: -0.14,
  },
  rowcontenttype2: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#A66BF2",
  },
  rowcontenttype2text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: -0.14,
  },
  rowcontenttype3: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#4EB194",
  },
  rowcontenttype3text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: -0.14,
  },

  rowcontenttype4: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#BEC05D",
  },
  rowcontenttype4text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: -0.14,
  },

  rowcontenttype5: {
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: "#EA865B",
  },
  rowcontenttype5text: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    letterSpacing: -0.14,
  },
});

const RestaurantSearch = () => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}> Search McDonald's</Text>
      <View style={styles.headingcontentrow}>
        <Image source={require("../assets/location.png")} />
        <Text style={styles.headingcontent}>Bremlea & SandalWood</Text>
      </View>
      <View>
        <TextInput
          style={styles.searchinput}
          type="text"
          placeholder="Search here"
        />
      </View>
      <View>
        <Text style={styles.Contentfirstrow}>Popular KeyWords</Text>
      </View>
      <View>
        <View style={styles.rowcontenttype1}>
          <Text style={styles.rowcontenttype1text}>Jain</Text>
        </View>
        <View style={styles.rowcontenttype2}>
          <Text style={styles.rowcontenttype2text}>Marathi</Text>
        </View>
        <View style={styles.rowcontenttype3}>
          <Text style={styles.rowcontenttype3text}>Hash Browns</Text>
        </View>
        <View style={styles.rowcontenttype4}>
          <Text style={styles.rowcontenttype4text}>Happy Meal</Text>
        </View>
        <View style={styles.rowcontenttype5}>
          <Text style={styles.rowcontenttype5text}>
            Grilled Chicken Sandwich
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantSearch;
