import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomText, CustomButton} from '../../UI';
import {useTheme} from '@rneui/themed';
import styles from './styles';

const LogIn = () => {
  const {theme} = useTheme();
  const colors = theme.colors;

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
      <View style={{justifyContent: 'center'}}>
        <CustomText customStyle={{alignSelf: 'center'}} type="title3">
          Sign Up
        </CustomText>
        <Icon name="arrow-back" size={24} color={colors.black100} />
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input(colors)}
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
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input(colors)}
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
      <CustomText customStyle={styles.forgotPasswordText(colors)} type="title3">
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
