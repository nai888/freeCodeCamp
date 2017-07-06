import * as React from 'react';

const Footer = () => (
  <footer>
    <p>
      Built by
          {' '}
      <a
        href="https://www.freecodecamp.com/nai888"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ian A. Cook
            {' '}
        <i
          className="fa fa-free-code-camp"
          aria-hidden="true"
        />
      </a>
      , copyright &copy; 2017.
          {' '}
      <a
        href="https://github.com/nai888/freeCodeCamp/tree/master/15-Dungeon-Crawler"
        target="_blank"
        rel="noopener noreferrer"
      >
        View this project on GitHub.
            {' '}
        <i
          className="fa fa-github"
          aria-hidden="true"
        />
      </a>
    </p>
  </footer>
);

export default Footer;
