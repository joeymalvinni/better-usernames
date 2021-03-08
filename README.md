# Random Usernames
This module generates random usernames by combining different words.

Usage: 
  
  
  
```js
let output = generateUsername({
    // Setting the order of the outputted words
    order: ["possibly", "adjectives", "nouns", "numbers"],
    // Only capitalize nouns
    capitalize: ["nouns"],
    // Seperates the words with an underscore
    separator: '_',
    // Special formatting done to each individual word
    wordFormatter: (word) => word.replaceAll('o', '0'),
    // Special formatting done to the entire string
    formatter: (str) => str.split('_'),
    // Enables the addition of custom words in the order, e.g. "Pretty" or "true" or "Random"
    customWords: true,
})

console.log(output) // => [ 'p0ssibly', 'c0nservati0n', 'Gridl0ck', '1425' ]

// Generate a username using verbs and adverbs

let output2 = generateUsername({
    // Setting the order of the outputted words
    order: ["Cool", "verbs", "adverbs", "numbers"],
    // Only capitalize nouns
    capitalize: ["adverbs"],
    // Seperates the words with an underscore
    separator: '_',
    // Special formatting done to each individual word
    wordFormatter: (word) => word.replaceAll('o', '0'),
    // Special formatting done to the entire string
    formatter: (str) => str.split('_'),
    // Enables the addition of custom words in the order, e.g. "Exotic" or "Cool" or "Nice"
    customWords: true,
})

console.log(output2) // => [ 'c00l', 'fraudulent', 'R0adbl0ck', '7586' ]

// Generate a username without any parameters
let output3 = generateUsername()

console.log(output3) // => DiscerningSquid4
```