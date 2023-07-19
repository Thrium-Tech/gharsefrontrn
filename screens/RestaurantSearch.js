import React from "react";
import {StyleSheet, View, Text, Button } from "react-native";
import { supabase } from "../initSupabase";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF6F4',
        justifyContent: 'center'
    }
})

const RestaurantSearch = () =>(

    // Replace `null` with the `View` component
     <View style={[styles.container]}>
    <Text> Hello world</Text>
    <Button onPress={async ()=>{
        const { error } = await supabase.auth.signOut();
    }} title="Logout"></Button>
    </View>);
  
  export default RestaurantSearch;