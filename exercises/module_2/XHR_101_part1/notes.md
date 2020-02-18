# XMLHttpRequest constructor

    - The Javascript XMLHttpRequest constructor is used to make asynchronous HTTP requests from a javascript application.

    - This constructor uses callbacks to track the progress of a server requests and handle the response sent back.

# XMLHttpRequest

    - Two methods are used to set up and send the HTTP request, these methods are:
        - xhr.open() - to set up the request
        - xhr.send() - to send the request

    - The xhr object will also store the data received from the server as the xhr.responseText
        - For the servers we will be using, the responseText will be in JSON format.
