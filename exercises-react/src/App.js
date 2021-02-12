import {Component} from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends Component {
  render(){
    const toDoList = ['lavar roupa', 'Secar cabelo', 'ir no na aula' ];
    const itensHtml = toDoList.map((elementList) => {
       return (task(elementList)); 
      });
    
    return(
      <div>
        { itensHtml }
      </div>
    );
  }
}

export default App;
