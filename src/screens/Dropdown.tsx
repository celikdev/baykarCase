import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dropdown = ({route}: any) => {
  const {data} = route.params;
  console.log('Data,', data);
  return (
    <View>
      {data.map((item: any, index: number) => (
        <Text style={{color: 'black'}} key={index}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({});
