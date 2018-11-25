/**
 * Npm imports
 */
import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * Local imports
 */
import './animatedWrapper.styl';

const AnimatedWrapper = WrappedComponent => props => (
  <ReactCSSTransitionGroup
    transitionAppear={true}
    transitionAppearTimeout={600}
    transitionEnterTimeout={600}
    transitionLeaveTimeout={200}
    transitionName="slide">
    <WrappedComponent {...props} />
  </ReactCSSTransitionGroup>
);

export default AnimatedWrapper;
