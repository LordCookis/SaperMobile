import { styles } from '../styles/styles'
import { View, Text, Pressable } from "react-native"

export default function Result({setField, size, bombs, times, win, gameActive}:any){
  const newGame = () => {
    setField([])
    win.current = 0
    gameActive.current = false
  }

  const timeSpent = `${Math.floor((times.X - times.Y) / 60)}:${((times.X - times.Y) % 60).toString().padStart(2, '0')}`

  return(
    <View style={styles.resultView}>
      {win.current === 1 ? <Text style={styles.resultWin}>ОБЕЗВРЕЖЕНО</Text> : <Text style={styles.resultLose}>ПОРАЖЕНИЕ</Text>}
      <Text style={styles.resultText}>Поле: {size.X} / {size.Y}</Text>
      <Text style={styles.resultText}>Бомб: {bombs.Y}</Text>
      {times.X ? <Text style={styles.resultText}>Время: {timeSpent}</Text> : null}
      <Pressable style={styles.resultButton} onPress={newGame}>
        <Text style={styles.resultText}>НОВАЯ ИГРА</Text>
      </Pressable>
    </View>
  )
}