import { styles } from '../styles/styles'
import * as React from 'react'
import { View, Text, Pressable } from "react-native"
import { services } from '../services'

export default function Field({field, setField, bombs, executed, winX, setWin}:any) {
  const randomBomb = (cell:any) => {
    const arrayBombs:any = []
    while (arrayBombs.length < bombs.Y) {
      const randomCell = Math.floor(Math.random() * (field.length * field[0].row.length))
      randomCell !== cell.id && !arrayBombs.includes(randomCell) ? arrayBombs.push(randomCell) : null
      console.log(arrayBombs)
    }
    const fieldX = [...field]
    fieldX.map((rowX) => {
      rowX.row.map((cellX:any) => arrayBombs.includes(cellX.id) ? cellX.bomb = true : null)
    })
    setField(fieldX)
  }

  const checkCell = (idX:number, id:number) => {
    const fieldX:any = [...field]
    fieldX[idX].row[id].click = true
    let stack:{idX:number; id:number}[] = [{idX, id}]
    while (stack.length > 0) {
      console.log(1)
      const {idX, id} = stack.pop()!
      fieldX[idX].array[id].click = true
      fieldX[idX].array[id].countBomb = services.saper.checkBomb(idX, id, fieldX)
      if (fieldX[idX].array[id].bomb) {
        fieldX[idX].array[id].countBomb = 0
        fieldX.forEach((arrayX: any) => {arrayX.array.forEach((cellX: any) => {cellX.bomb ? cellX.click = true : null})})
        setWin(2)
        winX.current = 2
      } else if (!fieldX[idX].array[id].countBomb) {    
        stack = services.saper.checkAround(idX, id, fieldX, stack)
      }
    }
    setField(fieldX)
  }

  const cellClick = (idX:number, id:number) => {
    let cell = field[idX].row[id]
    if (!executed.current) {
      executed.current = true
      randomBomb(cell)
    }
    if (!cell.flag && !cell.click) { checkCell(idX, id) }
  }

  return(
    <View style={styles.field}>
      {field?.map((cellX:any, indexX:number)=>{
        return(
          <View style={styles.fieldCellX} key={cellX.id}>{cellX.row.map((cell:any, index:number)=>{
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
                  cell.flag === true ? styles.cellF :
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
