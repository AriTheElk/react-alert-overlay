/*
 * Checkmark SVG From https://codepen.io/haniotis/pen/KwvYLO?editors=0100#0
 */

import React, { PropTypes } from "react";
import styled from "styled-components";
import { fill, stroke, ease } from "../utils/animation";

const SVG = styled.svg`
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px white;
  display: block;
  margin: 10% auto;
  stroke-miterlimit: 10;
  stroke-width: 2;
  stroke: ${props => props.background};
  width: ${props => props.size / 3}px;
  height: ${props => props.size / 3}px;

  .circle {
    animation: ${stroke} .5s ${ease} forwards,
                ${fill} .4s ease-in-out .4s forwards;
    fill: none;
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-miterlimit: 10;
    stroke-width: 1;
    stroke: white;
  }

  .line, .dot {
    animation: ${stroke} .3s ${ease} .8s forwards;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    stroke-width: 3;
    transform-origin: 50% 50%;
  }
  .dot {
    animation-delay: 1s;
  }
`;

const Warning = ({ size, width, height, ...props }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 52 52"
    {...props}
  >
    <circle className="circle" cx="26" cy="26" r="25" />
    <line className="line" x1="26" y1="15" x2="26" y2="30" />
    <line className="dot" x1="26" y1="33" x2="26" y2="36" />
  </SVG>
);

Warning.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

Warning.defaultProps = {
  size: 60,
  width: null,
  height: null,
  background: "#293742"
};

export default Warning;
