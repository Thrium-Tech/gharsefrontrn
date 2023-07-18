import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons,MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';

const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
    <View style={[styles.radioButton, selected && styles.radioButtonSelected]}>
      {selected && <View style={styles.radioButtonInner} />}
    </View>
    <Text style={styles.radioButtonLabel}>{label}</Text>
  </TouchableOpacity>
);

const PaymentMethodScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonPress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardSection}>
        <RadioButton
          label=""
          selected={selectedOption === 'Card'}
          onPress={() => handleRadioButtonPress('Card')}
        />
        <View style={styles.divider} />
        <RadioButton
          label="Bank Account"
          selected={selectedOption === 'Bank Account'}
          onPress={() => handleRadioButtonPress('Bank Account')}
        />
        <View style={styles.divider} />
        <RadioButton
          label="Paypal"
          selected={selectedOption === 'Paypal'}
          onPress={() => handleRadioButtonPress('Paypal')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  cardSection: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: 'orange',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'orange',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#888',
    marginVertical: 8,
  },
});

export default PaymentMethodScreen;
