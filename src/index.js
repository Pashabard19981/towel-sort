
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArray = [];
   if(typeof matrix === 'object'){
     for(let i = 0; i < matrix.length;i++){
      for(let x = 0; x < matrix[i].length;x++){
        if(i % 2 === 0){
          newArray.push(matrix[i][x])
        } else {
          newArray.push(matrix[i][matrix[i].length - x - 1])
        }
      }
    }
   } else {
     return [];
   }
    
  return newArray ;
}














      






