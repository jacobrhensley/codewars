// Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
    if(num <= 3){
      str = str.length <= num ? str : str.slice(0, num) + '...';
    }else{
      str = str.length <= num ? str : str.slice(0, num - 3) + '...';
    }
    return str;
  }

//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

function arrayDiff(a, b) {
    let difference = a.filter(x => !b.includes(x));
    return difference
  }

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let characterArray = str.split("")
         return characterArray.map(character => {
             if(/[aeiouAEIOU]/.test(character)){
                character = ""
             } else {return character}
         }).join("")
    str = characterArray;
    return str;
  }

//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let numArray = n.toString().split('');
    return parseInt(numArray.sort((a, b) => b - a).join(''));
  }