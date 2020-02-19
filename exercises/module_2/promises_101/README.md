# Promise

     * Promises are for handling asynchronous code
     * A Javascript Constructor:   new Promise()
     * Promises are eager


     3 states of a Promise:

        * 1:  <Pending>
        Promise always starts out as Pending. Because its not done doing what its suppose to do.

        Then a promise is either Resolved or a promise is Rejected. It cant be both. And its permanently that way.

        If you need to make a new request i need to make a new Promise

        * 2: Resolved --- ill have access to a .then() that will handle than resolution
          OR
        # 3: Rejected --- ill have access to a .catch() to resolve the problem or error that made the promise reject
        
