import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 40px;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(3, 1fr);
    margin: 32px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;
  position: relative;
  text-align: center;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const ListItem = styled.li`
  max-width: 5rem;
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  border-radius: 15px;
  &:hover {
    background-color: #98c8e2;
    transform: scale(1.3);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 50px;
    flex-direction: row;
  }
`;

export const StackImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: 0;
  width: 250px;
  height: 250px;
  vertical-align: middle;
  max-width: 250px;
  max-height: 250px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 200px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 200px;
    margin-bottom: 0px;
  }
`;

export const StackIconDiv = styled.div`
  vertical-align: middle;
`;

export const StackDisplay = styled.div`
  display: grid;
  grid-template-columns: 400px 450px;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const StackText = styled.div`
  margin-left: 75px;
  margin-top: 35px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-style: 2rem;
  line-height: 24px;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const StackDescription = styled.p`
  width: 100%;
  height: 100%px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;
