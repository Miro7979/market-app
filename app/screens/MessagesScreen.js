import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../component/ListItem';
import ListItemDeleteAction from '../component/ListItemDeleteAction';
import ListItemSeparator from '../component/ListItemSeparator';
import Screen from '../component/Screen';

const initialMessages = [
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
  // bring in state to rerender after delete the message
  const [messages, setMessages] = useState(initialMessages);

  // use useState hook as a boolean to refresh the state
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // Delete the message, use the state hooks
    const newMessages = messages.filter(m => m.id !== message.id)
    setMessages(newMessages);
  }
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
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() =>
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}
              />}
          />}
        ItemSeparatorComponent={ListItemSeparator}
        // use the boolean state variable for refreshing
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'wa wa',
              description: 'It is a nice evning',
              image: require('../assets/person.jpg')
            },
            {
              id: 100,
              title: 'It is refreshing',
              description: 'It is a nice evning',
              image: require('../assets/car1.jpg')
            }
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;