module.exports = function toReadable (number) {
    let num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let num10to20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let num20to100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number >=0 && number < 10){
       return num[number];
    } 
    
    if (number >= 10 && number < 20){
    return num10to20[number%10]
    }
    
    if(number >= 20 && number < 100){
        let num10 = num20to100[Math.floor(number / 10)];
     let num1 = num[number % 10];
     
     if ( num1 === 'zero'){
     return num10
     }else{
         return `${num10} ${num1}`
     }
  }
  
  if(number >= 100 && number < 1000){
          let num100 = `${num[Math.floor(number / 100)]} hundred`; 
          let num10 = (Math.floor(number/10))%10;
          let num1 = num[number % 10];
     
     
     if (num10 === 0) {
        num10 = "";
      } else if (num10 < 2) {
        num10 = ` ${num10to20[number%10]}`;
       	num1 = "zero";
      } else {
        num10 = ` ${num20to100[num10]}`;
      }
      
       if (num1 === "zero") {
        return `${num100}${num10}`;
      } else {
        return `${num100}${num10} ${num1}`;
      }
   }
}
