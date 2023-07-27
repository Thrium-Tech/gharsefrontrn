import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import AppHeader from "../components/AppHeader";
import { Ionicons } from '@expo/vector-icons';


const RestaurantSearch = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={[styles.container]}>
      <AppHeader isMainScreen={false} />
      <View style={[styles.headingContainer]}>
        <Text style={styles.heading}> Search McDonald's</Text>
        <View style={styles.headingcontentrow}>
          <Ionicons name="location-outline" size={16} color="#292D32" />
          <Text style={styles.headingcontent}>Bremlea & SandalWood</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={24} color="#45B8E9" style={styles.searchIcon} />
            <TextInput
              placeholderTextColor="#B3BFCB"
              style={styles.input}
              placeholder="Search Food, Restaurant etc."
              onChangeText={(text) => { setSearchQuery(text) }}
              value={searchQuery}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.keywordContainer} >
          <Text style={styles.Contentfirstrow}>Popular KeyWords</Text>
        </View>
        <View style={styles.keywords} >
          <TouchableOpacity style={[styles.keywordView, { backgroundColor: '#F4739E' }]}>
            <Text style={styles.keywordText}>Jain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keywordView, { backgroundColor: '#A66BF2' }]}>
            <Text style={styles.keywordText}>Marathi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keywordView, { backgroundColor: '#4EB194' }]}>
            <Text style={styles.keywordText}>Hash Browns</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keywordView, { backgroundColor: '#BEC05D' }]}>
            <Text style={styles.keywordText}>Happy Meal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keywordView, { backgroundColor: '#EA865B' }]}>
            <Text style={styles.keywordText}>Grilled Chicken Sandwich</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headingContainer: {
    paddingHorizontal: 20,
  },
  headingcontent: {
    paddingHorizontal: 5,
    fontSize: 12,
    color: "#292D32",
  },
  heading: {
    fontSize: 28,
    color: "#292D32",
    fontFamily: 'Manrope-Regular',
    fontStyle: "normal",
    lineHeight: 42,
    letterSpacing: -1.8,
  },
  searchContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF2F5',
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 55,
    fontFamily: 'Manrope-Regular',
    color: '#002B5B',
  },
  keywordContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headingcontentrow: {
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
  Contentfirstrow: {
    color: "#292D32",
    fontSize: 19,
    fontFamily: 'Manrope-Medium',
  },
  keywords: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keywordView: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 30,
  },
  keywordText: {
    color: '#fff',
    fontFamily: 'Manrope-Medium',
    fontSize: 12,
  },

});


export default RestaurantSearch;
