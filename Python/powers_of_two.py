# Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. 

# For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 

# Examples:
# Input = 4       Output = "true"
# Input = 124     Output = "false"

def powers_of_two(number):
	n = 1
	
	while (2**n <= number):
		if (2**n == number):
			return True
		n += 1
	return False

nums_power = 64
nums = 65
print powers_of_two(nums_power)
print powers_of_two(nums)