/**
@noparmas
return xyzxy-xyzxy-xyzxy   
detail -random string

*/

function passcodeGenerator(){
const genrateNum=(min, max)=>Math.floor(Math.random() * (max - min) + min);
  
  
  const stringArray = []
  let emptyString=""
 const LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for(let i=0; i<5; i++){
    for(let j=1;j<=genrateNum(4,10);j++){
      emptyString+= LETTERS[genrateNum(0,42)] 
    }
    stringArray.push(emptyString)
    emptyString=''
}
  console.log(stringArray)
  let randomString = stringArray.join('-')
  
 return randomString
}
passcodeGenerator()