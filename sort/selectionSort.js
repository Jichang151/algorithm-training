// 选择排序
const selectionSort = arr => {
  for(let i = 0, min, len = arr.length; i < len; i++) {
    min = arr[i]  //min 标记最小值
    for(let j = i + 1; j < len; j++){
      // 当前值比标记的最小值小，则把当前值作为最小值标记
      if(arr[j] < min){
        let flag = min
        min = arr[j]
        arr[j] = flag
      }
    }
    // 找完一遍后，把标记的最小值位置，与起始位置交换
    arr[i] = min
  }
  return arr
}
console.log(selectionSort([12,34,1,5,324,9]))