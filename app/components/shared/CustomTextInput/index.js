import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {useTheme} from '@rneui/themed';
import EyeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const CustomTextInput = ({
  onChange,
  value,
  showPassIcon,
  frontIcon,
  onBlur,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {theme} = useTheme();
  const colors = theme.colors;

  return (
    <View style={styles.container(colors)}>
      {frontIcon && <EyeIcon name="eye" size={24} color={colors.dark25} />}
      <TextInput
        secureTextEntry={!showPassword}
        onBlur={onBlur}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        style={styles.input(colors)}
      />
      {showPassIcon && (
        <EyeIcon
          style={styles.iconEnd}
          name={!showPassword ? 'eye-off' : 'eye'}
          size={24}
          color={colors.dark25}
          onPress={() => setShowPassword(!showPassword)}
        />
      )}
    </View>
  );
};

export default CustomTextInput;
