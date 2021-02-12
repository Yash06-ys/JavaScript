//Objects are just like variables which can store multiple data values.

var person = {name :'Yash Shrivastava',age : 21,gender : 'Male'};
console.log(person);

//The object will be displayed itself.
//We can also access particular values from the object.

var person = {name:"Yash Shrivastava",age:21,gender:"Male"};
console.log(person['age']); //This will fetch us the person age only.

var car = {name:'Audi',color:'Black',price:'2.6cr',model_no:'YS06'};
console.log(car['name'],car['color'],car['model_no']);//This way you can fetch multiple data from the object.