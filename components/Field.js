import { styles } from '../styles/styles'
import { View, Text } from "react-native"
import Cell from './Cell'

export default function Field({field}) {
  return(
    <View style={styles.field}>
      {field?.map((cellX)=>{
        return(
          <View style={styles.fieldCellX} key={cellX.id}>{cellX.row.map((cell)=>{
            return(
              <View key={cell.id}>
                <Cell cell = {cell}/>
              </View>
            )
          })}</View>
        )
      })}
    </View>
  )
}
