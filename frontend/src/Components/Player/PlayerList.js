import React from 'react';

const PlayerList = (props) => {
  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4>Players</h4>
        </li>
        {props.players.map((item) => {
          return (
            <div className='container-fluid'>
              <div className='row'>
                <div className='col s7'>
                  <a
                    href='#!'
                    className='collection-item'
                    key={item._id}
                    onClick={props.updateCurrentPlayer.bind(this, item)}>
                    {item.firstName} {item.lastName}
                  </a>
                </div>
                <div className='col s5'>
                  <a
                    className='waves-effect waves-light btn-small'
                    key={item._id}
                    onClick={props.deletePlayer.bind(this, item)}>
                    delete
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default PlayerList;
