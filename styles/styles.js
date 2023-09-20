import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainView: {
    margin: 15,
    alignItems: 'center',
    color: '#0f0f0f',
  },
  mainText: {
    marginTop: 15,
    color: '#c6e6e9',
    fontFamily: 'monospace',
    fontSize: 35,
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldCellX: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    height: 55,
    width: 55,
    margin: 5,
    backgroundColor: '#c6e6e9',
    color: '#c6e6e9',
    border: 'none',
    borderRadius: 5,
    fontFamily: 'monospace',
    fontSize: 35,
    transition: 200,
  },
})
