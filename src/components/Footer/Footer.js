import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedditCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: johariidzman@gmail.com">
            johariidzman@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 013-306-2691"> +60 13-3062691</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            This website was developed by following this tutorial by{" "}
            <a
              href="https://www.youtube.com/watch?v=OPaLnMw2i_0"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Mastery.
            </a>
          </Slogan>
          <SocialContainer>
            <SocialIcons
              href="https://github.com/kilat9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/johari-idzman-bin-dzulkarnain-a92363194/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.facebook.com/profile.php?id=100004719644702"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.reddit.com/user/Kilat9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillRedditCircle size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
