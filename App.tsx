import { StatusBar } from 'expo-status-bar'
import { styles } from './styles/styles'
import { useState, useRef } from 'react'
import * as React from 'react'
import { View, Text, Pressable } from 'react-native'
import GameInputs from './components/GameInputs'
import Field from './components/Field'
import Result from './components/Result'

export default function App() {
  const [field, setField] = useState<any>([])
  interface Size {X: number, Y: number}
  const [size, setSize] = useState<Size>({X: 0, Y: 0})
  interface Bomb {X: number, Y: number}
  const [bombs, setBombs] = useState<Bomb>({X: 0, Y: 0})
  interface Time {X: number, Y: number}
  const [times, setTimes] = useState<Time>({X: 0, Y: 0})
  interface Flag {X: number, Y: number}
  const [flags, setFlags] = useState<Flag>({X: 0, Y: 0})
  const gameActive = useRef<boolean>(false)
  const executed = useRef<boolean>(false)
  const win = useRef<number>(0)
  const [error, setError] = useState<string>("")

  const gameStart = () => {
    const fieldX:any = []
    let idX:number = 0
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
            id: idX,
            bomb: false,
            click: false,
            countBomb: 0,
            flag: false
          })
          idX++
        }
        fieldX.push({
          id: i,
          row: rowX
        })
      }
      setField(fieldX)
      setBombs({...bombs, Y: bombs.X})
      setTimes({...times, Y: times.X})
      setFlags({X: 0, Y: 0})
      gameActive.current = true
      executed.current = false
    }
  }

  return(
    <View style={styles.mainView}>
      <Text style={styles.mainText}>💥Разрывная💥</Text>
      <GameInputs
        size = {size}
        setSize = {setSize}
        bombs = {bombs}
        setBombs = {setBombs}
        times = {times}
        setTimes = {setTimes}
      />
      <Pressable style={styles.buttonView} onPress={gameStart}>
        <Text style={styles.button}>НАЧАТЬ ИГРУ</Text>
      </Pressable>
      {times.Y ? <View style={styles.viewInfo}>
        <Text style={styles.textInfo}>Отмечено: {flags.X} / {bombs.Y}</Text>
        <Text style={styles.textInfo}>Времени осталось: {times.Y}c</Text>
      </View> :
      <View style={styles.viewInfo}>
        <Text style={styles.textInfo}>Отмечено: {flags.X} / {bombs.Y}</Text>
      </View>}
      {<Field
        field = {field}
        setField = {setField}
        bombs = {bombs}
        times = {times}
        setTimes = {setTimes}
        flags = {flags}
        setFlags = {setFlags}
        executed = {executed}
        win = {win}
      />}
      <StatusBar style="light"/>
      <Text style={styles.errorText}>{error}</Text>
      {win.current === 0 || 
      <Result
        setField = {setField}
        size = {size}
        bombs = {bombs}
        times = {times}
        win = {win}
      />}
    </View>
  )
}
