import { Player, Enemy, GameState } from './reducers';

export interface State {
  player: Player;
  enemy: Enemy[];
  gameState: GameState;
}

const mapStateToProps = (state: State) => {
  return {
    player: state.player,
    enemy: state.enemy,
    gameState: state.gameState
  };
};

export default mapStateToProps;
