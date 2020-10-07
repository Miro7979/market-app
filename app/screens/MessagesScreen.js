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
  const [messages, setMessages] = useState(initialMessages);

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
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;