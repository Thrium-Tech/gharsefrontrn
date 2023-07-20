import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader';
import { Divider } from 'react-native-elements';
import BottomNavbar from '../components/BottomNavbar';

const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
    <View style={{ margin: 5 }}>
      {label === 'Card' && <FontAwesome name="credit-card-alt" style={{ backgroundColor: '#F86F03', padding: 15, borderRadius: 8 }} size={15} color="#fff" />}
      {label === 'Bank account' && <MaterialCommunityIcons style={{ backgroundColor: '#EB4796', paddingHorizontal: 15, paddingVertical: 13, borderRadius: 8 }} name="bank" size={20} color="#fff" />}
      {label === 'Paypal' && <FontAwesome name="paypal" style={{ backgroundColor: '#525FE1', paddingHorizontal: 17, paddingVertical: 14, borderRadius: 8 }} size={20} color="#fff" />}
    </View>
    <Text style={styles.radioButtonLabel}>{label}</Text>
  </TouchableOpacity>
);

const PaymentMethodScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <AppHeader screen={'Profile'} navigation={navigation} />
      <View style={styles.rowContainer}>
        <Text style={styles.heading}>Payment Methods</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Edit details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardSection}>
        <RadioButton
          label="Card"
          selected={selectedOption === 'Card'}
          onPress={() => handleRadioButtonPress('Card')}
        />
        <View style={{ alignItems: 'center' }}>
          <Divider style={{ width: '85%' }} />
        </View>
        <RadioButton
          label="Bank account"
          selected={selectedOption === 'Bank Account'}
          onPress={() => handleRadioButtonPress('Bank Account')}
        />
        <View style={{ alignItems: 'center' }}>
          <Divider style={{ width: '85%' }} />
        </View>
        <RadioButton
          label="Paypal"
          selected={selectedOption === 'Paypal'}
          onPress={() => handleRadioButtonPress('Paypal')}
        />
      </View>
      <BottomNavbar screen={'Profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 17,
    color: '#002B5B',
    fontFamily: 'Manrope-Medium',
  },
  editText: {
    color: 'orange',
    fontSize: 13,
    fontFamily: 'Manrope-Medium',
  },
  cardSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
    borderColor: '#EFF2F5',
    borderWidth: 1,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#9F9F9F',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: 'orange',
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'orange',
  },
  radioButtonLabel: {
    fontSize: 15,
    fontFamily: 'WorkSans-Regular',
    paddingLeft: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#888',
    marginVertical: 8,
  },
});

export default PaymentMethodScreen;
