import React from 'react';
import { connect } from 'dva';
import { config } from '../../config/config.conf';

function Home() {
  return (
    <div>
      <h1>{config.Name}{config.Phone}</h1>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
