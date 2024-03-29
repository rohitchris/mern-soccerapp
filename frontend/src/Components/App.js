import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerSingle from './Player/PlayerSingle';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {},
    };

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/players';

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          players: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  deletePlayer(event) {
    if (window.confirm('Delete player?')) {
      axios
        .delete('http://localhost:4000/player/' + event._id)
        .then(() => {
          console.log('Player deleted successfully.');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken-3'>
              <a href='/' className='brand-logo'>
                Soccer Management
              </a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s4'>
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
              deletePlayer={this.deletePlayer}
            />
          </div>
          <div className='col s8'>
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
