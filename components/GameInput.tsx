import { styles } from '../styles/styles'
import { useEffect } from 'react'
import { TextInput } from "react-native"

export default function GameInput({sameData, focus, data, text, setData}:any){
  useEffect(()=>{ sameData.setInputFocus(0) }, [sameData.gameActive.current])
  const handleFocus = (input:number) => { sameData.gameActive.current ? sameData.setInputFocus(0) : sameData.setInputFocus(input) }

  return(
    <TextInput
      style={[styles.inputData, sameData.inputFocus === focus ? styles.active : null]}
      value={data}
      placeholder={text}
      placeholderTextColor={'#8aa2a5'}
      inputMode='numeric'
      onChangeText={setData}
      onFocus={()=>handleFocus(focus)}
      editable={!sameData.gameActive.current}
      caretHidden={true}/>
  )
}