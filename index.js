function isPalindrome(word) {
  // Write your algorithm here
  const lowerWord = word.toLowerCase();
  return lowerWord === lowerWord.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  FUNCTION isPalindrome(word):
  lowerWord = CONVERT word TO LOWERCASE
  reversedWord = REVERSE lowerWord
  IF lowerWord EQUALS reversedWord:
    RETURN true
  ELSE:
    RETURN false
*/

/*
  Add written explanation of your solution here
    First, we convert the word to lowercase to handle case insensitivity (though the test cases don't show this need, it's good practice).

    We split the word into an array of characters using split('').

    We reverse the array using reverse().

    We join the reversed array back into a string using join('').

    Finally, we compare the original word (lowercased) with the reversed word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
