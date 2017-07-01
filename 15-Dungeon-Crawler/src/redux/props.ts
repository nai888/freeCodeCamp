import { Player, Enemy, GameState } from './reducers';

export interface StateType {
  player: Player;
  enemies: Enemy[];
  gameState: GameState;
  log: string[];
}

const mapStateToProps = (state: StateType) => {
  return {
    player: state.player,
    enemies: state.enemies,
    gameState: state.gameState,
    log: state.log
  };
};

export default mapStateToProps;
