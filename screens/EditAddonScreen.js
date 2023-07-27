import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, } from 'react-native'
import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import BottomNavbar from '../components/BottomNavbar'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import ResturantCard from '../components/ResturantCard';
import ResturantItemCard from '../components/ResturantItemCard';
import ResturantWithPricesCard from '../components/ResturantWithPricesCard';

const EditAddonScreen = ({ navigation }) => {

    const [selectedOption, setSelectedOption] = useState(null)

    const RadioButton = ({ label, selected, onPress }) => (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
            <View style={styles.optionTextContainer}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>{label}</Text>
            </View>
            <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
                {selected && <View style={styles.radioButtonInner} />}
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container} >

            <AppHeader isMainScreen={false} />

            <View style={styles.itemContainer} >
                <View style={styles.itemHeadingContainer}>
                    <Text style={styles.heading}>Drinks</Text>
                    <Text style={styles.subHeading}>Edit Juice</Text>
                </View>
                <View style={styles.requiredContainer}>
                    <Text style={styles.required}>REQUIRED</Text>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <ScrollView style={styles.ScrollViewStyles} contentContainerStyle={styles.ScrollViewContainer} >
                    <View style={styles.option}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../assets/redJuice.png')} />
                        </View>
                        <View style={{ width: '80%' }}>
                            <RadioButton
                                label="Fruit Punch Juice"
                                selected={selectedOption === 'Fruit Punch Juice'}
                                onPress={() => setSelectedOption('Fruit Punch Juice')}
                            />
                        </View>
                    </View>
                    <View style={styles.option}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../assets/orangeJuice.png')} />
                        </View>
                        <View style={{ width: '80%' }}>
                            <RadioButton
                                label="Orange Juice"
                                selected={selectedOption === 'Orange Juice'}
                                onPress={() => setSelectedOption('Orange Juice')}
                            />
                        </View>
                    </View>
                    <View style={styles.option}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../assets/guavaJuice.png')} />
                        </View>
                        <View style={{ width: '80%' }}>
                            <RadioButton
                                label="Sweet Guava Juice"
                                selected={selectedOption === 'Sweet Guava Juice'}
                                onPress={() => setSelectedOption('Sweet Guava Juice')}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign name="checkcircle" style={{}} size={20} color="#fff" />
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditAddonScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    itemContainer: {
        height: 78,
        backgroundColor: '#EFF2F5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 18,
    },
    subHeading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: '#6A798A',
    },
    required: {
        fontFamily: 'Manrope-Medium',
        fontSize: 11,
        color: '#28B996',
    },
    ScrollViewStyles: {
        paddingHorizontal: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    optionTextContainer: {
        width: '85%',
    },
    optionText: {
        fontFamily: 'Manrope-Regular',
    },
    imageContainer: {
        width: '15%',
    },
    image: {
        width: 45,
        height: 45,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    radioButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#D5DEE7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonSelected: {
        borderColor: '#292D32',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#292D32',
    },
    radioButtonLabel: {
        fontSize: 16,
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#292D32',
        width: '80%',
        height: 50,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Manrope-Medium',
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
    }
})