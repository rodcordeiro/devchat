import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    // marginVertical: 5,
    borderRadius: 5,
  },
  label: {
    paddingBottom: 5,
  },
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  input: {},
  icon: {
    paddingRight: 10,
  },
  trailingIcon: {
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  },
  error_message: {
    color: '#f12',
    fontWeight: '200',
    // fontSize: 12,
  },
});
