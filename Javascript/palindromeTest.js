// Have the function palindromeTest(str) take the str parameter being passed and return the string true
// if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
// The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.

// Some sample palindromes for testing:
  // "Anne, I vote more cars race Rome-to-Vienna"
  // "Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."
  // "Live not on evil, madam, live not on evil."
  // "Too bad, I hid a boot."

function palindromeTest(str){

	var firstArray = str.toLowerCase().match(/[A-Za-z]/gi);
	var first = firstArray.join();
	var second = firstArray.reverse().join();

	if (first == second) {
		debug("This is a palindrome");
		return true;
	}
	else {
		debug("This is not a palindrome");
		return false;
	}
}

var palindrome = "Anne, I vote more cars race Rome-to-Vienna"
var nonPalindrome = "Annes, I votes mores cars race Rome-to-Vienna"
debug(palindromeTest(palindrome))
debug(palindromeTest(nonPalindrome))