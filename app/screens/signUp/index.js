import React from 'react';
import {Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomTextInput} from '../../components/shared';
import {CustomText, CustomButton} from '../../UI';
import GoogleIcon from '../../../assets/icons/google_icon.svg';
import {useTheme} from '@rneui/themed';
import styles from './styles';

const SignUp = () => {
  const {theme} = useTheme();
  const colors = theme.colors;
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
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
        <CustomText type="title3">Sign Up</CustomText>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            placeholder="Name"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
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
          />
        )}
        name="email"
      />
      {errors.email && <Text>This is required.</Text>}
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
            showPassIcon
          />
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <CustomButton
        textStyle={{fontSize: 16, fontWeight: '600'}}
        style={styles.button(colors)}
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
      />
      <CustomText
        type="regular2"
        customStyle={{
          alignSelf: 'center',
          color: colors.dark25,
          marginVertical: 20,
        }}>
        Or with
      </CustomText>

      <CustomButton
        title="Sign Up with Google"
        iconLeft={<GoogleIcon style={{marginRight: 16}} />}
        textStyle={{color: colors.dark100, fontWeight: '500'}}
        style={styles.googleButton(colors)}
      />

      <View style={styles.signUpContainer}>
        <CustomText customStyle={styles.text(colors)}>
          Already have an account?
        </CustomText>
        <CustomText customStyle={styles.signUpText(colors)}>Login</CustomText>
      </View>
    </View>
  );
};

export default SignUp;
