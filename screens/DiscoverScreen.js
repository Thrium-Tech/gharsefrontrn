import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BottomNavbar from '../components/BottomNavbar';
import ResturantItemComponent from '../components/ResturantItemComponent';
import * as Location from 'expo-location';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// import { SvgXml } from 'react-native-svg';
import { Svg, Path, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend, SvgUri, SvgXml } from 'react-native-svg';


const DiscoverScreen = (props) => {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status === 'granted') {
                    const { coords } = await Location.getCurrentPositionAsync({});
                    setLocation(coords);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        })();
    }, []);


    const activePinSvg = `
    <svg width="82" height="85" viewBox="0 0 82 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Rectangle 1163" filter="url(#filter0_d_23_1319)">
        <path d="M14.8433 35.9992C14.8433 21.6402 26.6412 10 41.0001 10C55.3591 10 67.157 21.6402 67.157 35.9992C67.157 43.9949 63.4779 51.5459 57.1813 56.4737L54.0786 58.902L44.9976 65.2192C42.5947 66.8907 39.4055 66.8907 37.0027 65.2192L27.9217 58.902L24.8189 56.4737C18.5223 51.5459 14.8433 43.9949 14.8433 35.9992Z" fill="white"/>
        <path d="M15.3433 35.9992C15.3433 21.9203 26.9134 10.5 41.0001 10.5C55.0869 10.5 66.657 21.9203 66.657 35.9992C66.657 43.8411 63.0487 51.2469 56.8731 56.08L53.7815 58.4995L44.712 64.8087C42.4808 66.3609 39.5194 66.3609 37.2882 64.8087L28.2188 58.4995L25.1271 56.08C18.9515 51.2469 15.3433 43.8411 15.3433 35.9992Z" stroke="#F4739E"/>
      </g>
      <defs>
        <filter id="filter0_d_23_1319" x="0.843262" y="0" width="80.314" height="84.4728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="7"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.955867 0 0 0 0 0.452206 0 0 0 0 0.619925 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_23_1319"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_23_1319" result="shape"/>
        </filter>
      </defs>
    </svg>
    `;

    const pinSvg = `<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="Union" d="M46.3999 23.2051C46.3999 35.9332 36.0818 46.2513 23.3538 46.2513C10.6257 46.2513 0.307617 35.9332 0.307617 23.2051C0.307617 10.4771 10.6257 0.158966 23.3538 0.158966C36.0818 0.158966 46.3999 10.4771 46.3999 23.2051Z" fill="white"/>
    </svg>
    `;

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title="You are here"
                        description="Your current location"
                    >
                        <View style={styles.customMarker}>
                            <Image source={require('../assets/activePinBack.png')} style={styles.svg} />
                            <Image source={require('../assets/mcdonalds.png')} style={styles.markerImage} />
                        </View>
                    </Marker>
                    <Marker
                        coordinate={{ latitude: location.latitude + 0.025, longitude: location.longitude + 0.025 }}
                    >
                        <View style={styles.customMarker}>
                            <Image source={require('../assets/pinBack.png')} style={styles.inactiveSvg} />
                            <Image source={require('../assets/starBucks.png')} style={styles.markerImage} />
                        </View>
                    </Marker>
                    <Marker
                        coordinate={{ latitude: location.latitude + 0.05, longitude: location.longitude - 0.015 }}
                    >
                        <View style={styles.customMarker}>
                            <Image source={require('../assets/pinBack.png')} style={styles.inactiveSvg} />
                            <Image source={require('../assets/starBucks.png')} style={styles.markerImage} />
                        </View>
                    </Marker>
                </MapView>
            )}
            {/* <LinearGradient
                colors={['#FFF', 'rgba(255, 255, 255, 0)']}
                start={[0, 1]}
                end={[0, 0]}
                style={styles.gradientBackground}  > */}
                <View style={styles.header} >
                {/* <View style={{ flex: 1 }}  > */}
                    <Text style={styles.heading}>Discover</Text>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity>
                            <SimpleLineIcons name="magnifier" size={22} color='black' />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <SimpleLineIcons name="handbag" size={22} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </LinearGradient> */}
            <ScrollView
                style={styles.scrollView} horizontal contentContainerStyle={styles.Container}>
                <ResturantItemComponent style={{ marginHorizontal: 5 }} />
                <ResturantItemComponent style={{ marginHorizontal: 5 }} />
                <ResturantItemComponent style={{ marginHorizontal: 5 }} />
                <ResturantItemComponent style={{ marginHorizontal: 5 }} />
            </ScrollView>
            <BottomNavbar screen={'Discover'} />
        </View>
    )
}

export default DiscoverScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Container: {
        position: 'absolute',
        paddingHorizontal: 10,
    },
    scrollView: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        height: 280,
    },
    header: {
        position: 'absolute',
        top: 0,
        paddingTop: 20,
        backgroundColor: 'white',
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // opacity: 0.7,
        // backgroundColor: 'rgba(255, 255, 255, 0)',
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
        position: 'absolute',
        top: 0,
        paddingTop: 20,
        height: 120,
        // backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 20,
    },
    iconsContainer: {
        width: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    },
    customMarker: {
        position: 'relative',
    },
    svg: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 65,
        height: 55,
        transform: [{ translateX: - 21 }, { translateY: - 10 }],
    },
    inactiveSvg: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 45,
        height: 45,
        transform: [{ translateX: - 10 }, { translateY: - 10 }],
    },
    markerImage: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 5,
        left: 1,
        transform: [{ translateX: 6 }, { translateY: 3 }],
    },
})