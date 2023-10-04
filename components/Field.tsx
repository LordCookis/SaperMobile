import { styles } from '../styles/styles'
import * as React from 'react'
import { useState } from 'react'
import { View, Pressable } from "react-native"
import { services } from '../services'

export default function Field({field, setField, bombs, executed, winX, setWin}:any) {
  interface Flag {X: number, Y: number}
  const [flags, setFlags] = useState<Flag>({X: 0, Y: 0})

  const randomBomb = (cell:any) => {
    const arrayBombs:any = []
    while (arrayBombs.length < bombs.Y) {
      const randomCell = Math.floor(Math.random() * (field.length * field[0].row.length))
      randomCell !== cell.id && !arrayBombs.includes(randomCell) ? arrayBombs.push(randomCell) : null
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
      const {idX, id} = stack.pop()!
      fieldX[idX].row[id].click = true
      fieldX[idX].row[id].countBomb = services.saper.checkBomb(idX, id, fieldX)
      if (fieldX[idX].row[id].bomb) {
        fieldX[idX].row[id].countBomb = 0
        fieldX.forEach((rowX: any) => {rowX.row.forEach((cellX: any) => {cellX.bomb ? cellX.click = true : null})})
        setWin(2)
        winX.current = 2
      } else if (!fieldX[idX].row[id].countBomb) {    
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

  const putFlag = (cell:any) => {
    if (!cell.click && executed.current) {
      const fieldX:any = [...field]
      if (cell.flag) {
        cell.flag = false
        setFlags({...flags, Y: flags.X - 1})
        cell.bomb ? setFlags({...flags, Y: flags.Y - 1}) : null 
      } else {
        cell.flag = true
        setFlags({...flags, Y: flags.X + 1})
        cell.bomb ? setFlags({...flags, Y: flags.Y + 1}) : null
      }
      setField(fieldX)
    }
  }

  return(
    <View style={styles.field}>
      {field?.map((cellX:any, indexX:number)=>{
        return(
          <View style={styles.fieldCellX} key={cellX.id}>{cellX.row.map((cell:any, index:number)=>{
            return(
              <Pressable onPress={()=>cellClick(indexX, index)} onLongPress={()=>putFlag(cell, indexX, index)} delayLongPress={300}>
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
                  {cell.countBomb}
                </View>
              </Pressable>
            )
          })}</View>
        )
      })}
    </View>
  )
}
