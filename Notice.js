import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Notice(props) {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return null;
  }

  const onCloseClick = () => {
    setClosed(true);
    props.onDismiss && props.onDismiss();
  }

  //todo: warning icon
  return (
    <div className={classNames('notice', { 'notice--danger': props.modifier === 'danger', 'notice--floating': props.floating }, props.className)}>
      <div className="notice__message">{props.children}</div>
      {(props.dismissable == null ? props.floating : props.dismissable) && (
        <button className="notice__close-button" type="button" onClick={onCloseClick} aria-label="close notice" title="close notice">X</button>
      )}
    </div>
  )
}

Notice.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  floating: PropTypes.bool,
  modifier: PropTypes.oneOf(['danger']),
  onDismiss: PropTypes.func,
};

Notice.defaultProps = {
  floating: false,
};

export default Notice;
