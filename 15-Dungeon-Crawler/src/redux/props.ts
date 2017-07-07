import * as t from '../types';

const mapStateToProps = (state: t.stateType) => {
  return {
    player: state.player,
    gameState: state.gameState,
    log: state.log
  };
};

export default mapStateToProps;
