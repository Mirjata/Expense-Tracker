import React from 'react';
import {Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CustomTextInput} from '../../components/shared';
import {CustomText, CustomButton} from '../../UI';
import {useTheme} from '@rneui/themed';
import styles from './styles';

const ForgotPassword = () => {
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
          style={styles.icon}
          name="arrow-back"
          size={24}
          color={colors.black100}
          onPress={() => navigation.goBack()}
        />
        <CustomText type="title3">Forgot Password</CustomText>
      </View>
      <CustomText
        type="title2"
        customStyle={{fontWeight: '500', marginBottom: 40, lineHeight: 30}}>
        Don't worry.{'\n'}Enter your email and we'll{'\n'}send you a link to
        reset your password.
      </CustomText>
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
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <CustomButton
        textStyle={{fontSize: 16, fontWeight: '600'}}
        style={styles.button(colors)}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default ForgotPassword;
