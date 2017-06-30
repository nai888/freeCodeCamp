import * as React from 'react';

interface StatusProps {

}

function StatusBar(props: StatusProps) {
  return (
    <div className="status-bar">
      <h2>
        <i className="fa fa-user fa-fw" aria-hidden="true" alt="Status" />
      </h2>
      <p>
        <i className="fa fa-medkit fa-fw" aria-hidden="true" /> <strong>Health:</strong> 20
      </p>
      <p>
        <i className="fa fa-level-up fa-fw" aria-hidden="true" /> <strong>Level:</strong> 1
      </p>
      <p>
        <i className="fa fa-chevron-up fa-fw" aria-hidden="true" /> <strong>Skill:</strong> 1
      </p>
      <p>
        <i className="fa fa-bullseye fa-fw" aria-hidden="true" /> <strong>Damage:</strong> d6 + 1
      </p>
      <p>
        <i className="fa fa-angle-double-down fa-fw" aria-hidden="true" /> <strong>Floor:</strong> 1 of 4
      </p>
      <p>
        <i className="fa fa-bug fa-fw" aria-hidden="true" /> <strong>Enemies:</strong> 10
      </p>
      <p>
        <i className="fa fa-user-secret fa-fw" aria-hidden="true" /> <strong>Boss:</strong> not on this floor
      </p>
    </div>
  );
}

export default StatusBar;
