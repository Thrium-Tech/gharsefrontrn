import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Animated, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
// import { useFonts } from 'expo-font';
import { supabase } from "../initSupabase";

const ForgotPasswordScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState(false);

    const [fontsLoaded] = useFonts({
        'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
        'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf')
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFF6F4',
        },
        ovalContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        toggleButton: {
            width: '80%',
            height: 50,
            borderRadius: 20,
            backgroundColor: '#FFF6F4',
            overflow: 'hidden',
            justifyContent: 'center',
            position: 'relative',
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 14,
            elevation: 4,
        },
        toggleIndicator: {
            position: 'absolute',
            width: '45%',
            height: '80%',
            backgroundColor: '#002B5B',
            borderRadius: 20,
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 24,
            elevation: 4,
        },
        labelContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        labelToggle: {
            flex: 1,
            marginLeft: 5,
            textAlign: 'center',
            lineHeight: 40,
            color: '#002B5B',
            fontFamily: 'Manrope-Regular',
        },
        activeLabel: {
            color: '#fff',
            // fontWeight: 'bold',
        },
        rectangleBackground: {
            height: '100%',
            resizeMode: 'repeat',
            width: '100%',
            position: 'absolute',
            transform: [{ rotate: '-4deg' }]
        },
        rectangle: {
            overflow: 'hidden',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, .9)',
            alignItems: 'center',
            justifyContent: 'center',
        },
        ellipse: {
            width: 120,
            height: 120,
            borderRadius: 60,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000000',
            backgroundColor: '#FFFFFF',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: .3,
            shadowRadius: 4,
            elevation: 4,
            marginBottom: 40,
        },
        logo: {
            height: 86,
            width: 75,
            marginBottom: 10,
        },
        outterPart: {
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'space-between',
            // flexDirection: 'row',
        },
        Heading: {
            color: '#002B5B',
            fontSize: 26,
            paddingVertical: 5,
        },
        SubHead: {
            fontSize: 13,
            color: '#002B5B',
            fontFamily: 'Manrope-Regular',
        },
        FormPart: {
            marginTop: 15,
        },
        textInput: {
            height: 50,
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: 7,
            paddingHorizontal: 15,
            marginVertical: 10,
        },
        forgetPasswordView: {
            paddingVertical: 5,
            alignItems: 'flex-end',
        },
        forgetPassword: {
            color: '#002B5B',
            textDecorationLine: 'underline',
            fontFamily: 'Manrope-Regular',
        },
        buttonContainer: {
            width: '100%',
            alignItems: 'center',
            marginTop:  10,
        },
        button: {
            width: "100%",
            height: 50,
            borderRadius: 20,
            overflow: 'hidden',
        },
        gradient: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonText: {
            color: '#fff',
            fontSize: 13,
            fontFamily: 'Manrope-Regular',
        },
    });

    const sendOtp = async () => {
        console.log("OTP is called ....");
        setLoading(true);
        console.log(phone);
        const { data, error } = await supabase.auth.resend({
            phone: phone,
            token: otp,
            type: 'sms'
        });
        if (error) {
            setLoading(false);
            alert(error.message);
        }
    }

    if (!fontsLoaded) {
        return <></>;
    }

    return (
        <View style={[styles.container]}>
            {/* <ImageBackground
                source={require('../assets/india.png')}
                resizeMode="repeat"
                style={styles.rectangleBackground}
            > */}
            <View style={{ width: '100%', height: '40%', position: 'relative', overflow: 'hidden', borderRadius: 30, shadowColor: 'rgba(0, 0, 0, .5)', shadowOffset: { width: 0, height: 4 }, shadowOpacity: .5, shadowRadius: 4, elevation: 4}} >
                <Image
                    source={require('../assets/india.png')}
                    style={styles.rectangleBackground}
                // res
                />
                <View style={styles.rectangle}>
                    <View style={styles.ellipse}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                    {/* <View style={styles.ovalContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={handleToggle}
                            style={styles.toggleButton}
                        >
                            <Animated.View
                                style={[styles.toggleIndicator, { left: leftPosition }]}
                            />
                            <View style={styles.labelContainer}>
                                <Text style={[styles.labelToggle, isLogin && styles.activeLabel]}>Login</Text>
                                <Text style={[styles.labelToggle, !isLogin && styles.activeLabel]}>Signup</Text>
                            </View>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
            {/* </ImageBackground> */}
            <View style={styles.outterPart}>
                <View style={styles.headerPart}>
                    <Text style={[{ fontFamily: 'Manrope-Medium' }, styles.Heading]}>Forgot Password</Text>
                    <Text style={styles.SubHead}>You will recive 6 digit OTP in your phone!</Text>
                </View>
                <View style={styles.FormPart}>
                    <Text style={styles.SubHead}>Phone Number</Text>
                    <TextInput
                        placeholder={"Enter your phone number"}
                        onChangeText={(text) => setPhone(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={sendOtp} style={styles.button}>
                        <LinearGradient
                            colors={['#FF4E50', '#F9D423']}
                            start={[0, 0]}
                            end={[1, 0]}
                            style={styles.gradient}
                        >
                            <Text style={styles.buttonText}>Send OTP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;

