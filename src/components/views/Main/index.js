import React, { Fragment } from 'react';

import Link from 'components/elements/Link.js';

import {
  gravitationPath,
  jacobiPath,
  nslpPath,
  sceletonPath,
  wizardPath
} from 'helpers/routes';

import './index.css';

const Main = () => (
  <Fragment>
    <nav>
      <ul>
        <li><Link to={gravitationPath}>Solution of Gravitational Problem</Link></li>
        <li><Link to={jacobiPath}>LAES Solution with Jacobi method</Link></li>
        <li><Link to={nslpPath}>NSLP</Link></li>
        <li><Link to={sceletonPath}>Empty Sceleton</Link></li>
        <li><Link to={wizardPath}>Wizard</Link></li>
      </ul>
    </nav>
  </Fragment>
);

export default Main;
