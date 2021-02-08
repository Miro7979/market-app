import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View >
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    borderColor: colors.white,
    borderWidth: 10,
    bottom: 20,
    height: 70,
    justifyContent: 'center',
    width: 70,
  }
});

export default NewListingButton;