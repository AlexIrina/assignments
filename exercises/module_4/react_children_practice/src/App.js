import React from 'react';

// import InfoCallout from './InfoCallout';
// import ImageCallout from './ImageCallout';
// import EmailCallout from './EmailCallout';

// Callout will replace the top 3 components
import Callout from './Callout';

function App() {
  return (
    <div className='App'>
      <main>
        <h1>Welcome!</h1>
        <Callout>
          <h2>Don't miss out!</h2>
          <p>
            Unless you don't suffer from FOMO, you better make sure you fill out
            the email form below!
          </p>
        </Callout>
        <p>
          This is probably the best site you've ever come across. I'm glad
          you're here to witness the magnificence of this website right now.
        </p>

        <Callout>
          <img src={'https://picsum.photos/id/102/4320/3240'} alt='no img' />
          <figcaption>'Just look at those sparkling raspberries!'</figcaption>
        </Callout>
        <p>
          Here's some more unforgettable content. Lorem ipsum something or
          other.
        </p>

        <Callout>
          <h1>Give us your email. We definitely won't sell it to anyone.</h1>
          <button>Sign me up!</button>
        </Callout>
      </main>
    </div>
  );
}

export default App;
