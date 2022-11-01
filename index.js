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

// const titleCased = () => {
//   const changeToTitleCase = str => {
//     return str = str.toLowerCase().split('').map(function(word) {
//       return word.replace(word[0], word [0].toUpperCase())
//     }).join('')
//   }
//   return changeToTitleCase
// }

const titleCased = () => {
  const newTutorials = tutorials.map((sentence) => {
    const words = sentence.split(' ')
    const titleCaseWords = words.map((word) => word[0].toUpperCase() + word.substring(1))
    const titleCaseSentence = titleCaseWords.join(' ')
    return titleCaseSentence
  })
  return newTutorials
}


//Write a funciton that selects first letter of each word in the string using split()