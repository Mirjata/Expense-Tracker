import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: colors => ({
    paddingHorizontal: 16,
    backgroundColor: colors.light100,
    flex: 1,
    paddingTop: 20,
  }),
  header: colors => ({
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 80,
  }),
  input: colors => ({
    fontSize: 16,
    fontFamily: 'Bentham-Regular',
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.light20,
    borderRadius: 15,
    marginBottom: 20,
  }),
  button: colors => ({
    backgroundColor: colors.violet100,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 35,
  }),
  forgotPasswordText: colors => ({
    color: colors.violet100,
    alignSelf: 'center',
    fontWeight: '600',
    marginBottom: 35,
  }),

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: colors => ({
    color: colors.dark25,
    marginRight: 5,
  }),
  signUpText: colors => ({
    color: colors.violet100,
    fontWeight: '500',
    textDecorationLine: 'underline',
  }),
});
