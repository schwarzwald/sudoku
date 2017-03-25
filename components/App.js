import React from 'react';
import GridContainer from './containers/gridContainer.js';
import UndoButton from './containers/undoButton.js';
import { QassimHamza } from '../puzzles.js';

class App extends React.Component {
   render() {
      return (
         <div>
           <GridContainer puzzle={ QassimHamza } />
           <UndoButton />
         </div>
      );
   }
}

export default App
