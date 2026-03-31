/*

Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5,
"buzz" in place of numbers divisible by 5 but not by 3,
and "fizzbuzz" in place of numbers divisible by both 3 and 5.

fizzbuzz(16);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
11, 'fizz', 13, 14, 'fizzbuzz', 16]

*/

const fizzbuzz = (num: number): (number | string)[] => {
  let result: (number | string)[] = []
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){ result.push("fizzbuzz") }
    else if(i % 3 === 0){ result.push("fizz") }
    else if(i % 5 === 0){ result.push("buzz") }
    else{ result.push(i)}
  }
  return result;
};

/*

Extension: 
Write a function that returns an array containing the numbers 1 to NUM.

Put "fizz" in place of numbers divisible by 3 but not by 5 or 7,
"buzz" in place of numbers divisible by 5 but not by 3 or 7,
"bazz" in place of numbers divisible by 7 but not by 3 or 5,
"fizzbuzz" in place of numbers divisible by 3 and 5 but not 7,
"fizzbazz" in place of numbers divisible by 3 and 7 but not 5,
"buzzbazz" in place of numbers divisible by 5 and 7 but not 3,
and "fizzbuzzbazz" in place of numbers divisible by 3, 5, and 7.

fizzbuzzbazz(25);
-> [1, 2, 'fizz', 4, 'buzz', 'fizz', 'bazz', 8, 'fizz', 'buzz',
11, 'fizz', 13, 'bazz', 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizzbazz', 22,
23, 'fizz', 'buzz']

*/

//instead of checking the condition to push in fizz, buzz or bazz for each index of result,
//it might be simpler to use a placeholder string, fill that out based on the conditons, and push that in if it's not empty

const fizzbuzzbazz = (num: number): (number | string)[] => {
  let result: (number | string)[] = [];
  let hs: string = ''; //a placeholder string variable to fill out

  for(var i = 1; i <= num; i++){
    if(i % 3 === 0){ hs += "fizz" }
    if(i % 5 === 0){ hs += "buzz" } // these if statements fill out the placeholder if the numbers are divisable
    if(i % 7 === 0){ hs += "bazz" } // sorts fizz, buzz and bazz in order

    if(hs === ""){ result.push(i) } //pushed the number if placeholder is empty
    else { result.push(hs) } // pushed the placeholder if it's not empty
    hs = '' // empties out the placeholder for the next loop
  }  
  return result;
};

export { fizzbuzz, fizzbuzzbazz };
