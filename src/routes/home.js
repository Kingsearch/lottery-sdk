const React = require('react');
const { connect } = require("dva");
const { config } = require('../../config/config.conf');

function Home() {
  return (
    <div>
      <h1>{config.Name}{config.Phone}</h1>
    </div>
  );
}

Home.propTypes = {
};

module.exports = connect()(Home);
