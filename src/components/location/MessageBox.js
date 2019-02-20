import React, {PropTypes} from 'react';
import {Link} from 'react-router';

/**
 * Helper component for displaying message box
 *
 * @component
 */
const MessageBox = ({msg}) => {
    return (
      <div className="jumbotron">
            <h3>{msg}</h3>
            <br />
            <Link to="home" className="btn btn-primary btn-lg">See Sofia forecast instead</Link>
      </div>
  );
};

MessageBox.propTypes = {
    msg: PropTypes.string.isRequired
};

export default MessageBox;
