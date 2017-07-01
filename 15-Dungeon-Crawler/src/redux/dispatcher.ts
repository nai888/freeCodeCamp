import { Dispatch } from 'react-redux';
import * as actions from './actions';
import { PlayerAction, EnemyAction, GameStateAction } from './reducers';

type DispatchType = PlayerAction | EnemyAction | GameStateAction;

function mapDispatchToProps(dispatch: Dispatch<DispatchType>) {
  return {
    onHeal: () => dispatch(actions.heal()),
    onTakeDamage: (dmg: number) => dispatch(actions.takeDamage(dmg)),
    onDealDamage: (id: number, dmg: number) => dispatch(actions.dealDamage(0, 10)),
    onSkillsUp: () => dispatch(actions.skillsUp()),
    onPlayerDie: () => dispatch(actions.playerDie()),
    onEnemyDie: (xp: number) => dispatch(actions.enemyDie(xp)),
    onLevelUp: () => dispatch(actions.levelUp()),
    onBossDie: () => dispatch(actions.bossDie()),
    onSetupMap: () => dispatch(actions.setupMap()),
    onGenEnemies: (boss: boolean) => dispatch(actions.genEnemies(boss)),
    onMove: (dir: string) => dispatch(actions.move(dir)),
    onNewGame: () => dispatch(actions.newGame()),
    onNewFloor: () => dispatch(actions.newFloor())
  };
}

export default mapDispatchToProps;
