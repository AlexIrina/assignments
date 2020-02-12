// try lets you try out some code
// if an error is thrown then the TRY block immediately stops and goes to the CATCH.
// Whatever is is thrown goes to the catch block
try {
  if (2 === 2) {
    // throw lets you throw your own errors
    // new Error is needed
    throw new Error(`I am an error`);
  }
  console.log(`This wont show in the console. Because the error was thrown `);
  // if an error occurs this lets you catch an error
} catch (err) {
  // handles the error that was caught
  console.log(err);
} finally {
  // finally will ALWAYS run
  // finally lets you run coded when the try and catch are completed
  // finally lets you execute code even if an error was thrown
  console.log(`I AM RUNNING no matter what!`);
}
