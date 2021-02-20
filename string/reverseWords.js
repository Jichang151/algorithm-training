// 557. 反转字符串中的单词 III
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例：

// 输入："Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
//  

// 提示：

// 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

// 方案一：
// const reverseWords = s => {
//   let arr = s.split(' ')
//   let res = [];
//   arr.forEach(item => {
//     let str = item.split('').reverse().join('')
//     res.push(str)
//   });
//   return res.join(' ')
// }

// 方案二：
const reverseWords = s => {
  // let arr = s.split(' ')
  // let newArr = arr.map(item => item.split('').reverse().join(''))
  // return newArr.join(' ')

  // return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')

  // return s.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
  
  return s.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
}

let str = "Let's take LeetCode contest"
console.log(reverseWords(str))