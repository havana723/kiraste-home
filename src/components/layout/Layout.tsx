import styled from "@emotion/styled";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Background = styled.div`
  position: relative;
  background: #ffffff;
  min-height: calc(100vh - 48px);
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Background>
        <div />
        {props.children}
        <div />
      </Background>
    </>
  );
};

export default Layout;
