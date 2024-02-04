export const cellColor = (cell:{id: number, bomb: boolean, click: boolean, countBomb: number, flag: boolean}) => {
  if (cell.click && cell.bomb) { return '#e66969' }
  else if (cell.click && cell.countBomb === 0) { return '#69dbe6' }
  else if (cell.click && cell.countBomb === 1) { return '#4470e7' }
  else if (cell.click && cell.countBomb === 2) { return '#4bc04b' }
  else if (cell.click && cell.countBomb === 3) { return '#bb4848' }
  else if (cell.click && cell.countBomb === 4) { return '#243c69' }
  else if (cell.click && cell.countBomb === 5) { return '#e6a569' }
  else if (cell.click && cell.countBomb === 6) { return '#46b9b4' }
  else if (cell.click && cell.countBomb === 7) { return '#353535' }
  else if (cell.click && cell.countBomb === 8) { return '#e669dc' }
  else if (cell.flag) { return '#516368' }
  else { return '#c6e6e9' }
}