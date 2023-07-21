import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppHeader from '../components/AppHeader'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MealScreen = ({ navigation }) => {

    const [isExpanded1, setIsExpanded1] = useState(null)
    const [isExpanded2, setIsExpanded2] = useState(null)
    const [isExpanded3, setIsExpanded3] = useState(null)

    const [isFavorite, setIsFavorite] = useState(null);

    const [count, setCount] = useState(1)

    const [selectedOption1, setSelectedOption1] = useState(null)
    const [selectedOption2, setSelectedOption2] = useState(null)

    const [display1] = useState(new Animated.Value(0));
    const [display2] = useState(new Animated.Value(0));
    const [display3] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(display1, {
            toValue: isExpanded1 ? 1 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [isExpanded1, display1]);

    useEffect(() => {
        Animated.timing(display2, {
            toValue: isExpanded2 ? 1 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [isExpanded2, display2]);

    useEffect(() => {
        Animated.timing(display3, {
            toValue: isExpanded3 ? 1 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [isExpanded3, display3]);


    const RadioButton = ({ label, selected, onPress, price }) => (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
            <View style={styles.optionTextContainer}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>{label}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                {selected && <Text style={{ color: '#292D32', fontSize: 11, fontFamily: 'Manrope-Regular', marginRight: 5, }}>{price}</Text>}
                <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
                    {selected && <View style={styles.radioButtonInner} />}
                </View>
            </View>
        </TouchableOpacity>
    );

    const handleCount = (val) => {
        if (val >= 0) setCount(val);
    }

    return (
        <View style={styles.container} >
            <AppHeader navigation={navigation} />
            <View style={styles.upperPart}>
                <View style={styles.imageFoodContainer}>
                    <Image style={styles.foodImage} source={require('../assets/burgerFriesJuice.png')} />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Western BBQ Cheeseburger Meal</Text>
                </View>
            </View>
            <ScrollView style={styles.expandableCompContainer}>
                <View style={styles.expandableComp}>
                    <TouchableOpacity
                        onPress={() => { setIsExpanded1(!isExpanded1); }}
                        style={styles.toggle}
                    >
                        <Text style={styles.toggleText}>Side Item</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={styles.requiredText}>REQUIRED</Text>
                            <View style={styles.iconsContainer}>
                                {isExpanded1 && <Entypo name="minus" size={24} color="#FFFFFF" />}
                                {!isExpanded1 && <Entypo name="plus" size={24} color="#FFFFFF" />}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            backgroundColor: "#ffffff", opacity: display1, height: display1.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 100],
                            }),
                        }}
                    >
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/medFries.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 10, }}>
                                <RadioButton
                                    label="Medium Fries"
                                    selected={selectedOption1 === 'Medium Fries'}
                                    onPress={() => setSelectedOption1('Medium Fries')}
                                    price={'+$2.99'}
                                />
                            </View>
                        </View>

                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/largeFries.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 10, }}>
                                <RadioButton
                                    label="Large Fries"
                                    selected={selectedOption1 === 'Large Fries'}
                                    onPress={() => setSelectedOption1('Large Fries')}
                                    price={'+$2.99'}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </View>
                <View style={styles.expandableComp}>
                    <TouchableOpacity
                        onPress={() => { setIsExpanded2(!isExpanded2); }}
                        style={styles.toggle}
                    >
                        <Text style={styles.toggleText}>Drinks</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={styles.requiredText}>REQUIRED</Text>
                            <View style={styles.iconsContainer}>
                                {isExpanded2 && <Entypo name="minus" size={24} color="#FFFFFF" />}
                                {!isExpanded2 && <Entypo name="plus" size={24} color="#FFFFFF" />}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            backgroundColor: "#ffffff", opacity: display2, height: display2.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 100],
                            }),
                        }}
                    >
                        <View style={styles.option}>
                            <View style={{ width: '100%', paddingStart: 10, }}>
                                <RadioButton
                                    label="Soft Drinks"
                                    selected={selectedOption2 === 'Soft Drinks'}
                                    onPress={() => setSelectedOption2('Soft Drinks')}
                                    price={''}
                                />
                            </View>
                        </View>

                        <View style={styles.option}>
                            <View style={{ width: '100%', paddingStart: 10, }}>
                                <RadioButton
                                    label="Juices"
                                    selected={selectedOption2 === 'Juices'}
                                    onPress={() => setSelectedOption2('Juices')}
                                    price={'+$2.99'}
                                />
                            </View>
                        </View>
                    </Animated.View>
                </View>
                <View style={[styles.expandableComp, { paddingBottom: 80 }]}>
                    <TouchableOpacity
                        onPress={() => { setIsExpanded3(!isExpanded3); }}
                        style={styles.toggle}
                    >
                        <Text style={styles.toggleText}>Edit Cheese Burger</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <View style={styles.iconsContainer}>
                                {isExpanded3 && <Entypo name="minus" size={24} color="#FFFFFF" />}
                                {!isExpanded3 && <Entypo name="plus" size={24} color="#FFFFFF" />}
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            backgroundColor: "#ffffff", flex: 1, opacity: display3, height: display3.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 500],
                            }),
                        }}
                    >
                        <TouchableOpacity style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/bunTop.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Sesame Seed Bun</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <Text style={styles.editText} >Edit</Text>
                                        <AntDesign name="right" style={{ marginStart: 5, }} size={20} color="black" />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/sauce.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>BBQ Sauce</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity onPress={() => handleCount(count - 1)} style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >{count}</Text>
                                        <TouchableOpacity onPress={() => handleCount(count + 1)} style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/beefPatty.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Beef Patty</Text>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.quantityText}>$1.59 ea</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >1</Text>
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/cheese.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Cheese</Text>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.quantityText}>$0.59 ea</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >1</Text>
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/bananaPeppers.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Banana Peppers</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >1</Text>
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/lettuce.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Lettuce</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >1</Text>
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/sauce.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Chipotle Sauce</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.editText} >1</Text>
                                        <TouchableOpacity style={styles.countButtonContainer}>
                                            <Text style={styles.countButton} >+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={require('../assets/bunBot.png')} />
                            </View>
                            <View style={{ width: '80%', paddingStart: 4, }}>
                                <View style={styles.radioButtonContainer}>
                                    <View style={styles.optionTextContainer}>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.optionText}>Sesame Seed Bun</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Animated.View>
                </View>
            </ScrollView>
            <View style={styles.bottomNavBarContainer}>
                <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={[styles.favouritesContainer, isFavorite && {backgroundColor: '#FCD5E2'} ]}>
                    <Ionicons name="heart" size={24} color={isFavorite ? '#F4739E' : '#B3BFCB'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToBagContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center' }} >
                        <Entypo name="shopping-bag" size={18} color="#fff" />
                        <Text style={{color: '#fff', fontSize: 14, fontFamily: 'Manrope-Medium', marginLeft: 10,}}>Add to Bag</Text>
                    </View>
                    <Text style={{fontSize: 13, fontFamily: 'Manrope-Bold', color: '#45B8E9'}}>$6.69</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    upperPart: {
        paddingHorizontal: 20,
    },
    headingContainer: {
        width: '100%',
        // height: 170,
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 30,
    },
    expandableComp: {
        marginVertical: 5,
    },
    toggle: {
        paddingHorizontal: 20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: "#EFF2F5",
        justifyContent: "space-between",
        alignItems: "center"
    },
    toggleText: {
        color: "black",
        fontFamily: 'Manrope-Regular',
        fontSize: 18,
    },
    requiredText: {
        fontFamily: 'Manrope-Medium',
        marginRight: 10,
        fontSize: 11,
        color: '#28B996',
    },
    iconsContainer: {
        backgroundColor: '#B3BFCB',
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
    },
    option: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 5,
    },
    optionTextContainer: {
        width: '62%',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    optionText: {
        fontFamily: 'Manrope-Regular',
    },
    editText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 13,
    },
    quantityText: {
        fontFamily: 'Manrope-Regular',
        fontSize: 13,
        color: '#EA985B'
    },
    countButtonContainer: {
        width: 34,
        height: 34,
        borderRadius: 17,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D3943',
    },
    countButton: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 700,
    },
    imageContainer: {
        width: '20%',
        // aspectRatio: 1, // Set the aspect ratio to 1 (optional)
    },
    image: {
        width: '100%',
        // height: '100%',
        resizeMode: 'contain', // Fit the image inside the container while preserving aspect ratio
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingEnd: 5,
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
        borderColor: '#F4739E',
    },
    radioButtonInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#F4739E',
    },
    radioButtonLabel: {
        fontSize: 16,
    },
    bottomNavBarContainer: {
        position: 'absolute',
        bottom: 0,
        // height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    favouritesContainer: {
        position: 'absolute',
        left: 15,
        bottom: 15,
        backgroundColor: '#EFF2F5',
        height: 50,
        width: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToBagContainer: {
        marginStart: 10,
        paddingHorizontal: 15,
        backgroundColor: '#292D32',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        height: 50,
        borderRadius: 12,
    }

})