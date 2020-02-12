// // 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y) {
//   //check data types first and throw error
//   // try {
//   //   if (typeof x !== 'number' || typeof y !== 'number') {
//   //     throw new Error(`Data type not number`);
//   //   }
//   // } catch (err) {
//   //   return err;
//   // }
//   // return x + y;

//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error(`Data type not number`);
//   } else {
//     console.log(x + y);
//   }
// }
// // console.log(sum(2, 3));

// // 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// try {
//   sum('1', '2');
//   // throw new Error(`Data type not number`);
// } catch (err) {
//   console.log(err);
// }

// // 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

const user = { username: 'sam', password: '123abc' };
const login = ({ username, password }) => {
  //check credentials
  try {
    if (username !== 'sam') {
      throw new Error(`Username doesn't match!`);
    } else if (password !== '123abc') {
      throw new Error(`Password doesn't match!`);
    }
  } catch (err) {
    return err;
  }
  return `login successful!`;
};

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

try {
  console.log(login(user));
} catch (err) {
  console.log(err);
}
