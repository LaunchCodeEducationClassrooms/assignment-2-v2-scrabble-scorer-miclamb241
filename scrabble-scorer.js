// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) 
{
  word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("\nLet's play some scrabble! Enter a word: ");

   word = word.toLowerCase();

  return word;
};

function scrabbleScore(word)
{
  word = word.toLowerCase();
  word = word.split('');
  let sPoints = 0;

  for(let i = 0; i < word.length; i++)
    {
      for(items in newPointStructure)
      {
        if(items === word[i])
          {
            sPoints += newPointStructure[items];
          }
      }
    }

  return sPoints;
}

function transform(oldPointStructure) 
{
  let newObject = [];

  for(items in oldPointStructure)
    {
      for(i = 0; i < oldPointStructure[items].length; i++)
      {
        let letters = oldPointStructure[items][i];
        letters = letters.toLowerCase();
        newObject[letters] = Number(items);
      }
    }
  return newObject;
};

let newPointStructure = transform(oldPointStructure);

function simpleScore(word)
  {
    return word.length;
  }

function vowelBonusScore(word)
  {
    let vowel = 0;

    for(let i = 0; i < word.length; i++)
      {
        if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u')
          {
            vowel += 3;
          }
          else 
            {
              vowel += 1;
            }
      }
    return vowel;
  }

let scoringAlgorithms =
[ 
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Vowel Bonus",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm",
    scoringFunction: scrabbleScore
  }
]

function scorerPrompt() 
{
  console.log("\nWhich scoring algorithm would you like to use?\n");

  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system")

  let userInput = input.question("Enter 0, 1, or 2: ");

  if(userInput === "0")
    {
      console.log("\nAlgorithm name: " + scoringAlgorithms[0].name);

      console.log("Score for '" + word + "': " + scoringAlgorithms[0].scoringFunction(word))
    }
    else if(userInput === "1")
      {
        console.log("\nAlgorithm name: " + scoringAlgorithms[1].name);

        console.log("Score for '" + word + "': " + scoringAlgorithms[1].scoringFunction(word));
      }
      else if(userInput === "2")
        {
          console.log("\nAlgorithm name: " + scoringAlgorithms[2].name);

          console.log("Score for '" + word + "': " + scoringAlgorithms[2].scoringFunction(word));
        }
}

function runProgram() 
{
  console.clear();

  initialPrompt();

  scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};