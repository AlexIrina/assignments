// import React, { useState } from 'react';
// import { Link, Switch, Route, Redirect } from 'react-router-dom';
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <Link to='/'>Home Page</Link>
//       <Link to='/private'>Private Page</Link>
//       <Link to='/login'> Login Page</Link>

//       <Switch>
//         <Route exact path='/'>
//           <h1>Home page</h1>
//           <h2>Anyone is allowed here.</h2>
//         </Route>

//         <Route path='/login'>
//           <h1>Welcome to the Login Page</h1>
//           <button onClick={() => setIsLoggedIn(true)}>Log in</button>
//           {!isLoggedIn ? (
//             <h2>You must first log in to go to the Private page.</h2>
//           ) : (
//             <h2>Welcome Alex. You are successfully signed in</h2>
//           )}
//         </Route>

//         <Route path='/private'>
//           {isLoggedIn ? (
//             <>
//               <h1>Welcome to the Private Page</h1>
//               <h2>You have successfully logged in</h2>
//             </>
//           ) : (
//             <>
//               {/* redirects user to the login page */}
//               <Redirect to='/login' />
//             </>
//           )}
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Link to='/'>Home Page</Link>
      <Link to='/private'>Private Page</Link>
      <Link to='/login'>Log In Page</Link>

      <Switch>
        <Route exact path='/'>
          <h1>Welcome to the Home Page!</h1>
          <h2>Anyone is welcome here.</h2>
        </Route>

        <Route path='/login'>
          <h1>Welcome to the Log In page!</h1>

          {!isLoggedIn ? (
            <h2>Please sign in to have access to the Private Page</h2>
          ) : (
            <h2> Alex, You can now view the Private Page</h2>
          )}

          <button onClick={() => setIsLoggedIn(true)}>Sign In</button>
        </Route>

        <Route path='/private'>
          {!isLoggedIn ? (
            <Redirect to='/login' />
          ) : (
            <h2>Welcome Alex, You are awesome!</h2>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
