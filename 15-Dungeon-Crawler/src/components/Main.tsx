import * as React from 'react';

function Main(props: {}) {
  return (
    <div className="map">
      <p>Here&rsquo;s the map.</p>
      <p><i className="fa fa-map fa-fw" aria-hidden="true" /></p>
      <p>Actually, not really. It&rsquo;s not ready yet.</p>
      <p>With no map, you should stop, or you&rsquo;ll get lost.</p>
      <p>Then again, maybe you <em>want</em> to get lost.</p>
      <p>Then again, not all who wander are lost.</p>
      <p>Really, though, what do I care? Go get lost if you want!</p>
      <p>By the way, in the future, you <i className="fa fa-user fa-fw" aria-hidden="true" /> will heal <i className="fa fa-medkit fa-fw" aria-hidden="true" /> and strenghten your skills <i className="fa fa-arrow-up fa-fw" aria-hidden="true" /> as you travel deeper into the dungeon <i className="fa fa-chevron-down fa-fw" aria-hidden="true" />, fight enemies <i className="fa fa-bug fa-fw" aria-hidden="true" /> and level up <i className="fa fa-level-up fa-fw" aria-hidden="true" /> until you can beat the boss <i className="fa fa-user-secret fa-fw" aria-hidden="true" />.</p>
    </div>
  );
}

export default Main;
