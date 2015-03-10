// Have the function powersOfTwo(nums) take the num parameter being passed which will be an integer and return the string true
// if it's a power of two. If it's not return the string false.

// For example if the input is 16 then your program should return the string true
// but if the input is 22 then the output should be the string false.

// Examples:
// Input = 4       Output = "true"
// Input = 124     Output = "false"

function powersOfTwo(nums){
	var num = 1;

	for (var i = 0; i = nums.length; i++){
		if (nums <= 0)
			return false
	}

	while(2*num <= nums){
		if (2*num == nums){
			return true;
		}
		num += 1
	}
	return false;
}

var numbersTrue = 64;
var numbersFalse = 65;
var numbersEdge = -64;
debug(powersOfTwo(numbersTrue))
debug(powersOfTwo(numbersFalse))
debug(powersOfTwo(numbersEdge))