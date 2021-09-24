const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased=function (arrayString){
  let mapArray=arrayString.map(function (sentence){
  let splitWord=sentence.split(" ")
  let titleWord=splitWord.map(word=>word[0].toUpperCase()+word.substring(1))
  let joinWord=titleWord.join(" ")
  console.log(joinWord)
  return joinWord;
  
  })
  return mapArray
  console.log(mapArray)
}

titleCased(tutorials)




  

