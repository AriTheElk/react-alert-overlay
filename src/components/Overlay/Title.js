/**
*
* Title
*
*/

import styled from "styled-components";

const Title = styled.h2`
  align-items: center;
  color: white;
  display: flex;
  flex: .25;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin: 10px 0;
  span {
    flex: 1;
  }
`;

Title.defaultProps = {
  fontFamily: "sans-serif",
  fontSize: "24px",
  fontWeight: "300"
};

export default Title;
