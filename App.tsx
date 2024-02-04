import { styles } from './styles/styles'
import { useState, useRef, useEffect } from 'react'
import { View, Text, Pressable, StatusBar, Dimensions, ScaledSize } from 'react-native'
import Settings from './components/Settings'
import Field from './components/Field'
import Result from './components/Result'

interface Field {
  id: number,
  row: Cell[],
}
interface Cell {
  id: number,
  bomb: boolean,
  click: boolean,
  countBomb: number,
  flag: boolean,
}
interface Data {X: number, Y: number}

export default function App() {
  const [field, setField] = useState<Field[]>([])
  const [size, setSize] = useState<Data>({X: 0, Y: 0})
  const [bombs, setBombs] = useState<Data>({X: 0, Y: 0})
  const [times, setTimes] = useState<Data>({X: 0, Y: 0})
  const [flags, setFlags] = useState<Data>({X: 0, Y: 0})
  const gameActive = useRef<boolean>(false)
  const executed = useRef<boolean>(false)
  const win = useRef<number>(0)
  const [error, setError] = useState<string>('')
  const [orientation, setOrientation] = useState<boolean>(Dimensions.get('window').width > Dimensions.get('window').height ? true : false)

  const handleOrientationChange = ({window}:{window:ScaledSize}) => {
    const newOrientation = window.width > window.height ? true : false
    setOrientation(newOrientation)
  }
  
  useEffect(() => { Dimensions.addEventListener('change', handleOrientationChange) }, [])

  useEffect(()=>{
    if (!win.current) {
      setBombs({...bombs, Y: 0})
      setTimes({...times, Y: 0})
      setFlags({X: 0, Y: 0})
    }
  }, [win.current])

  const gameStart = () => {
    const fieldX:Field[] = []
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
        const rowX:Cell[] = []
        for (let j = 0; j < size.Y; j++) {
          rowX.push({
            id: idX,
            bomb: false,
            click: false,
            countBomb: 0,
            flag: false,
          })
          idX++
        }
        fieldX.push({
          id: i,
          row: rowX,
        })
      }
      setField(fieldX)
      setBombs({...bombs, Y: bombs.X})
      setTimes({...times, Y: times.X})
      setFlags({X: 0, Y: 0})
      setError('')
      gameActive.current = true
      executed.current = false
    }
  }

  return(
    <View style={!orientation ? styles.mainViewPortrait : styles.mainViewLandscape}>
      <View style={[!orientation ? styles.mainViewPortrait : styles.mainViewLandscape, win.current ? {pointerEvents: 'none'} : null]}>
        <View>
          <Text style={styles.mainText}>💥Разрывная💥</Text>
          <Settings
            size = {size}
            setSize = {setSize}
            bombs = {bombs}
            setBombs = {setBombs}
            times = {times}
            setTimes = {setTimes}
            gameActive = {gameActive}/>
          <Pressable style={styles.buttonView} onPress={gameStart}>
            <Text style={styles.button}>НАЧАТЬ ИГРУ</Text>
          </Pressable>
        </View>
        {<Field
          field = {field}
          setField = {setField}
          bombs = {bombs}
          times = {times}
          setTimes = {setTimes}
          flags = {flags}
          setFlags = {setFlags}
          executed = {executed}
          win = {win}/>}
        <StatusBar backgroundColor={'#080808'} barStyle={'light-content'}/>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      {win.current === 0 || 
        <Result
          setField = {setField}
          size = {size}
          bombs = {bombs}
          times = {times}
          win = {win}
          gameActive = {gameActive}/>}
    </View>
  )
}