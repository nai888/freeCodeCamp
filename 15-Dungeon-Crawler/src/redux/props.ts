import * as t from '../types';

const mapStateToProps = (state: t.stateType, props: t.functionProps) => {
  return {
    player: state.player,
    enemies: state.enemies,
    gameState: state.gameState,
    log: state.log
  };
};

export default mapStateToProps;
