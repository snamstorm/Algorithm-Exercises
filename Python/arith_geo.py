# Using the Python language, have the function arith_geo(lst) take the list of numbers stored in lst and
# return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric"
# if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

# An arithmetic sequence is one where the difference between each of the numbers is consistent,
# where as in a geometric sequence, each term after the first is multiplied by some constant or
# common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
# Negative numbers may be entered as parameters, 0 will not be entered, and no list will contain all the same elements.

# Input = 5,10,15 Output = "Arithmetic"
# Input = 2,4,16,24 Output = -1

def arith_geo(lst):
	if len(lst) <= 1:
		return -1

	if arithmetic(lst):
		return "Is Arithmetic"
	if geometric(lst):
		return "Is Geometric"
	else:
		return -1

def arithmetic(lists):
	last_diff = None

	for l in range(1, len(lists)):
		diff = lists[l] - lists[l-1]

		if last_diff != None and last_diff != diff:
			return False
		last_diff = diff
	return True

def geometric(lists):
	last_ratio = None

	for l in range(1, len(lists)):
		ratio = lists[l] / lists[l-1]

		if last_ratio != None and last_ratio != ratio:
			return False
		last_ratio = ratio
	return True	

arithmetic_list = [5, 10, 15]
geometric_list = [2, 4, 8, 16]
non_arithgeo = [2, 5, 4, 6]
print arith_geo(arithmetic_list)
print arith_geo(geometric_list)
print arith_geo(non_arithgeo)