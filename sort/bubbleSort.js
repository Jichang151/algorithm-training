  //冒泡排序
let bubbleSort = arr => {
  for(let i = arr.length - 1,temp; i > 0; i--){  // 每一次比较的数组长度
    for(let j = 0; j < i; j++){
      temp = arr[j]
      if(temp > arr[j + 1]){
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([19,87,12,53,1,9]))