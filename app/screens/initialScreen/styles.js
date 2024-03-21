import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: colors => ({
    paddingHorizontal: 18,
    backgroundColor: colors.light100,
    flex: 1,
    paddingTop: 20,
  }),
  button: colors => ({
    backgroundColor: colors.violet100,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 20,
  }),
  buttonLogin: colors => ({
    backgroundColor: colors.violet20,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginBottom: 20,
  }),
});
