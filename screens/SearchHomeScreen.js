import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import ResturantCard from '../components/ResturantCard';
import ResturantItemCard from '../components/ResturantItemCard';

const SearchHomeScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container} >

      <AppHeader isMainScreen={true} />

      <View style={styles.topPart}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Search</Text>
          <TouchableOpacity style={styles.filters}>
            <AntDesign name="filter" size={24} color="#002B5B" />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={24} color="#002B5B" style={styles.searchIcon} />
              <TextInput
                placeholderTextColor="rgba(0, 43, 91, 0.5)"
                style={styles.input}
                placeholder="Search"
                onChangeText={(text) => { setSearchQuery(text) }}
                value={searchQuery}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.subScreen}>
        <>
          <View style={styles.searchRecentlyContainer}>
            <Text style={styles.searchRecentlyText}>Recently Searched</Text>
            <TouchableOpacity style={styles.clear}>
              <Text style={styles.clearText}>Clear all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.Container}>
            <ResturantItemCard itemName={"BBQ Chicken Burger"} brand={"KFC"} />
            <ResturantCard name={"McDonald's"} location={"10565 Bramlea Road, Brampton, ON"} />
            <ResturantCard name={"McDonald's"} location={"10565 Bramlea Road, Brampton, ON"} />
            <ResturantItemCard itemName={"BBQ Chicken Burger"} brand={"KFC"} />
            <ResturantCard name={"McDonald's"} location={"10565 Bramlea Road, Brampton, ON"} />
            <ResturantCard name={"McDonald's"} location={"10565 Bramlea Road, Brampton, ON"} />
            
          </ScrollView>
        </>
      </View>

      <BottomNavbar />
    </View>
  )
}

export default SearchHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topPart: {
    paddingHorizontal: 30,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Manrope-Regular',
    paddingHorizontal: 10,
    fontSize: 30,
    color: '#002B5B',
    fontWeight: 400,
  },
  searchContainer: {
    paddingVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF6F4',
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '100%',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 65,
    color: '#002B5B',
    fontFamily: 'Manrope-Regular',
    color: '#002B5B',
  },
  filters: {
    height: 50,
    backgroundColor: '#FFF6F4',
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    marginStart: 20,
  },
  filterText: {
    color: '#002B5B',
    fontFamily: 'Manrope-Medium',
  },
  subScreen: {
    flex: 1,
  },

  searchRecentlyContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  searchRecentlyText: {
    color: '#002B5B',
    fontFamily: 'Manrope-Medium',
    fontSize: 17,
  },
  clear: {
    marginRight: 12,
  },
  clearText: {
    fontFamily: 'Manrope-Medium',
    textTransform: 'uppercase',
    fontSize: 11,
    color: '#F86F03',
  },
  Container: {
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: '#FAFAFA',
    paddingBottom: 90,
  },
  

})