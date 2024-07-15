// First Program - Division
function Division(){
    for(let i=1;i<=100;i++)
    {
        if(i%3==0 && i%5==0)
            console.log("FIZZBUZZ");
        else if(i%3==0)
            console.log("fizz")
        else if(i%5==0)
            console.log("buzz")
        else
            console.log(i)
    }
}
Division();


// Second Program-Palindrome
function Palindrome(str){
    let str1=str.split(' ').reverse().join(' ');
    if(str==str1){
        console.log("Palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}
let str="MADAM";
Palindrome(str);



//Third Program - Array
function Array(arr){
    let max=-10000000
    for(let i=0;i<arr.length;i++){
            if(arr[i]>max)
                max=arr[i];
    }
    console.log("Maximum number in an array is",max);
}
let arr=[23,65,34,9,70,25,56,89,24,78]
Array(arr);


// Fourth Program - String with key value pair
function Pair(str){
      let str1={}
      for(let i=0;i<str.length;i++){
        if(str1[str[i]]){
            str1[str[i]]+=1;
        }
        else{
            str1[str[i]]=1;
        }
      }
      return str1;
}
let str="Hello World";
console.log(Pair(str));



// Fifth Program - Longest word in a string
function Longest(str){
    let arr=str.split(' ')
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max.length){
            max=arr[i];
        }
    }
    console.log(max);
}
let str="JavaScript program"
Longest(str)


// Sixth Program - Factorial
function Num(num){
    let fact=1;
    let i;
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact
}
let n=10;
console.log("Factorial of a given number is")
console.log(Num(n))


// Seventh Program - Celsius to Frahrenheit
function Convert(n){
    let Fah=n*1.8+32;
    console.log("Fahrenheit value from celsius is",Fah)
}
let cel=40;
Convert(cel)


// Eight Program - Missing Value
function Missing(arr){
    let miss;
    for(let i=1;i<arr.length;i++)//1
    {
        if(arr[i]!=arr[i-1]+1)//1 0
            miss=arr[i]-1;
    }
    console.log("Missing value in a given array is",miss)
}
let array=[0,1,2,3,4,6,7,8,9,10,11,12,13,14,15]
Missing(array)
