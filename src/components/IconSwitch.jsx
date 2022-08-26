import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch(props) {
  const { iconType, onSwitch } = props;

  return (
    <header className="header">
      <div className="material-icons md-48 icons" onClick={onSwitch}>
        {iconType}
      </div>
    </header>
  );
}

IconSwitch.propTypes = {
  iconType: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default IconSwitch;
