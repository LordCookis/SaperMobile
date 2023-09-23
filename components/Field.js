import { styles } from '../styles/styles'
import { View, Text, Pressable } from "react-native"

export default function Field({field, setField, bombs, executed}) {
  const randomBomb = (cell) => {
    console.log(123)
    const arrayBombs = []
    while (arrayBombs.length < bombs) {
      const randomCell = Math.floor(Math.random() * (field.length * field[0].row.length))
      randomCell !== cell.id && !arrayBombs.includes(randomCell) ? arrayBombs.push(randomCell) : null
      console.log(arrayBombs)
    }
    const fieldX = [...field]
    fieldX.map((rowX) => {
      rowX.row.map((cellX) => arrayBombs.includes(cellX.id) ? cellX.bomb = true : null)
    })
    console.log(fieldX)
    setField(fieldX)
  }
//
  const checkCell = (cell, idX, id) => {
    console.log(cell)
    cell.click = true
    const fieldX = [...field]
    fieldX[idX].row[id].click = true
  //  let stack = [{idX, id}]
  //  while (stack.length > 0) {
  //    const {idX, id} = stack.pop()
  //    fieldX[idX].array[id].click = true
  //    fieldX[idX].array[id].countBomb = services.saper.checkBomb(idX, id, fieldX)
  //    if (fieldX[idX].array[id].bomb) {
  //      fieldX[idX].array[id].countBomb = 0
  //      fieldX.forEach((arrayX) => {arrayX.array.forEach((cellX) => {cellX.bomb ? cellX.click = true : null})})
  //      setWin(2)
  //      winX.current = 2
  //    } else if (!fieldX[idX].array[id].countBomb) {    
  //      stack = services.saper.checkAround(idX, id, fieldX, stack)
  //    }
  //  }
    setField(fieldX)
  }

  const cellClick = (idX, id) => {
    let cell = field[idX].row[id]
    if (!executed.current) {
      executed.current = true
      randomBomb(cell)
    }
    if (!cell.flag && !cell.click) { checkCell(cell, idX, id) }
  }

  return(
    <View style={styles.field}>
      {field?.map((cellX, indexX)=>{
        return(
          <View style={styles.fieldCellX} key={cellX.id}>{cellX.row.map((cell, index)=>{
            return(
              <Pressable onPress={()=>cellClick(indexX, index)}>
                <View style={cell.click && cell.bomb ? styles.cellB : 
                  cell.click && cell.countBomb === 0 ? styles.cellC : 
                  cell.click && cell.countBomb === 1 ? styles.cell1 : 
                  cell.click && cell.countBomb === 2 ? styles.cell2 : 
                  cell.click && cell.countBomb === 3 ? styles.cell3 : 
                  cell.click && cell.countBomb === 4 ? styles.cell4 : 
                  cell.click && cell.countBomb === 5 ? styles.cell5 : 
                  cell.click && cell.countBomb === 6 ? styles.cell6 : 
                  cell.click && cell.countBomb === 7 ? styles.cell7 : 
                  cell.click && cell.countBomb === 8 ? styles.cell8 : 
                  cell.flag === true ? styles.flag :
                  styles.cell} key={cell.id}>
                  <Text>{cell.bomb ? "1" : "0"}</Text>
                </View>
              </Pressable>
            )
          })}</View>
        )
      })}
    </View>
  )
}
