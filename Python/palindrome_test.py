# Have the function PalindromeTwo(string) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.

# Some sample palindromes for testing: 
  # "Anne, I vote more cars race Rome-to-Vienna"
  # "Doc, note, I dissent. A fast never prevents a fatness. I diet on cod."
  # "Live not on evil, madam, live not on evil."
  # "Too bad, I hid a boot."

import re

def palindrome_test(string):

	first = re.sub("[^A-Za-z]", "", string).lower()
	second = ''.join(reversed(first))
	
	if first == second:
		print('Yes, this is a palindrome')
		return True
	else:
		print('No, this is not a palindrome')
		return False

palindrome = "Anne, I vote more cars race Rome-to-Vienna"
non_palindrome = "Annes, I votes mores cars race Rome-to-Vienna"
palindrome_test(palindrome)
palindrome_test(non_palindrome)