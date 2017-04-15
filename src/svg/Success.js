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
  height: ${props => props.size / 3}px;
  margin: 10% auto;
  stroke-miterlimit: 10;
  stroke-width: 2;
  stroke: ${props => props.background};
  width: ${props => props.size / 3}px;

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

  .check {
    animation: ${stroke} .3s ${ease} .8s forwards;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    transform-origin: 50% 50%;
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

const Success = ({ size, width, height, ...props }) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width={width || size}
    height={height || size}
    viewBox="0 0 52 52"
    {...props}
  >
    <circle className="circle" cx="26" cy="26" r="25" fill="none" />
    <path className="check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </SVG>
);

Success.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

Success.defaultProps = {
  size: 60,
  width: null,
  height: null,
  background: "#293742"
};

export default Success;
