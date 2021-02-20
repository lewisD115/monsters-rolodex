import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    //Ensures that we can access this.setState in handleChange
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }


  //Using an arrow function automatically sets this, without having to bind the methos in the constructor
  //Lexical scoping
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters}>
      </CardList>
      
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
