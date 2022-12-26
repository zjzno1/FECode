var arr = [1,2,[3,4,[5,6,7,[8]]]];


// function flat (arr) {
  
// }

// arr.reduce((newArr = [], item, index, arr) => {
//   if (item instanceof Array) {
//     newArr.s
//   } else {
//     newArr.push(item);
//   }
// })

function fn(arr){
  let arr1 = []
  arr.forEach((val)=>{
      if(val instanceof Array){
          arr1 = arr1.concat(fn(val))
      }else{
          arr1.push(val)
      }
   })
   return arr1
}

console.log(fn(arr));
