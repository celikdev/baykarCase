import {Dimensions, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {getHeightPercentage, getWidthPercentage} from '../../utils/Dimension';

interface TextBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  maxLength?: number;
}

const {width} = Dimensions.get('window');

const TextBox = (props: TextBoxProps) => {
  return (
    <TextInput
      style={styles.container}
      {...props}
      placeholderTextColor="gray"
      cursorColor="black"
    />
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: getHeightPercentage(0.06),
    borderColor: 'black',
    borderRadius: getWidthPercentage(0.02),
    paddingHorizontal: getWidthPercentage(0.04),
    marginVertical: getWidthPercentage(0.02),
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: getWidthPercentage(0.03),
    width: getWidthPercentage(0.8),
  },
});
