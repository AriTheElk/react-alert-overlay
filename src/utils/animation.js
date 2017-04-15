import { css, keyframes } from "styled-components";

export const animation = (name, duration = 1, loops = 1) => css`
    animation: ${name} ${duration}s ${loops};
    animation-fill-mode: forwards;
  `;

export const fill = keyframes`
  100% {
    stroke-width: 50;
  }
`;

export const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

export const ease = "cubic-bezier(.85, .01, .45, 1)";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    position: relative;
    top: 10px;
  }
  100% {
    opacity: 1;
    position: relative;
    top: 0;
  }
`;

export const fadeOutUp = keyframes`
  0% {
    opacity: 1;
    position: relative;
    top: 0px;
  }
  100% {
    opacity: 0;
    position: relative;
    top: -10px;
  }
`;

export const fadeInDown = keyframes`
  0% {
    opacity: 0;
    position: relative;
    bottom: 10px;
  }
  100% {
    opacity: 1;
    position: relative;
    bottom: 0;
  }
`;

export const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    position: relative;
    bottom: 0;
  }
  100% {
    opacity: 0;
    position: relative;
    bottom: -10px;
  }
`;
