import React from 'react';
import GridContainer from './containers/gridContainer.js';
import ButtonContainer from './containers/buttonContainer.js';
import { undo, restart, solve, hint } from '../actions/actions.js';

class App extends React.Component {
   render() {
      return (
         <div>
           <GridContainer />
           <ButtonContainer text="Undo" action={ undo }  />
           <ButtonContainer text="Restart" action={ restart }  />
           <ButtonContainer text="Solve" action={ solve } />
           <ButtonContainer text="Hint" action={ hint } />
         </div>
      );
   }
}

export default App
