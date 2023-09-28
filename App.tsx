import { StatusBar } from 'expo-status-bar'
import { styles } from './styles/styles'
import { useState, useRef } from 'react'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import GameInputs from './components/GameInputs'
import Field from './components/Field'

export default function App() {
  const [field, setField] = useState<any>([])
  interface Size {X: number, Y: number}
  const [size, setSize] = useState<Size>({X: 0, Y: 0})
  interface Bomb {X: number, Y: number}
  const [bombs, setBombs] = useState<Bomb>({X: 0, Y: 0})
  const gameActive = useRef<boolean>(false)
  const executed = useRef<boolean>(false)
  const winX = useRef<number>(0)
  const [win, setWin] = useState<number>(0)
  const [error, setError] = useState<string>("")

  const gameStart = () => {
    const fieldX:any = []
    let idX:number = 0
    let idY:number = 0
    if (!size.X || !size.Y) {
      setError("Ошибка: размер поля не указан")
    } else if (size.X * size.Y === bombs.X) {
      setError("Ошибка: минимум одна ячейка должна быть без бомбы")
    } else if (size.X * size.Y < bombs.X) {
      setError("Ошибка: бомб больше чем ячеек на поле")
    } else if (bombs.X < 1) {
      setError("Ошибка: должна быть минимум одна бомба")
    } else {
      for (let i = 0; i < size.X; i++) {
        const rowX:any = []
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
  }

  return(
    <View style={styles.mainView}>
      <Text style={styles.mainText}>Разрывная</Text>
      <GameInputs
        size = {size}
        setSize = {setSize}
        setBombs = {setBombs}
      />
      <Button title='НАЧАТЬ ИГРУ' onPress={gameStart}/>
      {
        <Field 
          field = {field}
          setField = {setField}
          bombs = {bombs}
          gameActive = {gameActive}
          executed = {executed}
          winX = {winX}
          setWin = {setWin}
        />}
      <StatusBar style="auto"/>
      <Text>{error}</Text>
    </View>
  )
}
