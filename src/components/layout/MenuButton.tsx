import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonBackgroud = styled.div`
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  font-family: UhBeemysen;
  gap: 8px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  user-select: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const ManImage = styled.img`
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      transform: translateY(-15px);
    }
    60% {
      -webkit-transform: translateY(-7px);
      -ms-transform: translateY(-7px);
      transform: translateY(-7px);
    }
  }

  &:hover {
    cursor: pointer;
    animation-name: bounce;
    -moz-animation-name: bounce;
  }
`;

const ButtonName = styled.div`
  font-size: 1.4rem;
`;

interface Props {
  name: string;
}

const MenuButton: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <>
      <StyledLink to={`/${name}`}>
        <ButtonBackgroud>
          <ManImage src={`/man_${name}.png`} />
          <ButtonName>{name}</ButtonName>
        </ButtonBackgroud>
      </StyledLink>
    </>
  );
};

export default MenuButton;
