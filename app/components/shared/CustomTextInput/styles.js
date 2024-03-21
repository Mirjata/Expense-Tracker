import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: colors => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.light20,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
  }),
  input: colors => ({
    flex: 1,
    color: colors.dark25,
    paddingVertical: 10,
    paddingRight: 10,
    fontSize: 16,
  }),
  iconEnd: {
    marginLeft: 10,
  },
});
