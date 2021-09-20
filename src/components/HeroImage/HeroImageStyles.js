import styled from "styled-components";

export const Img = styled.img`
  position: absolute;
  left: 370px;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 100%;
    height: 100%;
  }
  }
`;
