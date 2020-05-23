import React from 'react';
import ReactDOM from 'react-dom';
import Mornig from './components/morning'
import Salute from './components/salute'
import Parent from './components/parent'
import Child from './components/child'


ReactDOM.render(
  <div>
    <Parent name='José' lastname='Pereira'>
      <Child name='Ana'/>
      <Child name='Paulo'/>
      <Child name='Fabio'/>
    </Parent>
  </div>  
  , document.getElementById('root')
)