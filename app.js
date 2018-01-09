function generate (input){
  let arr = []
  let count = 1
  for(let i = 0;i<input;i++){
    arr.push([])
  }
  return arr
}
let masukan = generate(10)
function solve(masukan,input){
  let count = 1
  for(let i = masukan.length-1;i >= 0;i--){
    if(i%2 !== 0){
      for(let j = 0;j < input;j++){
      masukan[i].push(count)
      count++
    }
    }else {
      count2 =  (count-1) + input

       for(let j = input;j > 0;j--){
        masukan[i].push(count2)
        count2--
        count++

    }
    }

  }

  console.log(masukan)
}
solve(masukan,10)
// console.log(generate(5))
