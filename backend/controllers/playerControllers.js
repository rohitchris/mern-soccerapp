import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModels';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save().then((val) => {
    res.json(val);
  });
};

export const getPlayers = (req, res) => {
  Player.find().then((val) => {
    res.json(val);
  });
};

export const getPlayerWithID = (req, res) => {
  Player.findById(req.params.PlayerId).then((val) => {
    res.json(val);
  });
};

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, {
    new: true,
  }).then((val) => {
    res.json(val);
  });
};

export const deletePlayer = (req, res) => {
  Player.findByIdAndDelete({ _id: req.params.PlayerId }, req.body).then(
    (val) => {
      res.json('Successfully deleted player.');
    }
  );
};
