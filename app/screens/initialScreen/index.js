import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '../../UI';

import {useTheme} from '@rneui/themed';
import styles from './styles';

const InitialScreen = () => {
  const {theme} = useTheme();
  const colors = theme.colors;
  const navigation = useNavigation();

  return (
    <View style={styles.container(colors)}>
      <CustomButton
        textStyle={{fontSize: 16, fontWeight: '600'}}
        style={styles.button(colors)}
        title="Sign Up"
        onPress={() => navigation.navigate('signUp')}
      />
      <CustomButton
        textStyle={{fontSize: 16, fontWeight: '600', color: colors.violet100}}
        style={styles.buttonLogin(colors)}
        title="Login"
        onPress={() => navigation.navigate('logIn')}
      />
    </View>
  );
};

export default InitialScreen;
