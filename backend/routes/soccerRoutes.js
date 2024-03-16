import {
  addNewPlayer,
  getPlayerWithID,
  getPlayers,
  updatePlayer,
  deletePlayer,
} from '../controllers/playerControllers';

const routes = (app) => {
  app
    .route('/players')

    // POST endpoint
    .post(addNewPlayer)

    // GET endpoint
    .get(getPlayers);

  app
    .route('/player/:PlayerId')
    .get(getPlayerWithID)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
