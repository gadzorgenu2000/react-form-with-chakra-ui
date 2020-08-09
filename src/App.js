import React from 'react';
import ReactDOM from 'react-dom'
import Form from './components/form';
import './App.css';

const App =()=>{
return (
  <div className="app">
    <Form/>
   </div>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));