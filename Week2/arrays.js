let ar = [2,1,5,6,7]
console.log(ar)
console.log(ar[2])
console.log(ar[-1])
let ar1 = ['one','Five','three']
console.log(ar1)
console.log(ar1[2])
console.log(ar1[-1])
console.log(ar1[5])
console.log(ar1.length-1)
let arr = [true,undefined,'bhavya',579,true,null,[4,6]]
console.log(arr[5])
arr[3]=Boolean
console.log(arr)
console.log(arr.length)
//ARRAY METHODS
arr.push(0)
console.log(arr)
arr.unshift(undefined)
console.log(arr)
arr.pop(2)//removes the last element only if we give value also
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.slice())
console.log(arr.slice(-1))
console.log(arr.slice(-4,2))
console.log(arr.slice(2,5))
console.log(arr.slice(1,2))
console.log(arr)
console.log()
console.log(arr.splice(1,2))
console.log(arr.splice(-3,2))
console.log(arr.splice(1,2,'john',[56,77]),2)
console.log(arr)
console.log(arr.includes(5))
console.log(arr)
console.log(arr.includes(true))
console.log(arr.indexOf(2))
console.log(arr.indexOf(true))
console.log(arr.indexOf('john'))
let fruits = ['apple','orange','banana','grapes','orange']
console.log(fruits.lastIndexOf('orange'))
console.log(fruits.join(7))
console.log(fruits.join(' '))
console.log(fruits.reverse())
console.log(fruits)
console.log(fruits.sort())


let x= [10,20,'bhavya',30];
x.forEach(num=>{
    console.log(num);
})

let x1= [10,true,12,13,14,15];
let double = x1.map (num => num*2)
console.log(double);

let numbers = [10, 15, 20, 25, 30];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

let numbers1 = [5, 8, 12, 15, 20];
let result = numbers1.find(num => num > 10);
console.log(result);

let number = [10, 20, 30, 40];
let index = number.findIndex(num => num > 25);
console.log(index);

let ages = [12, 15, 17, 20];
let answer = ages.some(age => age >= 18);
console.log(answer);

let ages1 = [18, 20, 25, 30];
let ans = ages1.every(age => age >= 18);
console.log(ans);

let numb = [5, 10, 3, 25, 8];
let max = numb.reduce((acc, curr) =>
    curr > acc ? curr : acc
);
console.log(max);


