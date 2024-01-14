import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextBox} from '../components/main';

const Home = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <TextBox
        placeholder="Ad"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={{color: 'black'}}>{name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
