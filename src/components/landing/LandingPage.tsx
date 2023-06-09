import styled from "@emotion/styled";
import logo_square from "../../assets/logo_square.png";
import Layout from "../layout/Layout";

import { MdPause, MdSkipNext, MdSkipPrevious } from "react-icons/md";

const LandingPhoneContainer = styled.div`
  position: relative;
  height: calc(100vh - 48px);
  max-width: 100vw;
  aspect-ratio: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const LandingPhonBackgroundContainer = styled.div`
  position: absolute;
  height: calc(100vh - 48px);
  width: 100%;
  overflow: hidden;
`;

const LandingPhoneBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("${logo_square}");
  background-position: center center;
  background-size: cover;
  filter: blur(8px) brightness(40%);
  overflow: hidden;
  scale: 1.1;
`;

const LogoSquareContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 100;
`;

const LogoSquareImg = styled.img`
  width: 60%;
  aspect-ratio: 1;
`;

const LogoSquareImgLicense = styled.div`
  width: 60%;
  font-size: 0.8rem;
  font-family: UhBeemysen;
  color: #ffffff98;
  text-align: right;
`;

const SongTitle = styled.div`
  width: 100%;
  aspect-ratio: 8/1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  user-select: none;
`;

const SongTitleText = styled.div`
  font-size: 2rem;
  font-family: UhBeemysen;
`;

const MusicBarContainer = styled.div`
  width: 100%;
  aspect-ratio: 8/1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MusicBar = styled.div`
  height: 4px;
  width: 60%;
  background-color: white;
`;

const PlayStatus = styled.div`
  width: 100%;
  aspect-ratio: 8/1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  gap: 48px;
`;

const LandingPage: React.FC = () => {
  return (
    <Layout>
      <LandingPhonBackgroundContainer>
        <LandingPhoneBackground />
      </LandingPhonBackgroundContainer>
      <LandingPhoneContainer>
        <LogoSquareContainer>
          <LogoSquareImg src={logo_square} />
          <LogoSquareImgLicense>© 참치(@TU_N4_)</LogoSquareImgLicense>
        </LogoSquareContainer>
        <SongTitle>
          <SongTitleText>For. KiraKira Stage</SongTitleText>
        </SongTitle>
        <MusicBarContainer>
          <MusicBar />
        </MusicBarContainer>
        <PlayStatus>
          <MdSkipPrevious size={"48px"} />
          <MdPause size={"48px"} />
          <MdSkipNext size={"48px"} />
        </PlayStatus>
      </LandingPhoneContainer>
    </Layout>
  );
};

export default LandingPage;
