import { StatusBar } from 'expo-status-bar'
import { styles } from './styles/styles'
import { useState, useRef } from 'react'
import { Text, View, Button } from 'react-native'
import GameInputs from './components/GameInputs'
import Field from './components/Field'

export default function App() {
  const [field, setField] = useState([])
  const [size, setSize] = useState({X: 0, Y: 0})
  const [bombs, setBombs] = useState(0)
  const gameActive = useRef(false)
  const executed = useRef(false)

  const gameStart = () => {
    const fieldX = []
    let idX = 0
    let idY = 0
    for (let i = 0; i < size.X; i++) {
      const rowX = []
      for (let j = 0; j < size.Y; j++) {
        rowX.push({
          id: idY,
          bomb: false,
          click: false,
          countBomb: 0,
          flag: false
        })
        idY++
      }
      fieldX.push({
        id: idX,
        row: rowX
      })
      idX++
    }
    setField(fieldX)
    gameActive.current = true
    executed.current = false
  }

  return(
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Разрывная</Text>
      <GameInputs
        size = {size}
        setSize = {setSize}
        setBombs = {setBombs}
      />
      <Text>{size.X} / {size.Y}</Text>
      <Button title='НАЧАТЬ ИГРУ' onPress={gameStart}/>
      {
        <Field 
          field = {field}
          setField = {setField}
          bombs = {bombs}
          gameActive = {gameActive}
          executed = {executed}
        />}
      <StatusBar style="auto"/>
    </View>
  )
}
