import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getWidthPercentage} from '../../utils/Dimension';
import {Arrow} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

interface DropdownProps {
  placeholder: string;
  width?: string;
  showArrow?: boolean;
  onPress?: () => void;
  data?: any;
}

const Dropdown = ({
  placeholder,
  width,
  showArrow,
  onPress,
  data,
}: DropdownProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container(width)}
      activeOpacity={0.8}
      onPress={() =>
        onPress ? onPress : navigation.navigate('DropdownSearch', {data})
      }>
      <Text style={styles.placeholder}>{placeholder}</Text>
      {showArrow ? <Arrow /> : null}
    </TouchableOpacity>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: (width: string) => ({
    width: width ? width : '48%',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: getWidthPercentage(0.04),
    borderRadius: getWidthPercentage(0.02),
    marginVertical: getWidthPercentage(0.02),
    color: 'black',
    fontFamily: 'Montserrat-Bold',
    height: getWidthPercentage(0.12),
    flexDirection: 'row',
  }),
  placeholder: {
    color: 'gray',
    fontFamily: 'Montserrat-Bold',
    fontSize: getWidthPercentage(0.03),
    textAlign: 'left',
  },
});
