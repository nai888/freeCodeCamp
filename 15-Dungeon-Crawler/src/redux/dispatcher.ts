import { Dispatch } from 'react-redux';
import * as actions from './actions';
import * as t from '../types';

type DispatchType = t.playerAction | t.gameStateAction;

const mapDispatchToProps = (dispatch: Dispatch<DispatchType>) => {
  return {
    onHeal: () => dispatch(actions.heal()),
    onTakeDamage: (dmg: number) => dispatch(actions.takeDamage(dmg)),
    onDealDamage: (id: number, dmg: number) => dispatch(actions.dealDamage(id, dmg)),
    onSkillsUp: () => dispatch(actions.skillsUp()),
    onPlayerDie: () => dispatch(actions.playerDie()),
    onEnemyDie: (id: number, xp: number) => dispatch(actions.enemyDie(id, xp)),
    onLevelUp: () => dispatch(actions.levelUp()),
    onBossDie: () => dispatch(actions.bossDie()),
    onMove: (dir: t.direction) => dispatch(actions.move(dir)),
    onNewGame: () => dispatch(actions.newGame()),
    onNewFloor: () => dispatch(actions.newFloor()),
    onFog: () => dispatch(actions.fog())
  };
};

export default mapDispatchToProps;
