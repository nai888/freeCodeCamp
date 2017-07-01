import * as React from 'react';

interface Props {
  log: string[];
}

function Log(props: Props) {
  const logMessages = props.log.map((message: string, i: number) => {
    return (
      <p key={props.log.length - i}>
        {message}
      </p>
    );
  });

  return (
    <div className="log">
      <h2>
        <i className="fa fa-pencil-square-o fa-fw" aria-hidden="true" alt="Log" />
      </h2>
      {logMessages}
    </div>
  );
}

export default Log;
