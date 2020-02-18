// XMLHttpRequest
// 1 how do i create a xhr request ?
// 2 what parts of this object are important for my request>?

// 2: Answer
// xhr.onreadystatechange
// xhr.readyState
// xhr.status

// 1: Creates a request
// as soon as i create this xhr object ill have access to all of its properties
const xhr = new XMLHttpRequest(); //returns an object called xhr that has all the methods and properties that ill use to manage the servers request

// property that manages my request to the server
xhr.readyState();
// readyState has 4 stages. Starts at stage 1
// 1 - request has been sent from my laptop to be processed by the server
// While at the server. Server handles step 2 and step 3
// 2 - Server is processing info
// 3 - Server is gathering info
// When it arrives back to my laptop is step 4..thats the readyState()
// 4 The server has responded with data and STATUS codes that tells me if the response\ came back is in good order

// property that manages my request to the server
xhr.status();
//status of 200 ----everything went well. Your data has arrived
//status of 201 --- POST request was successfully added to a database
//status of 404 ---- server didn't find what i was requesting/ looking for
//status of 500 ---- something went wrong in the server

// How do i know the request has come back from the server?
//A: I need to create a xhr.onreadystatechange function to tell the xhr object what to do when the server has finished its process (stage 2,3) and sent the response back to me (stage 4)

// property that manages my request to the server
xhr.onreadystatechange = function() {
  // this function tells the server what to do when the readyState() changes
  // every time the readyState() changes the xhr.onreadystatechange gets triggered

  // has the state changed? if true then fire the function
  // if the GET request has been sent out and came back successfully
  if (xhr.readyState === 4 && xhr.status === 200) {
    // if true now i can handle the data that come back from the server
  }
};
