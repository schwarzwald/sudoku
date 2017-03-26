import React from 'react';
import GridContainer from './containers/gridContainer.js';
import ButtonContainer from './containers/buttonContainer.js';
import { QassimHamza } from '../puzzles.js';
import { undo, restart } from '../actions/actions.js';

class App extends React.Component {
   render() {
      return (
         <div>
           <GridContainer puzzle={ QassimHamza } />
           <ButtonContainer text="Undo" action={ undo }  />
           <ButtonContainer text="Restart" action={ restart }  />
         </div>
      );
   }
}

export default App
