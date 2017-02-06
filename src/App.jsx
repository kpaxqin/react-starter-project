import React, { PropTypes } from 'react';


export default function App(props) {
  return (
    <div id="app">
      <div>
        {props.children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

