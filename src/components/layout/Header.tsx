import styled from "@emotion/styled";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { idols } from "../../constants/idols";
import MenuButton from "./MenuButton";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #f8f8f8;
  width: 100%;
  height: 48px;
  color: #000000;
  box-shadow: 0px 1px 1px #c3c3c367;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 500;
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

const MainText = styled.span`
  font-family: DOSPilgiMedium;
  font-size: 2rem;
  text-align: center;
  background-color: rgb(180, 145, 255);
  background-image: linear-gradient(
    0deg,
    rgb(255, 124, 168),
    rgb(180, 145, 255),
    rgb(124, 249, 255)
  );
  background-size: 80%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: repeat;
`;

const Menu = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  font-size: 12pt;
  z-index: 600;
`;

const MenuDrawerConatiner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  right: -100%;
  top: 0;
  transition: transform 0.4s ease;
  z-index: 550;
  overflow-y: auto;
`;

const MenuDrawerBackground = styled.div`
  position: absolute;
  width: 280px;
  max-width: 90vw;
  min-height: calc(100% - 72px);
  padding-top: 72px;
  background: white;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.15);
`;

const MenuImgLicense = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: calc(100% - 8px);
  font-size: 0.8rem;
  font-family: UhBeemysen;
  color: #00000097;
  text-align: right;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Background>
        <StyledLink to="/">
          <MainText>kiraste home</MainText>
        </StyledLink>
      </Background>
      <Menu>
        <MdMenu fontSize="16pt" onClick={() => setIsMenuOpen((p) => !p)} />
      </Menu>
      <MenuDrawerConatiner
        style={{ transform: isMenuOpen ? "translateX(-100%)" : undefined }}
      >
        <MenuDrawerBackground>
          {idols.map((idol) => (
            <MenuButton name={idol} key={idol} />
          ))}
          <div style={{ height: "48px" }} />
          <MenuImgLicense>© oldtree203</MenuImgLicense>
        </MenuDrawerBackground>
      </MenuDrawerConatiner>
    </>
  );
};

export default Header;
