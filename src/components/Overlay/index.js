/**
*
* Notification
*
*/

import React, { PropTypes } from "react";

import Lifecycle from "animated-lifecycle";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Success from "../../svg/Success";
import { fadeIn, fadeOut } from "../../utils/animation";

function Notification({ title, icon, duration, onComplete, ...props }) {
  return (
    <Lifecycle
      createAfter={0}
      destroyAfter={duration * 1000}
      createAnimation={fadeIn}
      createAnimationLength={350}
      destroyAnimation={fadeOut}
      destroyAnimationLength={350}
      onDestroy={onComplete}
    >
      <Wrapper {...props}>
        {icon}
        <Title><span>{title}</span></Title>
      </Wrapper>
    </Lifecycle>
  );
}

Notification.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  duration: PropTypes.number,
  onComplete: PropTypes.func
};

Notification.defaultProps = {
  title: "Success",
  icon: <Success size={50} />,
  duration: 2,
  onComplete: () => {}
};

export default Notification;
