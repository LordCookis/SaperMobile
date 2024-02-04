import { styles } from '../styles/styles'
import { useState } from 'react'
import { View } from "react-native"
import GameInput from './GameInput'

export default function Settings ({size, setSize, bombs, setBombs, times, setTimes, gameActive}:any){
  const [inputFocus, setInputFocus] = useState<number>(0)
  const sameData = { inputFocus, setInputFocus, gameActive }

  return(
    <View>
      <View style={styles.inputView}>
        <GameInput
          sameData={sameData}
          focus={1}
          data={size.X}
          text={'Ширина'}
          setData={(data:number)=>setSize({...size, X: data})}/>
        <GameInput
          sameData={sameData}
          focus={2}
          data={size.Y}
          text={'Высота'}
          setData={(data:number)=>setSize({...size, Y: data})}/>
      </View>
      <View style={styles.inputView}>
        <GameInput
          sameData={sameData}
          focus={3}
          data={bombs.X}
          text={'Бомбы'}
          setData={(data:number)=>setBombs({...bombs, X: data})}/>
        <GameInput
          sameData={sameData}
          focus={4}
          data={times.X}
          text={'Время'}
          setData={(data:number)=>setTimes({...times, X: data})}/>
      </View>
    </View>
  )
}