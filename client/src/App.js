import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';
import shortid from 'shortid';

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(players => this.setState({ data: players}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <div className='player-cards'>
        {this.state.data.map(players => <PlayerCard key={shortid.generate()} players={players}/>)}
        </div>
      </div>
    )
  }
}




export default App;
