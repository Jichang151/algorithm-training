// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]
//  

// 提示：

// 0 <= digits.length <= 4
// digits[i] 是范围 ['2', '9'] 的一个数字。


let letterCombinations = s => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 23 => [2, 3]
  let num = s.split('')
  // [2, 3] => ['abc', 'def']
  let code = []
  num.forEach(item => {
    code.push(map[item])
  })

  let comp = arr => {
    let res = []  // 临时变量，用来保存前两项结果
    if(arr.length < 2) return res;
    for(let i = 0; i < arr[0].length; i++){
      for(let j = 0; j < arr[1].length; j++){
        res.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, res)
    if(arr.length > 1) comp(arr)
    return arr[0]
  }
  console.log(comp(code))
  return comp(code)
}
letterCombinations('23')