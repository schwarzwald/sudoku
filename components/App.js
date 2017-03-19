import React from 'react';
import GridContainer from './containers/gridContainer.js'
import { QassimHamza } from '../puzzles.js';

class App extends React.Component {
   render() {
      return (
         <div>
           <GridContainer puzzle={ QassimHamza } />
         </div>
      );
   }
}

export default App
