import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';

const messages = [
  {
    id: 1,
    title: 'wazup',
    description: 'It is a nice day',
    image: require('../assets/person.jpg')
  },
  {
    id: 2,
    title: 'wa wa',
    description: 'It is a nice evning',
    image: require('../assets/person.jpg')
  }
]

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;