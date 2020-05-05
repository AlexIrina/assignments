import React from 'react';
// import { withPointlessHOC } from './components/withPointlessHOC';
// import { withExtraPropAdded } from './components/withExtraPropAdded';
import { withFavoriteNumber } from './components/withFavoriteNumber';
function App(props) {
  console.log(props);
  return (
    <div>
      <div>Hello world!</div>
      <div>My favorite Number is: {props.favoriteNumber}</div>
    </div>
  );
}

// const ExtraPropComponent = withExtraPropAdded(App);
// export default ExtraPropComponent;

export default withFavoriteNumber(App);
