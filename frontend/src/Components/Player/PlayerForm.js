import React, { Component } from 'react';
import axios from 'axios';

class PlayerForm extends Component {
  submitPlayer(event) {
    event.preventDefault();

    axios
      .post('http://localhost:4000/players', {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        team: this.refs.team.value,
        iscoach: (this.refs.iscoach.value = 'on' ? true : false),
        speed: this.refs.speed.value,
        strength: this.refs.strength.value,
        endurance: this.refs.endurance.value,
        ability: this.refs.ability.value,
        techniques: this.refs.techniques.value,
        tactical: this.refs.tactical.value,
      })
      .then(() => {
        console.log('Player added successfully.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='row'>
        <h3 className='center'>Add a new player</h3>
        <form className='col s12' onSubmit={this.submitPlayer.bind(this)}>
          <div className='row'>
            <div className='input-field col s4'>
              <input id='firstName' ref='firstName' type='text' />
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='input-field col s4'>
              <input id='lastNme' ref='lastName' type='text' />
              <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className='input-field col s4'>
              <input id='team' ref='team' type='text' />
              <label htmlFor='team'>Team</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4'>
              <input id='phone' ref='phone' type='text' />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s4'>
              <input id='email' ref='email' type='text' />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='input-field col s4'>
              <span>Is Coach?</span>
              <div className='switch'>
                <label>
                  No
                  <input id='iscoach' ref='iscoach' type='checkbox' />
                  <span className='lever'></span>
                  Yes
                </label>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4'>
              <span>Speed</span>
              <p className='range-field'>
                <input type='range' id='speed' ref='speed' min='1' max='10' />
              </p>
            </div>
            <div className='input-field col s4'>
              <span>Strength</span>
              <p className='range-field'>
                <input
                  type='range'
                  id='strength'
                  ref='strength'
                  min='1'
                  max='10'
                />
              </p>
            </div>
            <div className='input-field col s4'>
              <span>Endurance</span>
              <p className='range-field'>
                <input
                  type='range'
                  id='endurance'
                  ref='endurance'
                  min='1'
                  max='10'
                />
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s4'>
              <span>Ability</span>
              <p className='range-field'>
                <input
                  type='range'
                  id='ability'
                  ref='ability'
                  min='1'
                  max='10'
                />
              </p>
            </div>
            <div className='input-field col s4'>
              <span>Techniques</span>
              <p className='range-field'>
                <input
                  type='range'
                  id='techniques'
                  ref='techniques'
                  min='1'
                  max='10'
                />
              </p>
            </div>
            <div className='input-field col s4'>
              <span>Tactical</span>
              <p className='range-field'>
                <input
                  type='range'
                  id='tactical'
                  ref='tactical'
                  min='1'
                  max='10'
                />
              </p>
            </div>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'>
            Add player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
