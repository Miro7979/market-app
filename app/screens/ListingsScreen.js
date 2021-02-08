import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../component/Screen';
import Card from '../component/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import AppText from '../component/Text';
import Button from '../component/Button';
import ActivityIndicator from '../component/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings()
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <React.Fragment>
          <AppText style={styles.errText}>Could not retrieve the listings.</AppText>
          <Button title='Retry' onPress={loadListings} />
        </React.Fragment>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={'$ ' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
  },
  errText: {
    alignContent: 'center'
  }
})

export default ListingsScreen;