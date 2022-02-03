
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) { return []; }
  return (matrix.map((number,index)=>(((index+1)%2==0) ? number.reverse() : number)).flat());
}
