import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../component/Screen';
import Card from '../component/Card';
import colors from '../config/colors';
import navigationTheme from '../navigation/navigationTheme';


const listings = [
  {
    id: 1,
    title: 'A nice car for sale',
    price: 2000000,
    image: require('../assets/car3.jpg'),
  },
  {
    id: 2,
    title: 'A nice car for sale',
    price: 2000,
    image: require('../assets/car1.jpg'),
  },
]
function ListingsScreen({ navigation }) {

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate('ListingDetails', item)}
          />
        }
      />

    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  }
})

export default ListingsScreen;