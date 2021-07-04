// * Connecting the Frontend to the Backend

// * Folder Structure
// !1. Make a Client folder that represents the front end
// !2. cd client => npx create-react-app . <- get the recent react version
// !3. delete all the react boilerplate files and start fresh
// !4. create in the CLIENTS folder not the servers => "proxy": "http://localhost:9000/" at the bottom of package.json folder --> to connect to your server -> bypasses CORS
// !5. now i can use axios or fetch to make CRUD requests to the endpoints on my own backend/server -> axios.get("/movies")
// if i wanted to connect to a 3rd party api i would have to specify the whole url -> http://imdb.com/movies
// ! Now you have 2 servers running at the same time.
// ! Click the + to run another terminal
// ? -----> 1) Client with my frontend react app -> module_5/0_first_express_server/client -> npm start
// ? -----> 2) My express server thats listening for the requests from the client -> module_5/0_first_express_server/ -> nodemon server.js
// todo : Now all i need is to learn how to host the data in an actual DB (MondoDB) not statically in a server. Thats fullstack programming
// * Proxy
// lets me connect to my servers url
