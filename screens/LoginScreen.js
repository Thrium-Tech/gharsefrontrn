import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Animated, ActivityIndicator, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
// import { useFonts } from 'expo-font';
import { supabase } from "../initSupabase";
import { OtplessEventModule } from 'otpless-react-native';

const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confimPassword, setConfimPassword] = useState("");

    const [isLogin, setIsLogin] = useState(true);
    const toggleAnim = useRef(new Animated.Value(0)).current;

    const [fontsLoaded] = useFonts({
        'Manrope-Regular': require('../assets/fonts/Manrope-Regular.ttf'),
        'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf')
    });

    const handleToggle = () => {
        setIsLogin(!isLogin);
        setLoading(false);
        Animated.timing(toggleAnim, {
            toValue: isLogin ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const leftPosition = toggleAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 150],
    });


    const eventModule = new OtplessEventModule((data) => {
        let message = '';
        console.log("===================================================");
        console.log(data);
        if (data.data === null || data.data === undefined) {
         message = data.errorMessage;
        } else {
         message =`token: ${data.data.token}`;
         // todo here
        }
    });

    useEffect(()=>{
        eventModule.start();
    },[])

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
            flex: 1,
        },
        rectangle: {
            height: '40%',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            shadowColor: 'rgba(0, 0, 0, 1)',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 14,
            elevation: 4,
            borderRadius: 30,
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
            marginTop: isLogin ? 30 : 15,
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
            marginTop: isLogin ? 52 : 10,
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

    const login = async () => {
        console.log("Login is called ....");
        setLoading(true);
        console.log(phone, password);
        if(phone.trim()=="" || password.trim()==""){
            setLoading(false);
            alert("Phone and password is required!")
            return;
        }
        const { user, error } = await supabase.auth.signInWithPassword({
            phone: phone.trim(),
            password: password.trim(),
        });
        // console.log(user, error);
        // if (!error && !user) {
        //     setLoading(false);
        //     alert("Check your email for the login link!");
        // }
        if (error) {
            setLoading(false);
            if('Phone not confirmed'==error.message){
                navigation.navigate('OTP',{phone, password})                
            }else{
                console.log(error);
                alert(error.message);
            }
        }
    }

    const register = async () => {
        setLoading(true);
        console.log("Register is called ..");
        console.log(phone, password);
        if(phone.trim()=="" || password.trim()=="" || confimPassword.trim()==""){
            setLoading(false);
            alert("All field are required!")
            return;
        }
        if(password.trim()!=confimPassword.trim()){
            setLoading(false);
            alert("Confim password is not match!")
            return;
        }
        const { data, error } = await supabase.auth.signUp({
            phone: phone.trim(),
            password: password.trim(),
        });
        const { session, user } = data;
        console.log(session, user, error);
        if (!error && !session) {
            setLoading(false);
            // alert("Check your email for the login link!");
            navigation.navigate('OTP',{phone, password})                
        }
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
                <View style={styles.rectangle}>
                    <View style={styles.ellipse}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />
                    </View>
                    <View style={styles.ovalContainer}>
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
                    </View>
                </View>
            {/* </ImageBackground> */}
            {isLogin && <View style={styles.outterPart}>
                <View style={styles.headerPart}>
                    <Text style={[{ fontFamily: 'Manrope-Medium' }, styles.Heading]}>Welcome Back!</Text>
                    <Text style={styles.SubHead}>Your favorite home chefs are a click away!</Text>
                </View>
                <View style={styles.FormPart}>
                    <Text style={styles.SubHead}>Phone Number</Text>
                    <TextInput
                        placeholder={"Enter your phone number"}
                        onChangeText={(text) => setPhone(text)}
                        style={styles.textInput} />
                    <Text style={styles.SubHead}>Password</Text>
                    <TextInput
                        placeholder={"Enter your password"}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.forgetPasswordView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgetPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={login} style={styles.button}>
                        <LinearGradient
                            colors={['#FF4E50', '#F9D423']}
                            start={[0, 0]}
                            end={[1, 0]}
                            style={styles.gradient}
                        >
                           {loading ? <ActivityIndicator size={'small'} color={"#fff"} /> : <Text style={styles.buttonText}>Login</Text>}
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>}
            {!isLogin && <View style={styles.outterPart}>
                <View style={styles.headerPart}>
                    <Text style={[{ fontFamily: 'Manrope-Medium' }, styles.Heading]}>Welcome!</Text>
                    <Text style={styles.SubHead}>We are glad to see you in our platform!</Text>
                </View>
                <View style={styles.FormPart}>
                    <Text style={styles.SubHead}>Phone Number</Text>
                    <TextInput
                        placeholder={"Enter your phone number"}
                        onChangeText={(text) => setPhone(text)}
                        style={styles.textInput} />
                    <Text style={styles.SubHead}>Password</Text>
                    <TextInput
                        placeholder={"Enter your password"}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.textInput} />
                    <Text style={styles.SubHead}>Confirm Password</Text>
                    <TextInput
                        placeholder={"Enter your password"}
                        onChangeText={(text) => setConfimPassword(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={register} style={styles.button}>
                        <LinearGradient
                            colors={['#FF4E50', '#F9D423']}
                            start={[0, 0]}
                            end={[1, 0]}
                            style={styles.gradient}
                        >
                            {loading ? <ActivityIndicator size={'small'} color={"#fff"} /> : <Text style={styles.buttonText}>Sign-up</Text>}
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    );
};

export default LoginScreen;

