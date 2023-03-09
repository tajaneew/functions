/* Write a function that accept as argument an array of array of numbers, and return the largest number among all of them. Example : largestNumber([ [4, 9, 10, 19, 26, 13, 255, 102], [1, 141, 23, 10, 9, 92], [1, 3, 300, 453, 25, 68] ])

Return : 453 */

/* function largestNumber(arr) {
    for(var i = 0; i < arr.length; i++){
        var largest = [0][0];
        for(var j = 0; j < arr[j].length;j++) {
            if (arr[i][j] > largest) {
                largest[i] = arr[i][j];
            }
        }
    }
    return largest;
}

var largest = largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1]
]);

console.log(largest); */

/* correct one
function Many(LG){
    var largest = Number.NEGATIVE_INFINITY
    for(var i = 0; i < LG.length; i++  ){        
        for (var j = 0; j < LG[i].length; j++){
            if (LG[i][j] > largest){
                largest = LG[i][j];
            }
             
        }
    }
    return largest;
}
    


var largest = Many([
    [-232, -321, -321, -2323], 
    [-10, -321, -675, -233], 
    [-9, -23, -97, -23, -56], 
    
]);

console.log(largest);

*/

// Intro to Scope
let firstName = 'Taj';
let lastName = 'Wells';

if (true) {
    console.log(firstName);
}
