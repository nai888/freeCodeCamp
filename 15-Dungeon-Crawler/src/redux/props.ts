import { Player, Enemy, GameState } from './reducers';

export interface StateType {
  player: Player;
  enemy: Enemy[];
  gameState: GameState;
}

const mapStateToProps = (state: StateType) => {
  return {
    player: state.player,
    enemy: state.enemy,
    gameState: state.gameState
  };
};

export default mapStateToProps;
