import React from 'react';
import {Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomTextInput} from '../../components/shared';
import {CustomText, CustomButton} from '../../UI';
import {useTheme} from '@rneui/themed';
import styles from './styles';

const LogIn = () => {
  const {theme} = useTheme();
  const colors = theme.colors;
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container(colors)}>
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.goBack()}
          style={styles.icon}
          name="arrow-back"
          size={24}
          color={colors.black100}
        />
        <CustomText type="title3">Login</CustomText>
      </View>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder="Email"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            showPassIcon
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder="Password"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="lastName"
      />
      <CustomButton
        textStyle={{fontSize: 16, fontWeight: '600'}}
        style={styles.button(colors)}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
      <CustomText
        onPress={() => navigation.navigate('forgotPassword')}
        customStyle={styles.forgotPasswordText(colors)}
        type="title3">
        Forgot Password?
      </CustomText>
      <View style={styles.signUpContainer}>
        <CustomText customStyle={styles.text(colors)}>
          Don't have an account yet?
        </CustomText>
        <CustomText customStyle={styles.signUpText(colors)}>Sign Up</CustomText>
      </View>
    </View>
  );
};

export default LogIn;
