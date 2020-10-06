import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from '../component/AppText';
import ListItem from '../component/ListItem';

function ListDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/car2.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>A very nice car for sale.</AppText>
        <AppText style={styles.price}>200000kr</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/person.jpg')}
            title='Sandra Nezami'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  }
})

export default ListDetailsScreen;