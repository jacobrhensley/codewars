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