import React from "react";
import { FullScreen, FlexContainer } from "../components/containers/Containers";
import { H1, H2 } from "../components/headers/Headers";
import { BigIcon } from "../components/icons/Icons";
import { BsFillCalendarFill } from "react-icons/bs";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { InternalAnchor, ExternalAnchor } from "../components/anchors/Anchors";
import { UselessButton } from "../components/buttons/Buttons";

const Home = (): JSX.Element => {
  return (
    <FullScreen>
      <FlexContainer classNames="dir-col center-all fullscreen" gap="16%">
        <FlexContainer classNames="dir-col center-all" gap="20px">
          <BigIcon>
            <BsFillCalendarFill />
          </BigIcon>
          <H1 text="Simple calendar" />
          <H2 text="Just a lightweight pocket calendar" />
        </FlexContainer>
        <InternalAnchor url="/calendar">
          <UselessButton classes="rounded home-button-bg padding-big">
            <p>Continuar</p>
          </UselessButton>
        </InternalAnchor>
        <FlexContainer gap="16px">
          <ExternalAnchor
            classes="font-large"
            url="https://github.com/JulianKominovic"
          >
            <FiGithub />
          </ExternalAnchor>
          <ExternalAnchor
            classes="font-large"
            url="https://www.linkedin.com/in/jkominovic/"
          >
            <FiLinkedin />
          </ExternalAnchor>
        </FlexContainer>
      </FlexContainer>
    </FullScreen>
  );
};

export default Home;
