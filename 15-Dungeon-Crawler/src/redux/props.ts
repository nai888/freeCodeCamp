import { Player, Enemy, GameState } from './reducers';

export interface StateType {
  player: Player;
  enemy: Enemy[];
  gameState: GameState;
  log: string[];
}

const mapStateToProps = (state: StateType) => {
  return {
    player: state.player,
    enemy: state.enemy,
    gameState: state.gameState,
    log: state.log
  };
};

export default mapStateToProps;
