// Using the Javascript language, have the function arithGeo(arr) take the list of numbers stored in arr and
// return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric"
// if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

// An arithmetic sequence is one where the difference between each of the numbers is consistent,
// where as in a geometric sequence, each term after the first is multiplied by some constant or
// common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54].
// Negative numbers may be entered as parameters, 0 will not be entered, and no list will contain all the same elements.

// Input = 5,10,15 Output = "Arithmetic"
// Input = 2,4,16,24 Output = -1

function arithGeo(arr){

    if (arr.length <= 1){
        return -1;
    }
    
    function isArithmetic(array) {
    
        var lastdiff = null;

        for (var i = 1; i < array.length; i++) {
            var diff = array[i] - array[i - 1];
            if (lastdiff !== null && lastdiff != diff){
                return false;
            }
            lastdiff = diff;
        }
        return true;
    }

    function isGeometric(array) {

        var lastratio = null;

        for (var i = 1; i < array.length; i++) {
            var ratio = array[i] / array[i - 1];
            if (lastratio !== null && lastratio != ratio){
                return false;
            }
            lastratio = ratio;
        }
        return true;
    }
    if (isGeometric(arr)){
        return "Geometric";
    }
    else if (isArithmetic(arr)){
        return "Arithmetic";
    }
    else {
        return -1;
    }

}
var geometric = [2, 6, 18,];
var arithmetic = [5, 10, 15,];
var nonGeoArith = [2, 12, -18,];
debug(arithGeo(geometric));
debug(arithGeo(arithmetic));
debug(arithGeo(nonGeoArith));