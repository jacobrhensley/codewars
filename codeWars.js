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

//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(words){
  let arr = words.split(' ');
   for(let i = 0; i < arr.length; i++){
     if(arr[i].length > 4){
     arr[i] = arr[i].split('').reverse().join('')
     }
   };
   
   return arr.join(' ');
 }



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)




 function solution(number){
  let count = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 == 0 || i % 5 == 0){
        count += i;
    }
  }
  return count;
}


// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// OR

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}