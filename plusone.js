var plusOne = function(digits) {
    

  for(i = digits.length-1; i>=0 ; i--) {
    if(digits[i] != 9) {
      digits[i] += 1
      return digits;
    } else {
      digits[i] = 0
      }
  }
let result = new Array(digits.length+1).fill(0)
result[0]=1
return result
};
