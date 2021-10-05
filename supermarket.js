//Homework
//----------------------- Lesson 4 ---------------
//if... else
//switch
//math methods


//Write a program that will Print a next customer receipt 

// ------------------------------------
// SaveMart Receipt                         <= name of the store
// 123 Main Street                          <= store address
// San Jose CA 95135
// Oven Joy Bread                  1.98  <= item's name and total price
//   0.99 at 2.0                         <= price for 1 item and amount of items
// Lucerne Milk                    2.29
//   2.29 at 1.0
// Hormel Chili with Beans         3.87
//   1.29 at 3.0
// 12-pack Blue Moon              12.99
//   12.99 at 1.0
// Organic Navel Oranges           3.73 <= price for 1kg and amount of kg
//   1.49 at 2.5
// Granny Smith Apples             1.74
//   1.09 at 1.6
// Tillamook Greek Yogurt          6.00
//   1.0 at 6.0
// SUBTOTAL:                      32.60 <= Total for all items
// CLUBCARD Saving 5%              1.63 <= 5% discount
// TAX 8.75%                       2.71 <= Tax on total minus discount
// TOTAL:                         33.68 <= Total after tax and discount
// ------------------------------------ 

console.log('----------------------------');
console.log('SaveMart Receipt \n 123 Main Street \n San Jose CA 95135');

let bread = "Oven Joy Bread";
let breadAmount = 2;
let breadPrice = 0.99;
let breadTotalPrice = breadAmount * breadPrice;
console.log(bread + '          ' + breadTotalPrice);
let milk = "Lucerne Milk";
let milkAmount = 1;
let milkPrice = 2.29;
let milkTotalPrice = milkAmount * milkPrice;
console.log(milk + '            ' + milkTotalPrice);
let chili = "Hormel Chili\n with Beans";
let chiliAmount = 1.29;
let chiliPrice = 3;
let chiliTotalPrice = chiliAmount * chiliPrice;
console.log(chili + '              ' + chiliTotalPrice);
let moon = "12-pack Blue \n Moon";
let moonAmount = 1;
let moonPrice = 12.99;
let moonTotalPrice = moonAmount * moonPrice;
console.log(moon + '                    ' + moonTotalPrice );
let oranges = "Organic Navel\n Oranges";
let orangesAmount = 2.5;
let orangesPrice = 1.49;
let orangesTotalPrice =(orangesAmount * orangesPrice);
console.log(oranges + '                 ' + orangesTotalPrice.toFixed(2));
let apples = "Granny Smith Apples";
let applesAmount = 1.6;
let applesPrice = 1.09;
let applesTotalPrice = applesAmount * applesPrice;
console.log(apples + '     ' + applesTotalPrice.toFixed(2));
let yogurt = "Tillamook Greek \n Yogurt";
let yogurtAmount = 1;
let yogurtPrice = 6.0;
let yogurtTotalPrice = yogurtAmount * yogurtPrice;
console.log(yogurt + '                  ' + yogurtTotalPrice);
let subtotal = breadTotalPrice + milkTotalPrice + chiliTotalPrice + moonTotalPrice + orangesTotalPrice +applesTotalPrice + yogurtTotalPrice;
console.log('SUBTOTAL:'+ '               ' + subtotal.toFixed(2));
let diskount = 5;
let club = subtotal*5/100;
console.log("CLUBCARD:" + '               ' + club.toFixed(2));

let priceAfterDiskount = subtotal - club ;

let tax = 8.75;
let priceTax = priceAfterDiskount * 8.75/100
console.log('TAX:' + '                    ' + priceTax.toFixed(2));

let priceTotal = priceAfterDiskount + priceTax;
console.log('TOTAL:' + '                  ' + priceTotal.toFixed(2));

if (priceTotal > 200) {
    console.log (`You do not have enough money on your card, you need extra ${(priceTotal-30).toFixed(2)}`); 
} else {
  console.log('Have a nice day!');
  
}
   
console.log("____________________________");





//Add a check for a price at the end
//if total is bigger that $30, print 'You do not have enough money on your card, 
//you need extra ${calculate here how much you need extra}'
// else print 'Have a nice day!'


