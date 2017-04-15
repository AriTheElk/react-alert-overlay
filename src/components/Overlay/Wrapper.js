/**
*
* Wrapper
*
*/

import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background: ${props => props.background};
  border-radius: ${props => props.radius}px;
  display: flex;
  flex-direction: column;
  height: ${props => props.size}px;
  justify-content: center;
  left: 50%;
  margin-left: -${props => props.size / 2}px;
  margin-top: -${props => props.size / 2}px;
  position: absolute;
  top: 50%;
  width: ${props => props.size}px;
  z-index: 100;
`;

Wrapper.defaultProps = {
  size: 150,
  radius: 12,
  duration: 1,
  background: "#293742"
};

export default Wrapper;
