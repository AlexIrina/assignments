/*
 * TDD (Test Driven Development, aka Red Green testing)
 * Test Driven Development is a method in writing code that requires you to write your test before writing your function.
 * At first the test will fail producing a "red" failed test in the console.
 * As you develop the function, you are shooting for all "green" in the console meaning all your tests have passed.
 */

const sum = (num1, num2) => {
  return num1 + num2;
};

//Test Driven Development
const actual = sum(10, 10);
const expected = 20;

if (actual !== expected) {
  throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}`);
} else {
  console.log(`TEST PASSED: ${expected} === ${actual}`);
}
