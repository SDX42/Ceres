import * as React from 'react';

let styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <img src="./public/img/ceres.png" width="200" height="200" />
          <h2>Open Ceres</h2>
        </div>
      </div>
    );
  }
}
