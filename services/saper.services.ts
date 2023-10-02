export const saperServices = {
  checkBomb(idX:number, id:number, fieldX:any) {
    let countBomb = 0
    if (fieldX[idX-1]?.row[id-1]?.bomb) {
      countBomb++
    }
    if (fieldX[idX-1]?.row[id]?.bomb) {
      countBomb++
    }
    if (fieldX[idX-1]?.row[id+1]?.bomb) {
      countBomb++
    }
    if (fieldX[idX]?.row[id-1]?.bomb) {
      countBomb++
    }
    if (fieldX[idX]?.row[id+1]?.bomb) {
      countBomb++
    }
    if (fieldX[idX+1]?.row[id-1]?.bomb) {
      countBomb++
    }
    if (fieldX[idX+1]?.row[id]?.bomb) {
      countBomb++
    }
    if (fieldX[idX+1]?.row[id+1]?.bomb) {
      countBomb++
    }
    return countBomb
  },
  checkAround(idX:number, id:number, fieldX: any, stack:any) {
    const aroundCells = [
      { idX: idX - 1, id: id - 1 },
      { idX: idX - 1, id },
      { idX: idX - 1, id: id + 1 },
      { idX, id: id - 1 },
      { idX, id: id + 1 },
      { idX: idX + 1, id: id - 1 },
      { idX: idX + 1, id },
      { idX: idX + 1, id: id + 1 },
    ]
    stack.push(...aroundCells.filter(cell => (
      cell.idX >= 0 &&
      cell.idX < fieldX.length &&
      cell.id >= 0 &&
      cell.id < fieldX[cell.idX]?.row.length &&
      !fieldX[cell.idX].row[cell.id].click
    )))
    return stack
  }
}