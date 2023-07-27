import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import BottomNavbar from '../components/BottomNavbar';

const OrderScreen = ({ navigation }) => {
    const [showPastOrders, setShowPastOrders] = useState(false);

    const orders = [
        // Sample data for past and upcoming orders
        {
            id: '1',
            title: 'Order 1',
            status: 'Pending',
            date: '2022-07-30',
            amount: 49.99,
            cashStatus: 'Succeeded',
            pastOrder: true,
        },
        {
            id: '2',
            title: 'Order 2',
            status: 'Pending',
            date: '2022-08-02',
            amount: 9.99,
            cashStatus: 'Unpaid',
            pastOrder: false,
        },
        {
            id: '3',
            title: 'Order 3',
            status: 'Delivered',
            date: '2022-08-02',
            amount: 99.99,
            cashStatus: 'Succeeded',
            pastOrder: false,
        },
        {
            id: '4',
            title: 'Order 4',
            status: 'Pending',
            date: '2022-08-02',
            amount: 4.99,
            cashStatus: 'Unpaid',
            pastOrder: true,
        },
        // Add more order data as needed
    ];

    const handleToggleSwitch = () => {
        setShowPastOrders((prev) => !prev);
    };

    const filteredOrders = showPastOrders
        ? orders.filter((order) => order.pastOrder)
        : orders.filter((order) => !order.pastOrder);

    return (
        <View style={styles.container}>
            <AppHeader isMainScreen={true} />
            {/* <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            showPastOrders ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={handleToggleSwitch}
        >
          <Text
            style={[
              styles.toggleText,
              showPastOrders ? styles.activeToggleText : styles.inactiveToggleText,
            ]}
          >
            Past Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            !showPastOrders ? styles.activeToggle : styles.inactiveToggle,
          ]}
          onPress={handleToggleSwitch}
        >
          <Text
            style={[
              styles.toggleText,
              !showPastOrders ? styles.activeToggleText : styles.inactiveToggleText,
            ]}
          >
            Upcoming Orders
          </Text>
        </TouchableOpacity>
      </View> */}
            <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                <View style={styles.toggleView}>
                    <TouchableOpacity onPress={handleToggleSwitch} style={[styles.toggleButton, !showPastOrders ? styles.activeToggle : styles.inactiveToggle]}>
                        <Text style={[styles.toggleText, !showPastOrders ? styles.activeToggleText : styles.inactiveToggleText]}>
                            Past
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToggleSwitch} style={[styles.toggleButton, showPastOrders ? styles.activeToggle : styles.inactiveToggle]}>
                        <Text style={[styles.toggleText, showPastOrders ? styles.activeToggleText : styles.inactiveToggleText]}>
                            Upcoming
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {filteredOrders.map((order) => (
                    <TouchableOpacity key={order.id} onPress={() => navigation.navigate(order.status === 'Pending' ? "Live Tracking" : "Delivered page" ) } style={styles.orderContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.orderStatus}>Order {order.status}</Text>
                            <Text style={styles.orderAmount}>${order.amount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.orderDate}>{order.date}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.cashStatusText}>Cash </Text>
                                <Text style={ order.cashStatus === 'Succeeded' ? styles.statusSuccess : styles.statusDanger }>{order.cashStatus}</Text>
                            </View>
                        </View>
                        <View style={styles.botPart}>
                            <Text style={styles.orderTitle}>{order.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <BottomNavbar screen={'Orders'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    toggleView: {
        width: '75%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#002B5B',
        borderRadius: 20,
        overflow: 'hidden',
    },
    toggleButton: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    toggleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeToggle: {
        backgroundColor: '#002B5B',
    },
    inactiveToggle: {
        backgroundColor: '#FAFAFA',
    },
    activeToggleText: {
        color: '#fff',
    },
    inactiveToggleText: {
        color: '#002B5B',
    },
    scrollViewContent: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    orderContainer: {
        marginBottom: 15,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#EFF2F5',
        borderWidth: 1,
    },
    orderTextContainer: {
        paddingLeft: 10,
    },
    orderTitle: {
        fontFamily: 'Manrope-Medium',
        fontSize: 16,
    },
    orderStatus: {
        color: '#000',
        fontFamily: 'Manrope-Medium',
        fontSize: 17,
    },
    orderAmount: {
        color: '#000',
        fontWeight: 700,
        fontSize: 17,
    },
    orderDate: {
        color: '#444',
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
    },
    cashStatusText: {
        fontFamily: 'Manrope-Medium',
        fontSize: 14,
    },
    statusSuccess: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: '#198754',
    },
    statusDanger: {
        fontFamily: 'Manrope-Regular',
        fontSize: 12,
        color: '#DC3545',
    }
});

export default OrderScreen;
