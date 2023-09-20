import { styles } from '../styles/styles'
import { View, Text } from "react-native"

export default function Cell({cell}) {
  return(
    <View style={styles.cell}>
      <Text>{cell.id}</Text>
    </View>
  )
}
