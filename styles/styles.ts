import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    color: '#080808',
    backgroundColor: '#080808',
  },
  mainText: {
    margin: 10,
    marginTop: 25,
    alignItems: 'center',
    color: '#c6e6e9',
    fontFamily: 'monospace',
    fontSize: 25,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSize: {
    width: 80,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#080808',
    color: '#c6e6e9',
    borderColor: '#c6e6e9',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    fontFamily: 'monospace',
    fontSize: 20,
    textAlign: 'center',
  },
  inputData: {
    width: 80,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#080808',
    color: '#c6e6e9',
    borderColor: '#c6e6e9',
    borderRadius: 5,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    fontFamily: 'monospace',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    margin: 5,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#c6e6e9',
    borderRadius: 5,
  },
  button: {
    padding: 5,
    backgroundColor: '#080808',
    color: '#c6e6e9',
    fontFamily: 'monospace',
    fontSize: 25,
    transition: 200,
  },
  viewInfo: {
    width: 300,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInfo: {
    color: '#c6e6e9',
    fontFamily: 'monospace',
    fontSize: 10,
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
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#c6e6e9',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cellC: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#69dbe6',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cellB: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#e66969',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell1: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#4470e7',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell2: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#4bc04b',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell3: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#bb4848',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell4: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#243c69',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell5: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#e6a569',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell6: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#46b9b4',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell7: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#353535',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cell8: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#e669dc',
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
  },
  cellF: {
    height: 35,
    width: 35,
    margin: 3,
    backgroundColor: '#516368',
    border: 'none',
    borderRadius: 5,
  },
  cellText: {
    color: '#c6e6e9',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
    fontSize: 20,
  },
  resultView: {
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080808',
    color: '#c6e6e9',
    borderWidth: 3,
    borderColor: '#c6e6e9',
    borderRadius: 5,
    position: 'absolute',
    zIndex: 1,
  },
  resultWin: {
    color: '#4bc04b',
    fontFamily: 'monospace',
    fontSize: 70,
  },
  resultLose: {
    color: '#e66969',
    fontFamily: 'monospace',
    fontSize: 100,
  },
  resultText: {
    margin: 10,
    color: '#c6e6e9',
    fontFamily: 'monospace',
    fontSize: 25,
  },
  resultButton: {
    margin: 15,
    borderWidth: 3,
    borderColor: '#c6e6e9',
    borderRadius: 5,
  },
  errorText: {
    fontFamily: 'monospace',
    color: '#e66969',
  },
})
