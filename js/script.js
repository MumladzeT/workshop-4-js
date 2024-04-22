let array = [5, 25, 89, 120, 36];

array.push("javascript", "python");
array.unshift("html", "css");
console.log(number.length);
array.pop();
array.shift()
console.log(array);



let array2 = ["ფორთოხალი", "ბანანი", "მსხალი"]
console.log(array2.length);
array2.push("ვაშლი", "ანანასი");
array2.unshift("საზამთრო");
console.log(array2.length);
console.log(array2);





for (i=100; i>0; i--){
console.log(i);
}





let array3 = [2, 15, 10, 24];
let newArray3 = array3.splice(0, 4);
console.log(newArray3);




let languages = ['html', 'css', 'javascript', 'python', 'php'];
let results = languages.filter((lang) => lang.length > 3);
console.log(results);





let words = ['madrid', 'rome', 'milan', 'berlin'];
let results = words.filter((elem) => elem.includes("m") || elem.includes("n"));
console.log(results);




let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let newArr = arr1.concat(arr2);
let newArr1 = newArr.concat(arr3);
console.log(newArr1);












let arr = [-1, -2, -3, 4];
array.some(function (elem) {
    if (elem < 1) {
        return true;
    }
    else {
        return false;
    }
})










let array7 = [23, 45, 32, 5, 87, 7, 3, 98];
console.log(array7.sort((a, b) => b - a));








