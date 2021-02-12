//we can calculate the length of the string.

// var text = 'Hello My Name is Yash Shrivastava';
// console.log(text.length); //lenght of the text is 33.

//we can count the index of the particular word in the sentence.

// var text = 'Hello My Name is Yash Shrivastava';
// console.log(text.indexOf('Yash'));

//In JavaScript Index starts from 0.

var text = "Hello Yash Say 'Hello'!"
console.log(text.lastIndexOf('Hello'));

//Lastindex starts from backward.

var sentence = 'Hi future Millinior';
console.log(sentence.lastIndexOf('future',12));

//we can also search the specific word in the sentence.

var text = 'Hello My Name is Yash Shrivastava';
console.log(text.search('Name'));

//slicing.With this method we can slice a part of sentence and return the extracted part.

// var sen = 'If a parameter is negative, the position is counted from the end of the string.'
// console.log(sen.slice(6,));

//substring. It is same as slicing but cannot take negative index.
var sen = 'If a parameter is negative, the position is counted from the end of the string.'
console.log(sen.substring(10,20));

//replacing any word in the sentence.

var word = 'Hello My name is Prince';
console.log(word.replace('Prince','Yash'));//Replace only replaces the first occurance.

var word_1 = 'Hello My friend Hello';
console.log(word_1.replace('Hello','Hi'));

//To replace all the words from the sentence we can use /g.

var word_2 ='Hello yash Hello';
console.log(word_2.replace(/Hello/g,'Hi'));

//we can convert the text to uppercase and lowercase.

var sentence1 = 'Hello I got a new car';
console.log(sentence1.toUpperCase());
console.log(sentence1.toLowerCase());

//other way of concatenating the words is by using the concatinating method.

var sen2 = 'Hello'
console.log(sen2.concat(" "),'Yash');

//we can also trim the unwanted space in our sentence.

var word_3 = '   Hello Yash Shrivastava';
console.log(word_3.trim());

//spliting the strings to make an array.

var word4 = 'Hello Yash Shrivastava';
console.log(word4.split());//It will return an array.
console.log(word4.split(""));//it will return the array with spaces between them.