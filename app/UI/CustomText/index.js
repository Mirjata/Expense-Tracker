import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = props => {
  const {children, customStyle, type = 'regular1'} = props;

  const textStyles = {
    titleX: {
      fontSize: 64,
      lineHeight: 80,
    },
    title1: {
      fontSize: 32,
      lineHeight: 34,
    },
    title2: {
      fontSize: 24,
      lineHeight: 22,
    },
    title3: {
      fontSize: 18,
      lineHeight: 22,
    },
    regular2: {
      fontSize: 16,
      lineHeight: 19,
      fontWeight: '500',
    },
    regular3: {
      fontSize: 14,
      lineHeight: 18,
    },
    regular1: {
      fontSize: 16,
      lineHeight: 19,
    },
    small: {
      fontSize: 12,
      lineHeight: 12,
    },
    tiny: {
      fontSize: 13,
      lineHeight: 16,
    },
  };

  return (
    <Text style={styles.base(customStyle, textStyles[type])} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: (customStyle, textStyles) => ({
    ...textStyles,
    ...customStyle,
  }),
});

export default CustomText;
