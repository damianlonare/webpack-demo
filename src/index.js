//import _ from 'lodash';
import { cube } from './math.js';
import printMe from './print.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' /*+ cube(5)*/
  ].join('\n\n');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component(); // Store the element ro re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.bodu.appendChild(element);
  })
}
