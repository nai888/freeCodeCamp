import * as React from 'react';

interface LogProps {

}

function Log(props: LogProps) {
  return (
    <div className="log">
      <h2>
        <i className="fa fa-pencil-square-o fa-fw" aria-hidden="true" alt="Log" />
      </h2>
      <p>
        Welcome to the dungeon, rogue! See if you can make it all the way down to the fourth floor and beat the boss!
      </p>
    </div>
  );
}

export default Log;
