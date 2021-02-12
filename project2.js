//This project is based on operator where we will be calculating the profit and profit percent.

var costprice = 1200;
var sellingprice = 1930;

var profit = (sellingprice - costprice);
console.log('The profit gained is: '+  profit);
console.log(typeof profit);

var profitpercent = ((profit/costprice)*100);
console.log('The profitpercent is :'+ Math.round(profitpercent));
console.log(typeof profitpercent);